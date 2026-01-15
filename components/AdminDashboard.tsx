import React, { useState } from 'react';
import { useAdmin } from '../contexts/AdminContext';
import { X, Save, BarChart2, Layout, Video, Settings, Activity, MousePointer, Lock, LogOut, Globe, Link as LinkIcon } from 'lucide-react';
import Button from './Button';

interface AdminDashboardProps {
  onClose: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onClose }) => {
  const { 
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
  } = useAdmin();

  const [activeTab, setActiveTab] = useState<'dashboard' | 'hero' | 'video' | 'demos' | 'tracking'>('dashboard');
  const [passwordInput, setPasswordInput] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Local state for forms
  const [tempVideos, setTempVideos] = useState(videoUrls);
  const [tempDemos, setTempDemos] = useState(demoLinks);
  const [tempLPDemos, setTempLPDemos] = useState(landingPageDemoLinks);
  const [tempTracking, setTempTracking] = useState(trackingConfig);

  const handleLogin = () => {
    if (login(passwordInput)) {
      setErrorMsg('');
    } else {
      setErrorMsg('Incorrect Password');
    }
  };

  const handleSaveVideo = () => {
    // Save all keys
    Object.keys(tempVideos).forEach((key) => {
        updateVideoUrl(key as any, tempVideos[key as keyof typeof tempVideos]);
    });
    alert('All video links updated successfully!');
  };

  const handleSaveDemos = () => {
    // Save Ecommerce Demos
    tempDemos.forEach((url, index) => {
        updateDemoLink(index, url);
    });
    // Save Landing Page Demos
    tempLPDemos.forEach((url, index) => {
        updateLandingPageDemoLink(index, url);
    });
    alert('All demo website links updated successfully!');
  }

  const handleSaveTracking = () => {
    updateTrackingConfig(tempTracking);
    alert('Tracking configuration updated! The page will reload to apply changes.');
  };

  const heroOptions = [
    { id: 1, name: "Cyber Dark (Default)", desc: "High-tech, gradient, dark theme" },
    { id: 2, name: "Corporate Clean", desc: "White background, professional blue" },
    { id: 3, name: "Urgency Sales", desc: "Red/Yellow aggressive sales style" },
    { id: 4, name: "Split Modern", desc: "Image left, text right layout" },
    { id: 5, name: "Bold Typography", desc: "Large text focused, minimal" },
  ];

  const videoFields = [
    { key: 'hero', label: 'Homepage Hero Video' },
    { key: 'solution', label: 'Services Intro Video (Solution Section)' },
    { key: 'testimonial', label: 'Featured Success Story Video' },
    { key: 'qualifying', label: 'Message from Founder (Qualifying)' },
    { key: 'metaAds', label: 'Meta Ads Case Study Video' },
    { key: 'ecommerce', label: 'Ecommerce Demo Video' },
    { key: 'businessSetup', label: 'Business Setup Video' },
    { key: 'landingPage', label: 'Landing Page Service Video' },
    { key: 'fakeOrder', label: 'Fake Order/Tracking Service Video' },
  ];

  const lpCategories = ["Gadget Item", "Fashion Collection", "Cosmetics & Beauty", "Health & Fitness", "Kitchen Accessories"];

  // --- LOGIN VIEW ---
  if (!isAuthenticated) {
    return (
        <div className="fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-2xl border border-slate-700 max-w-md w-full text-center relative">
                <button onClick={onClose} className="absolute top-4 right-4 text-slate-500 hover:text-red-500"><X size={20}/></button>
                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Lock className="text-white" size={32} />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Admin Login</h2>
                <p className="text-slate-400 mb-6">Please enter your password to continue.</p>
                
                <input 
                    type="password" 
                    className="w-full p-3 bg-slate-800 border border-slate-700 rounded-xl text-white mb-4 focus:border-indigo-500 focus:outline-none"
                    placeholder="Enter Password"
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                />
                
                {errorMsg && <p className="text-red-500 text-sm mb-4">{errorMsg}</p>}
                
                <Button onClick={handleLogin} className="w-full justify-center">Login to Dashboard</Button>
            </div>
        </div>
    );
  }

  // --- DASHBOARD VIEW ---
  return (
    <div className="fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-md flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col md:flex-row h-[90vh]">
        
        {/* Sidebar */}
        <div className="w-full md:w-64 bg-slate-100 dark:bg-slate-950 p-6 flex flex-col gap-2 border-r border-slate-200 dark:border-slate-800">
           <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-6">Admin Panel</h2>
           
           <button onClick={() => { setActiveTab('dashboard'); refreshAnalytics(); }} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-left font-bold ${activeTab === 'dashboard' ? 'bg-indigo-600 text-white' : 'hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'}`}>
              <BarChart2 size={18} /> Dashboard
           </button>
           <button onClick={() => setActiveTab('hero')} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-left font-bold ${activeTab === 'hero' ? 'bg-indigo-600 text-white' : 'hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'}`}>
              <Layout size={18} /> Hero Layouts
           </button>
           <button onClick={() => setActiveTab('video')} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-left font-bold ${activeTab === 'video' ? 'bg-indigo-600 text-white' : 'hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'}`}>
              <Video size={18} /> Video Manager
           </button>
           <button onClick={() => setActiveTab('demos')} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-left font-bold ${activeTab === 'demos' ? 'bg-indigo-600 text-white' : 'hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'}`}>
              <Globe size={18} /> Demo Links
           </button>
           <button onClick={() => setActiveTab('tracking')} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-left font-bold ${activeTab === 'tracking' ? 'bg-indigo-600 text-white' : 'hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'}`}>
              <Settings size={18} /> Pixel & API
           </button>
           
           <div className="mt-auto space-y-2">
              <button onClick={logout} className="w-full flex items-center justify-center gap-2 p-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-colors font-bold">
                 <LogOut size={18} /> Logout
              </button>
              <Button variant="outline" className="w-full justify-center text-slate-500 border-slate-500 hover:bg-slate-100" onClick={onClose}>
                 <X size={18} className="mr-2" /> Close
              </Button>
           </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-8 overflow-y-auto bg-slate-50 dark:bg-slate-900">
           
           {/* DASHBOARD TAB */}
           {activeTab === 'dashboard' && (
              <div className="space-y-8 animate-fade-in">
                 <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Business Intelligence</h3>
                 
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                       <div className="flex items-center gap-4 mb-2">
                          <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-lg"><Activity /></div>
                          <span className="text-slate-500 font-bold uppercase text-xs">Total Views</span>
                       </div>
                       <p className="text-4xl font-black text-slate-900 dark:text-white">{analytics.views}</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                       <div className="flex items-center gap-4 mb-2">
                          <div className="p-3 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-lg"><MousePointer /></div>
                          <span className="text-slate-500 font-bold uppercase text-xs">Button Clicks</span>
                       </div>
                       <p className="text-4xl font-black text-slate-900 dark:text-white">{analytics.clicks}</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                       <div className="flex items-center gap-4 mb-2">
                          <div className="p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-lg"><Settings /></div>
                          <span className="text-slate-500 font-bold uppercase text-xs">Conversion Rate</span>
                       </div>
                       <p className="text-4xl font-black text-slate-900 dark:text-white">
                          {analytics.views > 0 ? ((analytics.clicks / analytics.views) * 100).toFixed(1) : 0}%
                       </p>
                    </div>
                 </div>

                 <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                    <h4 className="text-lg font-bold mb-4 text-slate-900 dark:text-white">Recent Tracking Events (CAPI Log)</h4>
                    <div className="h-64 overflow-y-auto space-y-2 pr-2">
                       {analytics.events.slice().reverse().map((ev, idx) => (
                          <div key={idx} className="flex justify-between items-center text-sm p-3 bg-slate-50 dark:bg-slate-900 rounded-lg">
                             <span className="font-mono text-indigo-600 dark:text-indigo-400">{ev.event}</span>
                             <span className="text-slate-500">{new Date(ev.time).toLocaleTimeString()}</span>
                          </div>
                       ))}
                       {analytics.events.length === 0 && <p className="text-slate-500 text-center">No events tracked yet.</p>}
                    </div>
                 </div>
              </div>
           )}

           {/* HERO LAYOUT TAB */}
           {activeTab === 'hero' && (
              <div className="space-y-6 animate-fade-in">
                 <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Select Hero Design</h3>
                 <p className="text-slate-500">Choose which hero section design is active on the homepage.</p>
                 
                 <div className="grid grid-cols-1 gap-4">
                    {heroOptions.map((opt) => (
                       <button 
                          key={opt.id}
                          onClick={() => setSelectedHero(opt.id)}
                          className={`flex items-center justify-between p-6 rounded-2xl border-2 transition-all ${
                             selectedHero === opt.id 
                             ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-900/20' 
                             : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-indigo-300'
                          }`}
                       >
                          <div className="text-left">
                             <h4 className="font-bold text-lg text-slate-900 dark:text-white">{opt.name}</h4>
                             <p className="text-sm text-slate-500">{opt.desc}</p>
                          </div>
                          {selectedHero === opt.id && (
                             <div className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">ACTIVE</div>
                          )}
                       </button>
                    ))}
                 </div>
              </div>
           )}

           {/* VIDEO MANAGER TAB */}
           {activeTab === 'video' && (
              <div className="space-y-6 animate-fade-in">
                 <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Video Manager</h3>
                 <p className="text-slate-500">Update specific videos across the website.</p>
                 
                 <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-6">
                    {videoFields.map((field) => (
                        <div key={field.key}>
                            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">{field.label}</label>
                            <input 
                                type="text" 
                                value={tempVideos[field.key as keyof typeof tempVideos]} 
                                onChange={(e) => setTempVideos({...tempVideos, [field.key]: e.target.value})}
                                className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none text-sm"
                            />
                        </div>
                    ))}
                    
                    <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                        <Button onClick={handleSaveVideo} className="w-full justify-center">
                            <Save size={18} className="mr-2" /> Save All Video Links
                        </Button>
                    </div>
                 </div>
              </div>
           )}

           {/* DEMO LINKS TAB (NEW) */}
           {activeTab === 'demos' && (
              <div className="space-y-6 animate-fade-in">
                 <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Live Demo Links</h3>
                 <p className="text-slate-500">Manage links for Ecommerce Website Demos and Landing Page Category Demos.</p>
                 
                 <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-8">
                    
                    {/* Ecommerce Section */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Globe className="text-indigo-500" />
                            <h4 className="text-xl font-bold text-slate-900 dark:text-white">Ecommerce Website Demos</h4>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {tempDemos.map((link, index) => (
                                <div key={`eco-${index}`}>
                                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Website Demo {index + 1} URL</label>
                                    <input 
                                        type="text" 
                                        value={link} 
                                        onChange={(e) => {
                                            const newDemos = [...tempDemos];
                                            newDemos[index] = e.target.value;
                                            setTempDemos(newDemos);
                                        }}
                                        className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none text-sm"
                                        placeholder="https://..."
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="border-t border-slate-200 dark:border-slate-700"></div>

                    {/* Landing Page Section */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <LinkIcon className="text-purple-500" />
                            <h4 className="text-xl font-bold text-slate-900 dark:text-white">Landing Page Category Demos</h4>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {lpCategories.map((cat, index) => (
                                <div key={`lp-${index}`}>
                                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">{cat} Demo URL</label>
                                    <input 
                                        type="text" 
                                        value={tempLPDemos[index] || ''} 
                                        onChange={(e) => {
                                            const newLPDemos = [...tempLPDemos];
                                            newLPDemos[index] = e.target.value;
                                            setTempLPDemos(newLPDemos);
                                        }}
                                        className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none text-sm"
                                        placeholder="https://..."
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                        <Button onClick={handleSaveDemos} className="w-full justify-center bg-purple-600 hover:bg-purple-700 border-purple-600">
                            <Save size={18} className="mr-2" /> Save All Demo Links
                        </Button>
                    </div>
                 </div>
              </div>
           )}

           {/* TRACKING SETTINGS TAB */}
           {activeTab === 'tracking' && (
              <div className="space-y-6 animate-fade-in">
                 <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Tracking Configuration</h3>
                 <p className="text-slate-500">Manage Facebook Pixel and Conversion API credentials.</p>
                 
                 <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-6">
                    
                    <div>
                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Facebook Pixel ID</label>
                        <input 
                            type="text" 
                            value={tempTracking.pixelId} 
                            onChange={(e) => setTempTracking({...tempTracking, pixelId: e.target.value})}
                            className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none font-mono text-sm"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">API Access Token</label>
                        <textarea 
                            rows={4}
                            value={tempTracking.accessToken} 
                            onChange={(e) => setTempTracking({...tempTracking, accessToken: e.target.value})}
                            className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none font-mono text-xs"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Test Event Code (Optional)</label>
                        <input 
                            type="text" 
                            value={tempTracking.testEventCode} 
                            onChange={(e) => setTempTracking({...tempTracking, testEventCode: e.target.value})}
                            className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none font-mono text-sm"
                            placeholder="e.g., TEST12345"
                        />
                        <p className="text-xs text-slate-500 mt-1">Leave empty to disable test mode.</p>
                    </div>

                    <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                        <Button onClick={handleSaveTracking} className="w-full justify-center bg-green-600 hover:bg-green-700 border-green-600">
                            <Save size={18} className="mr-2" /> Save & Reload Tracking
                        </Button>
                    </div>
                 </div>
              </div>
           )}

        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;