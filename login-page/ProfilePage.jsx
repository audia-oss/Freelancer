import React from 'react';

export default function ProfilePage({ onBackToDashboard }) {
  return (
    <div className="min-h-screen w-full bg-white font-sans text-black pb-20">

      {/* Top Header / Nav */}
      <header className="max-w-[1380px] mx-auto px-6 py-4 flex items-center justify-between border-b border-gray-100">
        <button
          onClick={onBackToDashboard}
          className="flex items-center gap-2 text-[#3479b0] hover:text-[#235175] text-sm font-medium transition-colors"
        >
          <span>&larr; Back to Dashboard</span>
        </button>
        <span className="bg-[#ebf2f8] text-[#235175] text-xs font-semibold px-3 py-1 rounded-full">
          HRD Review View
        </span>
      </header>

      <main className="max-w-[1380px] mx-auto px-6 pt-6 flex flex-col gap-6">

        {/* Banner */}
        <div className="w-full h-80 rounded-2xl overflow-hidden bg-sky-100 shadow-sm">
          <img
            src="/assets/profile/banner.png"
            alt="Profile Banner"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Profile Header (Avatar + Candidate Info) */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 -mt-28 md:-mt-24 relative z-10 px-2 items-center md:items-start text-center md:text-left">

          {/* Avatar Column */}
          <div className="flex flex-col items-center gap-3.5 w-56 min-w-[224px]">
            <img
              src="/assets/profile/avatar.png"
              alt="Audia Silmi Avani Hasibuan"
              className="w-56 h-56 rounded-full border-4 border-white shadow-lg object-cover bg-white"
            />

            <div className="flex items-center gap-2 text-sm text-black">
              <img src="/assets/profile/location.svg" alt="Location" className="w-4 h-4" />
              <span>Indonesia, Medan</span>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-black">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4].map((i) => (
                  <img key={i} src="/assets/profile/star-filled.svg" alt="star" className="w-4 h-4" />
                ))}
                <img src="/assets/profile/star-empty.svg" alt="star" className="w-4 h-4" />
              </div>
              <span className="whitespace-nowrap font-medium">4,2 (20 review)</span>
            </div>
          </div>

          {/* Details Column */}
          <div className="flex-1 flex flex-col gap-2 pt-2 md:pt-28">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight">
              Audia Silmi Avani Hasibuan
            </h1>
            <h2 className="text-xl sm:text-2xl font-medium text-[#3479b0] mb-1">
              Graphic Designer & Visual Designer
            </h2>

            <div className="text-xs sm:text-sm text-gray-800 leading-relaxed max-w-2xl">
              <p>I create creative and engaging visual designs for brands, businesses, and personal projects.</p>
              <p className="font-semibold text-black mt-2">Specialized in:</p>
              <p>Branding • Poster • Social Media • Illustration • UI/UX</p>
              <p className="font-semibold text-black mt-2">Tools:</p>
              <p>Figma • Adobe Photoshop • Adobe Illustrator</p>
              <p className="mt-2 text-black">Available for freelance projects and creative collaborations.</p>
            </div>
          </div>

        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[290px_360px_1fr] gap-7 mt-4 items-start">

          {/* Column 1: About me & Availability */}
          <div className="flex flex-col gap-6">

            {/* About Me */}
            <div className="bg-[#ebf2f8] rounded-2xl p-5 flex flex-col gap-3 shadow-sm hover:shadow transition-shadow">
              <div className="flex items-center gap-2">
                <img src="/assets/dashboard/user.svg" alt="User" className="w-5 h-5" />
                <h3 className="text-lg font-semibold text-[#3479b0]">About me</h3>
              </div>
              <p className="text-xs text-black leading-relaxed">
                I am a graphic designer passionate about creating creative, professional, and meaningful visual designs. I believe that good design is not merely about an attractive appearance, but also about how visual elements can convey a message and strengthen brand identity.
              </p>
            </div>

            {/* Availability */}
            <div className="bg-[#ebf2f8] rounded-2xl p-5 flex flex-col gap-3.5 shadow-sm hover:shadow transition-shadow">
              <div className="flex items-center gap-2">
                <img src="/assets/profile/work.svg" alt="Work" className="w-4 h-4" />
                <h3 className="text-base font-semibold text-[#235175]">availability</h3>
              </div>
              <ul className="flex flex-col gap-3 text-xs text-black">
                <li className="flex items-center gap-2.5">
                  <img src="/assets/profile/clock.svg" alt="Clock" className="w-4 h-4" />
                  <span>Full Time / part Time</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <img src="/assets/profile/globe.svg" alt="Globe" className="w-4 h-4" />
                  <span>Indonesia and other countries</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <img src="/assets/profile/link.svg" alt="Link" className="w-4 h-4" />
                  <span>Remote / on site</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Column 2: Contact info & Tools */}
          <div className="flex flex-col gap-6">

            {/* Contact Info */}
            <div className="bg-[#ebf2f8] rounded-2xl p-5 flex flex-col gap-3 shadow-sm hover:shadow transition-shadow">
              <h3 className="text-base font-semibold text-[#3479b0]">Contact information</h3>
              <div className="flex flex-col gap-2.5 text-xs text-black">
                <a href="mailto:audiasilmavanihasibuan@gmail.com" className="flex items-center gap-2 hover:text-[#3479b0] transition-colors">
                  <img src="/assets/profile/mail.svg" alt="Mail" className="w-4 h-4" />
                  <span>audiasilmavanihasibuan@gmail.com</span>
                </a>
                <a href="tel:+26846296348" className="flex items-center gap-2 hover:text-[#3479b0] transition-colors">
                  <img src="/assets/profile/phone.svg" alt="Phone" className="w-4 h-4" />
                  <span>+268-4629-6348</span>
                </a>
                <a href="https://www.linkedin.com/in/audia-silmi-avani-hasibuan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#3479b0] transition-colors truncate">
                  <img src="/assets/profile/linkedin.svg" alt="LinkedIn" className="w-4 h-4 shrink-0" />
                  <span className="truncate">linkedin.com/in/audia-silmi-avani-hasibuan</span>
                </a>
              </div>
            </div>

            {/* Tools */}
            <div className="bg-[#ebf2f8] rounded-2xl p-5 flex flex-col gap-4 shadow-sm hover:shadow transition-shadow">
              <h3 className="text-base font-semibold text-[#3479b0]">Tools</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'Figma', icon: '/assets/profile/tool-figma.png' },
                  { name: 'Adobe illustrator', icon: '/assets/profile/tool-ai.png' },
                  { name: 'Premiere pro', icon: '/assets/profile/tool-pr.png' },
                  { name: 'Photoshop', icon: '/assets/profile/tool-ps.png' },
                  { name: 'adobe effects', icon: '/assets/profile/tool-ae.png' },
                  { name: 'Canva', icon: '/assets/profile/tool-canva.png' },
                ].map((tool) => (
                  <div key={tool.name} className="flex items-center gap-2.5">
                    <div className="w-9 h-9 flex items-center justify-center shrink-0">
                      <img src={tool.icon} alt={tool.name} className="max-w-[36px] max-h-[36px] object-contain" />
                    </div>
                    <span className="text-xs font-medium text-black">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Column 3: Resent Work */}
          <div className="flex flex-col md:col-span-2 xl:col-span-1">
            <div className="bg-[#ebf2f8] rounded-2xl p-6 flex flex-col gap-5 shadow-sm hover:shadow transition-shadow">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-[#3479b0]">Resent work</h3>
                <a href="#see-more" className="flex items-center gap-2 text-[#3479b0] hover:text-[#235175] text-sm font-medium transition-colors">
                  <span>See more</span>
                  <img src="/assets/profile/arrow-forward.svg" alt="arrow" className="w-4 h-4" />
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="h-56 rounded-xl overflow-hidden shadow bg-white cursor-pointer hover:-translate-y-1 transition-transform">
                  <img src="/assets/profile/work1.png" alt="App UI/UX Design" className="w-full h-full object-cover" />
                </div>
                <div className="h-56 rounded-xl overflow-hidden shadow bg-white cursor-pointer hover:-translate-y-1 transition-transform">
                  <img src="/assets/profile/work2.png" alt="Landing Page Tablet Design" className="w-full h-full object-cover" />
                </div>
                <div className="h-56 rounded-xl overflow-hidden shadow bg-white cursor-pointer hover:-translate-y-1 transition-transform">
                  <img src="/assets/profile/work3.png" alt="SEO Strategy Web Mockup" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>

        </div>

      </main>

    </div>
  );
}
