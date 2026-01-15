import React, { createContext, useContext, useState, useEffect } from 'react';

// Default values for fallback
const DEFAULT_VIDEOS = {
  hero: "https://new.socialadsexpert.com/image/Final%20Video.mp4",
  solution: "https://new.socialadsexpert.com/image/Final%20Video.mp4",
  testimonial: "https://new.socialadsexpert.com/image/Final%20Video.mp4",
  qualifying: "https://new.socialadsexpert.com/image/Final%20Video.mp4",
  metaAds: "https://new.socialadsexpert.com/image/Final%20Video.mp4",
  ecommerce: "https://new.socialadsexpert.com/image/Final%20Video.mp4",
  businessSetup: "https://new.socialadsexpert.com/image/Final%20Video.mp4",
  landingPage: "https://new.socialadsexpert.com/image/Final%20Video.mp4", 
  fakeOrder: "https://new.socialadsexpert.com/image/Final%20Video.mp4"   
};

const DEFAULT_ECOMMERCE_DEMOS = ["#", "#", "#", "#", "#", "#"];
const DEFAULT_LP_DEMOS = ["#", "#", "#", "#", "#"]; // Gadget, Fashion, Beauty, Health, Kitchen

// Default Tracking Config
const DEFAULT_TRACKING = {
  pixelId: "2072676449899461",
  accessToken: "EAAEi26IrIdgBQdTxGEoSj6441lYAZAWtwYwb8FZAlDhF4F2zz9ZBk0cqzKKYbcTPlVH1P6yYkVCTNxZAoDHYRN2WDZCvN8FL87rrbnF1iscnu0ahqZAo64APGHz07ZAKQU7zIE3n7Dg4Jlq2UkfZAFUXP1yN5zXRsKn071O4FkV6he5cxOx1eWdt1yN8ZCZBoKzz8ulwZDZD",
  testEventCode: "TEST51227"
};

interface VideoConfig {
  hero: string;
  solution: string;
  testimonial: string;
  qualifying: string;
  metaAds: string;
  ecommerce: string;
  businessSetup: string;
  landingPage: string;
  fakeOrder: string;
}

interface TrackingConfig {
  pixelId: string;
  accessToken: string;
  testEventCode: string;
}

interface AdminContextType {
  isAuthenticated: boolean;
  login: (password: string) => boolean;
  logout: () => void;
  selectedHero: number;
  setSelectedHero: (id: number) => void;
  videoUrls: VideoConfig;
  updateVideoUrl: (key: keyof VideoConfig, url: string) => void;
  demoLinks: string[]; // Ecommerce Demos
  updateDemoLink: (index: number, url: string) => void;
  landingPageDemoLinks: string[]; // Landing Page Demos
  updateLandingPageDemoLink: (index: number, url: string) => void;
  trackingConfig: TrackingConfig;
  updateTrackingConfig: (config: TrackingConfig) => void;
  analytics: { views: number; clicks: number; events: any[] };
  refreshAnalytics: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Hero Selection
  const [selectedHero, setSelectedHero] = useState<number>(() => {
    const saved = localStorage.getItem('admin_hero_id');
    return saved ? parseInt(saved) : 1;
  });

  // Multiple Video URLs
  const [videoUrls, setVideoUrls] = useState<VideoConfig>(() => {
    try {
        const saved = localStorage.getItem('admin_video_urls');
        return saved ? JSON.parse(saved) : DEFAULT_VIDEOS;
    } catch {
        return DEFAULT_VIDEOS;
    }
  });

  // Ecommerce Demo Links
  const [demoLinks, setDemoLinks] = useState<string[]>(() => {
    try {
        const saved = localStorage.getItem('admin_demo_links');
        const parsed = saved ? JSON.parse(saved) : null;
        return Array.isArray(parsed) ? parsed : DEFAULT_ECOMMERCE_DEMOS;
    } catch {
        return DEFAULT_ECOMMERCE_DEMOS;
    }
  });

  // Landing Page Demo Links
  const [landingPageDemoLinks, setLandingPageDemoLinks] = useState<string[]>(() => {
    try {
        const saved = localStorage.getItem('admin_lp_demo_links');
        const parsed = saved ? JSON.parse(saved) : null;
        return Array.isArray(parsed) ? parsed : DEFAULT_LP_DEMOS;
    } catch {
        return DEFAULT_LP_DEMOS;
    }
  });

  // Tracking Configuration
  const [trackingConfig, setTrackingConfig] = useState<TrackingConfig>(() => {
    try {
        const saved = localStorage.getItem('admin_tracking_config');
        return saved ? JSON.parse(saved) : DEFAULT_TRACKING;
    } catch {
        return DEFAULT_TRACKING;
    }
  });

  const [analytics, setAnalytics] = useState({ views: 0, clicks: 0, events: [] });

  // Persistence Effects
  useEffect(() => {
    localStorage.setItem('admin_hero_id', selectedHero.toString());
  }, [selectedHero]);

  useEffect(() => {
    localStorage.setItem('admin_video_urls', JSON.stringify(videoUrls));
  }, [videoUrls]);

  useEffect(() => {
    localStorage.setItem('admin_demo_links', JSON.stringify(demoLinks));
  }, [demoLinks]);

  useEffect(() => {
    localStorage.setItem('admin_lp_demo_links', JSON.stringify(landingPageDemoLinks));
  }, [landingPageDemoLinks]);

  useEffect(() => {
    localStorage.setItem('admin_tracking_config', JSON.stringify(trackingConfig));
  }, [trackingConfig]);

  // Auth Functions
  const login = (password: string) => {
    if (password === 'admin111') {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  // Updaters
  const updateVideoUrl = (key: keyof VideoConfig, url: string) => {
    setVideoUrls(prev => ({ ...prev, [key]: url }));
  };

  const updateDemoLink = (index: number, url: string) => {
    setDemoLinks(prev => {
      const newLinks = [...prev];
      newLinks[index] = url;
      return newLinks;
    });
  };

  const updateLandingPageDemoLink = (index: number, url: string) => {
    setLandingPageDemoLinks(prev => {
      const newLinks = [...prev];
      newLinks[index] = url;
      return newLinks;
    });
  };

  const updateTrackingConfig = (config: TrackingConfig) => {
    setTrackingConfig(config);
    setTimeout(() => window.location.reload(), 500); 
  };

  const refreshAnalytics = () => {
    try {
        const stored = localStorage.getItem('admin_analytics');
        if (stored) {
          setAnalytics(JSON.parse(stored));
        }
    } catch {
        setAnalytics({ views: 0, clicks: 0, events: [] });
    }
  };

  useEffect(() => {
    refreshAnalytics();
    const interval = setInterval(refreshAnalytics, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AdminContext.Provider value={{ 
      isAuthenticated,
      login,
      logout,
      selectedHero, 
      setSelectedHero, 
      videoUrls, 
      updateVideoUrl,
      demoLinks,
      updateDemoLink,
      landingPageDemoLinks,
      updateLandingPageDemoLink,
      trackingConfig,
      updateTrackingConfig,
      analytics,
      refreshAnalytics
    }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};