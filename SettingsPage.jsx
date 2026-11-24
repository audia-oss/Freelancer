import React, { useState } from 'react';

const initialPreferences = [
  {
    id: 'job-alerts',
    title: 'New Job Alerts',
    description: 'Receive emails when new jobs match yourr skills and preferences',
    iconBg: 'bg-[#c4dbed]',
    iconSrc: '/assets/settings/work.svg',
    enabled: true,
  },
  {
    id: 'app-up',
    title: 'Application Up',
    description: 'Get notified about the status of your job appalications',
    iconBg: 'bg-[#d3faea]',
    iconSrc: '/assets/settings/send.svg',
    enabled: false,
  },
  {
    id: 'messages',
    title: 'Lowongan Baru',
    description: 'Receive an email when you get a new message from a client',
    iconBg: 'bg-[#ffe5ab]',
    iconSrc: '/assets/settings/chat.svg',
    enabled: false,
  },
  {
    id: 'updates',
    title: 'Lowongan Baru',
    description: 'Receive updates about project progress, payment, and invoices',
    iconBg: 'bg-[#e7daff]',
    iconSrc: '/assets/settings/note.svg',
    enabled: true,
  },
  {
    id: 'announcements',
    title: 'Lowongan Baru',
    description: 'Get helpful tips, new features, and, important announcements from Desivo',
    iconBg: 'bg-[#cff5fc]',
    iconSrc: '/assets/settings/megaphone.svg',
    enabled: false,
  },
];

