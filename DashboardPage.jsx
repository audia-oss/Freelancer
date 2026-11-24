import React, { useState } from 'react';

const applicationsData = [
  {
    id: 1,
    title: 'UIUX Designer (Mobile app)',
    company: 'Kerja kreatif',
    date: 'Interview 9 sept 2026',
    status: 'rejected',
    iconBg: 'bg-[#f5fffb]',
    iconSrc: '/assets/dashboard/logo-uiux.svg',
  },
  {
    id: 2,
    title: 'illustration design (vector)',
    company: 'Logoni company',
    date: 'Interview 20 sept 2026',
    status: 'applied',
    iconBg: 'bg-[#d9efff]',
    iconSrc: '/assets/dashboard/logo-vector.svg',
  },
  {
    id: 3,
    title: 'Editor Social media',
    company: 'elisabert tiktokers',
    date: 'Interview 1 Juny 2026',
    status: 'interview',
    iconBg: 'bg-[#fbe7e2]',
    iconSrc: '/assets/dashboard/logo-media.svg',
  },
  {
    id: 4,
    title: 'Brand Identity Designer',
    company: 'Ambassador viki',
    date: 'Interview 2 sept 2026',
    status: 'rejected',
    iconBg: 'bg-[#ffe5ab]',
    iconSrc: '/assets/dashboard/logo-brand.svg',
  },
  {
    id: 5,
    title: 'Poster Design',
    company: 'Arta Visual',
    date: 'Interview 10 July 2026',
    status: 'applied',
    iconBg: 'bg-[#e7daff]',
    iconSrc: '/assets/dashboard/logo-poster.svg',
  },
];

