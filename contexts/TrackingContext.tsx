import React, { createContext, useContext, useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';

interface TrackingContextType {
  trackEvent: (eventName: string, data?: any) => void;
  trackButtonClick: (buttonName: string) => void;
}

const TrackingContext = createContext<TrackingContextType | undefined>(undefined);

export const TrackingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [startTime, setStartTime] = useState(Date.now());
  const scrollDepth = useRef(0);

  // Load config directly from localStorage to ensure availability before context initializes
  // We duplicate logic slightly from AdminContext to avoid circular dependency or race conditions
  const getTrackingConfig = () => {
    const saved = localStorage.getItem('admin_tracking_config');
    if (saved) return JSON.parse(saved);
    return {
      pixelId: "2072676449899461",
      accessToken: "EAAEi26IrIdgBQdTxGEoSj6441lYAZAWtwYwb8FZAlDhF4F2zz9ZBk0cqzKKYbcTPlVH1P6yYkVCTNxZAoDHYRN2WDZCvN8FL87rrbnF1iscnu0ahqZAo64APGHz07ZAKQU7zIE3n7Dg4Jlq2UkfZAFUXP1yN5zXRsKn071O4FkV6he5cxOx1eWdt1yN8ZCZBoKzz8ulwZDZD",
      testEventCode: "TEST51227"
    };
  };

  const config = getTrackingConfig();

  // Helper: Generate Client User Agent & IP (Simulated for frontend)
  const getUserData = () => {
    return {
      client_user_agent: navigator.userAgent,
      client_ip_address: null, 
      fbc: getCookie('_fbc'),
      fbp: getCookie('_fbp'),
    };
  };

  // Helper: Get Cookie
  const getCookie = (name: string) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift();
    return null;
  };

  // 1. Send to Browser Pixel
  const sendBrowserEvent = (eventName: string, data: any = {}) => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', eventName, data);
    }
  };

  // 2. Send to CAPI (Conversion API)
  const sendCAPIEvent = async (eventName: string, data: any = {}) => {
    if (!config.accessToken || !config.pixelId) return;

    const eventId = `event-${Date.now()}-${Math.random()}`;
    const userData = getUserData();

    const payload = {
      data: [
        {
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          action_source: "website",
          event_source_url: window.location.href,
          event_id: eventId,
          user_data: userData,
          custom_data: data,
        },
      ],
      test_event_code: config.testEventCode, 
    };

    try {
      await fetch(`https://graph.facebook.com/v19.0/${config.pixelId}/events?access_token=${config.accessToken}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
    } catch (error) {
      console.error('CAPI Error:', error);
    }
  };

  // Unified Track Function
  const trackEvent = (eventName: string, data: any = {}) => {
    sendBrowserEvent(eventName, data);
    sendCAPIEvent(eventName, data);
    
    // Save to Local Analytics (Admin Dashboard)
    saveLocalAnalytics(eventName);
  };

  const trackButtonClick = (buttonName: string) => {
    trackEvent('ButtonClick', { button_name: buttonName });
  };

  const saveLocalAnalytics = (eventName: string) => {
    const stored = localStorage.getItem('admin_analytics');
    const analytics = stored ? JSON.parse(stored) : { views: 0, clicks: 0, events: [] };
    
    if (eventName === 'PageView') analytics.views += 1;
    if (eventName === 'ButtonClick') analytics.clicks += 1;
    
    analytics.events.push({ event: eventName, time: new Date().toISOString() });
    if (analytics.events.length > 100) analytics.events.shift();
    
    localStorage.setItem('admin_analytics', JSON.stringify(analytics));
  };

  // Initialization: Load FB SDK
  useEffect(() => {
    if (!config.pixelId) return;

    if (!(window as any).fbq) {
        let n: any = (window as any).fbq = function() {
            n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
        };
        if (!(window as any)._fbq) (window as any)._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        const t = document.createElement('script');
        t.async = !0;
        t.src = 'https://connect.facebook.net/en_US/fbevents.js';
        const s = document.getElementsByTagName('script')[0];
        s.parentNode?.insertBefore(t, s);
    }
    (window as any).fbq('init', config.pixelId);
  }, [config.pixelId]);

  // Track PageView on route change
  useEffect(() => {
    trackEvent('PageView');
    setStartTime(Date.now());
    scrollDepth.current = 0;
  }, [location.pathname]);

  // Track Time Spent
  useEffect(() => {
    return () => {
      const timeSpent = (Date.now() - startTime) / 1000;
      if (timeSpent > 5) {
        trackEvent('TimeSpent', { seconds: timeSpent });
      }
    };
  }, [startTime]);

  // Track Scroll Depth
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      if (scrollPercent >= 25 && scrollDepth.current < 25) {
        scrollDepth.current = 25;
        trackEvent('ScrollDepth', { depth: '25%' });
      } else if (scrollPercent >= 50 && scrollDepth.current < 50) {
        scrollDepth.current = 50;
        trackEvent('ScrollDepth', { depth: '50%' });
      } else if (scrollPercent >= 75 && scrollDepth.current < 75) {
        scrollDepth.current = 75;
        trackEvent('ScrollDepth', { depth: '75%' });
      } else if (scrollPercent >= 99 && scrollDepth.current < 100) {
        scrollDepth.current = 100;
        trackEvent('ScrollDepth', { depth: '100%' });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <TrackingContext.Provider value={{ trackEvent, trackButtonClick }}>
      {children}
    </TrackingContext.Provider>
  );
};

export const useTracking = () => {
  const context = useContext(TrackingContext);
  if (!context) {
    throw new Error('useTracking must be used within a TrackingProvider');
  }
  return context;
};