export default function SettingsPage({ onNavigate, onBackToDashboard }) {
  const [preferences, setPreferences] = useState(initialPreferences);

  const navigate = onNavigate || ((page) => {
    if (page === 'dashboard' && onBackToDashboard) {
      onBackToDashboard();
    }
  });

  const togglePreference = (id) => {
    setPreferences((prev) =>
      prev.map((item) => (item.id === id ? { ...item, enabled: !item.enabled } : item))
    );
  };

  return (
    <div className="min-h-screen w-full bg-white font-sans text-black flex flex-col">
      
      {/* 1. TOP NAVBAR */}
      <header className="bg-[#235175] h-24 px-12 flex items-center justify-between w-full">
        <button
          onClick={() => navigate('dashboard')}
          className="flex items-center gap-3 text-left"
        >
          <div className="w-12 h-12 flex items-center justify-center">
            <img src="/assets/settings/logo-desivo.png" alt="Desivo Logo" className="max-w-[48px] max-h-[48px] object-contain" />
          </div>
          <span className="text-2xl font-medium text-white tracking-wide">Desivo</span>
        </button>

        <nav className="hidden md:flex items-center gap-12 text-white text-lg">
          <button onClick={() => navigate('dashboard')} className="hover:opacity-80 transition-opacity">Home</button>
          <a href="#about" className="hover:opacity-80 transition-opacity">About</a>
          <a href="#services" className="hover:opacity-80 transition-opacity">Services</a>
          <a href="#blog" className="hover:opacity-80 transition-opacity">Blog</a>
          <a href="#contact" className="hover:opacity-80 transition-opacity">Contact</a>
        </nav>
      </header>

      {/* 2. PAGE LAYOUT */}
      <div className="flex flex-1 w-full">
        
        {/* Left Sidebar */}
        <aside className="w-80 min-w-[320px] bg-[#f3f7fd] border-r border-slate-200 p-8 flex flex-col justify-between hidden lg:flex">
          <div>
            <h2 className="text-xl font-medium text-black mb-7">Settings</h2>
            <nav className="flex flex-col gap-4 text-base">
              <button
                onClick={() => navigate('profile')}
                className="flex items-center gap-4 text-black hover:text-[#3479b0] transition-colors py-1 text-left"
              >
                <img src="/assets/dashboard/user.svg" alt="Profile" className="w-5 h-5" />
                <span>Profile</span>
              </button>
              <a href="#security" className="flex items-center gap-4 text-black hover:text-[#3479b0] transition-colors py-1">
                <img src="/assets/dashboard/checkbox.svg" alt="Security" className="w-5 h-5" />
                <span>Account security</span>
              </a>
              <a href="#payment" className="flex items-center gap-4 text-black hover:text-[#3479b0] transition-colors py-1">
                <img src="/assets/dashboard/wallet.svg" alt="Payment" className="w-5 h-5" />
                <span>Payment</span>
              </a>
              <div className="flex items-center gap-4 text-[#3479b0] font-medium py-1">
                <img src="/assets/dashboard/notifications.svg" alt="Notifications" className="w-5 h-5" />
                <span>notification</span>
              </div>
              <button
                onClick={() => navigate('dashboard')}
                className="flex items-center gap-4 text-black hover:text-[#3479b0] transition-colors py-1 text-left"
              >
                <img src="/assets/dashboard/scantext.svg" alt="Applications" className="w-5 h-5" />
                <span>My applications</span>
              </button>
              <a href="#language" className="flex items-center gap-4 text-black hover:text-[#3479b0] transition-colors py-1">
                <img src="/assets/dashboard/globe.svg" alt="Language" className="w-5 h-5" />
                <span>language</span>
              </a>
              <a href="#privacy" className="flex items-center gap-4 text-black hover:text-[#3479b0] transition-colors py-1">
                <img src="/assets/dashboard/lock.svg" alt="Privacy" className="w-5 h-5" />
                <span>Privacy</span>
              </a>
              <div className="flex items-center gap-4 text-[#3479b0] font-medium py-1">
                <img src="/assets/dashboard/settings.svg" alt="Settings" className="w-5 h-5" />
                <span>Settings</span>
              </div>
              <button
                onClick={() => navigate('login')}
                className="flex items-center gap-4 text-black hover:text-red-600 transition-colors py-1 text-left"
              >
                <img src="/assets/dashboard/logout.svg" alt="Logout" className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </nav>
          </div>

          <div className="bg-[#c4dbed] rounded-xl p-5 flex flex-col gap-4 mt-8">
            <div>
              <h3 className="text-sm font-semibold text-black">Need Help?</h3>
              <p className="text-xs text-gray-800 mt-1">Our support team is ready to help you 24/7</p>
            </div>
            <button className="flex items-center justify-center gap-2 bg-[#4e93ca] hover:bg-[#3e81b6] border border-[#04343d] rounded-lg h-10 text-[#f0eef3] text-xs font-medium transition-colors">
              <img src="/assets/dashboard/headset-mic.svg" alt="Support" className="w-4 h-4" />
              <span>Contact support</span>
            </button>
          </div>
        </aside>

        {/* Main Settings Body */}
        <main className="flex-1 p-8 lg:p-12 max-w-[1200px] flex flex-col gap-7">
          
          <div>
            <h1 className="text-3xl font-semibold text-black">Setting Notification settings</h1>
            <p className="text-base text-gray-600 mt-1">Manage the types of emails you receive</p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-[1fr_295px] gap-8 items-start">
            
            {/* Preferences Card */}
            <div className="bg-[#f3f7fd] rounded-2xl p-8 flex flex-col gap-4">
              <div className="mb-2">
                <h2 className="text-xl font-semibold text-black">Notification prefences</h2>
                <span className="text-xs text-gray-500 block mt-6">Notification type</span>
              </div>

              <div className="flex flex-col">
                {preferences.map((item, idx) => (
                  <React.Fragment key={item.id}>
                    {idx > 0 && <div className="h-px bg-[#d1e2f2] my-4" />}
                    
                    <div className="flex items-center justify-between gap-4 py-1">
                      <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${item.iconBg}`}>
                          <img src={item.iconSrc} alt={item.title} className="w-7 h-7" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold text-black">{item.title}</span>
                          <span className="text-[11px] text-gray-600 max-w-xs">{item.description}</span>
                        </div>
                      </div>

                      {/* Animated Toggle */}
                      <button
                        type="button"
                        onClick={() => togglePreference(item.id)}
                        className={`w-16 h-8 rounded-full transition-colors relative focus:outline-none shrink-0 ${
                          item.enabled ? 'bg-[#17374e]' : 'bg-[#9ec4e8]'
                        }`}
                        aria-pressed={item.enabled}
                      >
                        <span
                          className={`absolute top-1 w-6 h-6 rounded-full bg-white shadow-md transform transition-transform ${
                            item.enabled ? 'left-9' : 'left-1'
                          }`}
                        />
                      </button>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* About Notification Card */}
            <aside className="bg-[#f3f7fd] rounded-2xl p-6 flex flex-col gap-8">
              <h2 className="text-base font-semibold text-black">About Notification</h2>

              <div className="flex flex-col items-center text-center gap-4">
                <img
                  src="/assets/settings/email-illustration.png"
                  alt="Email Envelope"
                  className="w-28 h-28 object-contain"
                />
                <p className="text-xs text-gray-800 leading-relaxed max-w-[210px]">
                  We will send important notifications related to your account.<br />
                  You can adjust your notification preferences anytime.
                </p>
              </div>

              <div className="h-px bg-[#d1e2f2]" />

              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0">
                    <img src="/assets/settings/bulb.svg" alt="Lightbulb" className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-black">Tips</span>
                    <p className="text-[9px] text-gray-600 leading-tight">
                      Make sure your primary email is active so you don’t miss any important information.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => alert('Change email modal')}
                  className="h-8 px-4 border border-[#3479b0] text-[#235175] text-[10px] font-semibold rounded hover:bg-[#3479b0] hover:text-white transition-colors ml-auto"
                >
                  Change primary email
                </button>
              </div>
            </aside>

          </div>

        </main>

      </div>

    </div>
  );
}