export default function DashboardPage({ onLogout, onViewProfile, onViewSettings }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredApps = applicationsData.filter((app) => {
    const matchesFilter = activeFilter === 'all' || app.status === activeFilter;
    const matchesSearch =
      app.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.company.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case 'rejected':
        return (
          <div className="flex items-center gap-1.5 px-3.5 py-1 rounded-xl bg-[#ffd1d8] text-[#ae2a44] text-xs font-normal">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ae2a44]" />
            <span>rejected</span>
          </div>
        );
      case 'applied':
        return (
          <div className="flex items-center gap-1.5 px-3.5 py-1 rounded-xl bg-[#bff5ff] text-[#04343d] text-xs font-normal">
            <span className="w-1.5 h-1.5 rounded-full bg-[#04343d]" />
            <span>Applied</span>
          </div>
        );
      case 'interview':
        return (
          <div className="flex items-center gap-1.5 px-3.5 py-1 rounded-xl bg-[#e7daff] text-[#3b2d55] text-xs font-normal">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3b2d55]" />
            <span>Interview</span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen w-full bg-white font-sans text-[#17374e]">
      
      {/* 1. LEFT SIDEBAR */}
      <aside className="w-80 min-w-[320px] bg-[#f3f7fd] border-r border-slate-200 p-8 flex flex-col justify-between sticky top-0 h-screen overflow-y-auto">
        <div>
          <h2 className="text-[22px] font-medium text-black mb-8">Settings</h2>
          
          <nav className="flex flex-col gap-4">
            <button
              onClick={onViewProfile}
              className="flex items-center gap-4 text-[17px] text-black hover:text-[#3a89c4] transition-colors py-1 text-left"
            >
              <img src="/assets/dashboard/user.svg" alt="Profile" className="w-6 h-6" />
              <span>Profile</span>
            </button>
            <a href="#security" className="flex items-center gap-4 text-[17px] text-black hover:text-[#3a89c4] transition-colors py-1">
              <img src="/assets/dashboard/checkbox.svg" alt="Account security" className="w-6 h-6" />
              <span>Account security</span>
            </a>
            <a href="#payment" className="flex items-center gap-4 text-[17px] text-black hover:text-[#3a89c4] transition-colors py-1">
              <img src="/assets/dashboard/wallet.svg" alt="Payment" className="w-6 h-6" />
              <span>Payment</span>
            </a>
            <button
              onClick={onViewSettings}
              className="flex items-center gap-4 text-[17px] text-black hover:text-[#3a89c4] transition-colors py-1 text-left"
            >
              <img src="/assets/dashboard/notifications.svg" alt="notification" className="w-6 h-6" />
              <span>notification</span>
            </button>
            <a href="#applications" className="flex items-center gap-4 text-[17px] font-medium text-[#3a89c4] py-1">
              <img src="/assets/dashboard/scantext.svg" alt="My applications" className="w-6 h-6" />
              <span>My applications</span>
            </a>
            <a href="#language" className="flex items-center gap-4 text-[17px] text-black hover:text-[#3a89c4] transition-colors py-1">
              <img src="/assets/dashboard/globe.svg" alt="language" className="w-6 h-6" />
              <span>language</span>
            </a>
            <a href="#privacy" className="flex items-center gap-4 text-[17px] text-black hover:text-[#3a89c4] transition-colors py-1">
              <img src="/assets/dashboard/lock.svg" alt="Privacy" className="w-6 h-6" />
              <span>Privacy</span>
            </a>
            <button
              onClick={onViewSettings}
              className="flex items-center gap-4 text-[17px] text-black hover:text-[#3a89c4] transition-colors py-1 text-left"
            >
              <img src="/assets/dashboard/settings.svg" alt="Settings" className="w-6 h-6" />
              <span>Settings</span>
            </button>
            <button
              onClick={onLogout}
              className="flex items-center gap-4 text-[17px] text-black hover:text-red-600 transition-colors py-1 text-left"
            >
              <img src="/assets/dashboard/logout.svg" alt="Logout" className="w-6 h-6" />
              <span>Logout</span>
            </button>
          </nav>
        </div>

        {/* Need Help Card */}
        <div className="bg-[#c4dbed] rounded-[14px] p-5 flex flex-col gap-4 mt-8">
          <div>
            <h3 className="text-base font-semibold text-black">Need Help?</h3>
            <p className="text-[13.5px] text-gray-800 mt-1">Our support team is ready to help you 24/7</p>
          </div>
          <button className="flex items-center justify-center gap-2 bg-[#4e93ca] hover:bg-[#3e81b6] border border-[#04343d] rounded-lg h-10 text-[#f0eef3] text-[13.5px] font-medium transition-colors">
            <img src="/assets/dashboard/headset-mic.svg" alt="Support" className="w-4 h-4" />
            <span>Contact support</span>
          </button>
        </div>
      </aside>

      {/* 2. MAIN DASHBOARD CONTENT */}
      <main className="flex-1 p-8 lg:p-12 max-w-[1200px] flex flex-col gap-8">
        
        {/* Topbar */}
        <header className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-3 bg-[#ebf2f8] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#3a89c4] rounded-full px-5 h-12 w-full max-w-[600px] transition-all">
            <img src="/assets/dashboard/search.svg" alt="Search" className="w-5 h-5 shrink-0" />
            <input
              type="text"
              placeholder="Search your job"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent outline-none w-full text-sm text-[#17374e] placeholder-gray-500"
            />
          </div>

          <div className="flex items-center gap-8 shrink-0">
            <button className="relative">
              <img src="/assets/dashboard/bell-badge.svg" alt="Notifications" className="w-8 h-8" />
            </button>
            <button
              onClick={onViewProfile}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity text-left"
              title="View Profile"
            >
              <img src="/assets/dashboard/avatar.png" alt="Audia silmi" className="w-12 h-12 rounded-full object-cover" />
              <span className="text-base font-medium text-black hidden sm:inline">Audia silmi</span>
            </button>
          </div>
        </header>

        {/* Title */}
        <div>
          <h1 className="text-4xl font-bold text-[#17374e]">My applications</h1>
          <p className="text-base text-gray-500 mt-1">track the status of your job applications and see updates from clients here</p>
        </div>

        {/* Filter Pills */}
        <div className="flex gap-4 flex-wrap">
          {[
            { label: 'All', key: 'all', count: 9 },
            { label: 'Applied', key: 'applied', count: 3 },
            { label: 'Interview', key: 'interview', count: 4 },
            { label: 'Rejected', key: 'rejected', count: 2 },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key)}
              className={`flex items-center gap-2.5 h-9 px-4 rounded-2xl text-sm font-medium transition-all ${
                activeFilter === tab.key
                  ? 'bg-[#438bf8] text-white border border-[#438bf8]'
                  : 'bg-white border border-[#73c4ff] text-[#438bf8] hover:bg-[#f3f8fd]'
              }`}
            >
              <span>{tab.label}</span>
              <span className="bg-[#77adff] text-white text-xs px-2 py-0.5 rounded-full">
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Two-column layout: Applications + Right Stats */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-8 items-start">
          
          {/* Applications list */}
          <div className="flex flex-col gap-4">
            {filteredApps.map((app) => (
              <div
                key={app.id}
                className="bg-[#f3f7fd] hover:shadow-md rounded-2xl p-5 flex items-center justify-between gap-4 transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 overflow-hidden ${app.iconBg}`}>
                    <img
                      src={app.iconSrc}
                      alt={app.company}
                      className={app.id === 1 || app.id === 4 ? "w-7 h-7 object-contain" : "w-full h-full object-cover"}
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-base font-bold text-[#17374e]">{app.title}</h3>
                    <span className="text-xs text-[#17374e]/80 mt-0.5">{app.company}</span>
                    <div className="flex items-center gap-1.5 mt-1.5">
                      <img src="/assets/dashboard/calendar.svg" alt="calendar" className="w-2.5 h-2.5 opacity-80" />
                      <span className="text-[10px] text-[#17374e]/80">{app.date}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {getStatusBadge(app.status)}
                  <img src="/assets/dashboard/arrow-right.svg" alt="arrow" className="w-5 h-5 opacity-70" />
                </div>
              </div>
            ))}
          </div>

          {/* Right Sidebar */}
          <div className="flex flex-col gap-6">
            
            {/* Total Applications Card */}
            <div className="bg-[#f3f7fd] rounded-2xl p-6 flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#77adff] flex items-center justify-center shrink-0">
                  <img src="/assets/dashboard/send.svg" alt="airplane" className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-sm font-semibold text-black block">Total Applications</span>
                  <span className="text-4xl font-bold text-black">13</span>
                </div>
              </div>

              <div className="flex justify-between items-center pt-3 border-t border-slate-200">
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-1.5 text-xs text-[#04343d]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#04343d]" />
                    <span>Applied</span>
                  </div>
                  <span className="text-xs font-semibold text-black mt-1">6</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-1.5 text-xs text-[#3b2d55]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3b2d55]" />
                    <span>Interview</span>
                  </div>
                  <span className="text-xs font-semibold text-black mt-1">3</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-1.5 text-xs text-[#ae2a44]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ae2a44]" />
                    <span>rejected</span>
                  </div>
                  <span className="text-xs font-semibold text-black mt-1">3</span>
                </div>
              </div>
            </div>

            {/* Tips Card */}
            <div className="bg-[#f3f7fd] rounded-2xl p-6 flex flex-col gap-5">
              <div className="flex items-center gap-2.5">
                <img src="/assets/dashboard/bulb.svg" alt="bulb" className="w-6 h-6" />
                <span className="text-base font-semibold text-black">Tips For You</span>
              </div>

              <ol className="flex flex-col gap-4">
                {[
                  'Tailor your portfolio to match the job requirements.',
                  'Use a CV that is concise and easy to understand.',
                  'Write a personalized and relevant application message.',
                  'Don’t forget to keep your skills and portfolio up to date.',
                  'Highlight your strengths and unique skills to stand out from other applicants.',
                ].map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-5 h-5 min-w-[20px] rounded-full bg-[#77adff] text-white text-xs font-semibold flex items-center justify-center mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-xs text-gray-800 leading-relaxed">{tip}</p>
                  </li>
                ))}
              </ol>
            </div>

          </div>

        </div>

      </main>

    </div>
  );
}
