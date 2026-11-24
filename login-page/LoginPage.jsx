import React, { useState } from 'react';

export default function LoginPage({ onLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', formData);
    if (onLogin) {
      onLogin(formData);
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#ebf2f8] bg-cover bg-left md:bg-center flex items-center justify-center overflow-x-hidden font-sans"
         style={{ backgroundImage: "url('/assets/background.png')" }}>
      
      {/* Main Container */}
      <div className="w-full max-w-[1440px] min-h-screen mx-auto flex flex-col lg:flex-row items-center lg:items-end justify-between px-6 sm:px-12 lg:px-20 pt-12 lg:pt-0">
        
        {/* Left Hero Section */}
        <div className="w-full lg:max-w-[620px] pb-12 lg:pb-[220px] select-none text-center lg:text-left">
          <h1 className="text-4xl sm:text-6xl lg:text-[80px] font-bold text-black leading-[1.1] tracking-tight mb-8">
            <span className="block">Hello</span>
            <span className="block">Freelancer design</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-[24px] text-gray-900 leading-relaxed max-w-[520px] mx-auto lg:mx-0">
            Find creative projects that match your skills, work with amazing clients, and grow your freelance career.
          </p>
        </div>

        {/* Right Login Card */}
        <div className="w-full max-w-[570px] flex flex-col">
          <div className="bg-white border-4 border-[#3a89c4] border-b-0 rounded-t-[40px] px-8 sm:px-11 pt-12 pb-12 shadow-2xl">
            
            {/* Header */}
            <div className="flex items-center justify-center gap-3 mb-10">
              <h2 className="text-3xl sm:text-[44px] font-medium text-black tracking-tight">
                Welcome back
              </h2>
              <img
                src="/assets/mouse-pointer.svg"
                alt="Pointer"
                className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 transition-transform duration-200 hover:scale-110"
              />
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              {/* Name Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-[14.5px] font-medium text-[#3a3740] tracking-wide">
                  Name
                </label>
                <div className="flex items-center bg-[#ebf2f8] border-[1.25px] border-[#c4dbed] rounded-[9px] px-4 py-3 focus-within:border-[#3a89c4] focus-within:bg-white transition-colors">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Yanti..."
                    required
                    className="w-full bg-transparent outline-none text-slate-800 placeholder-[#a79eb7] text-base"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-[14.5px] font-medium text-[#3a3740] tracking-wide">
                  Email
                </label>
                <div className="flex items-center bg-[#ebf2f8] border-[1.25px] border-[#c4dbed] rounded-[9px] px-4 py-3 focus-within:border-[#3a89c4] focus-within:bg-white transition-colors">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Yantihasibuan@gmai.com"
                    required
                    className="w-full bg-transparent outline-none text-slate-800 placeholder-[#a79eb7] text-base"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="password" className="text-[14.5px] font-medium text-[#3a3740] tracking-wide">
                  Password
                </label>
                <div className="flex items-center bg-[#ebf2f8] border-[1.25px] border-[#c4dbed] rounded-[9px] px-4 py-3 focus-within:border-[#3a89c4] focus-within:bg-white transition-colors">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Hasibuan cantik"
                    required
                    className="w-full bg-transparent outline-none text-slate-800 placeholder-[#a79eb7] text-base"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="ml-2 text-slate-400 hover:text-slate-600 transition-colors"
                    aria-label="Toggle password visibility"
                  >
                    <img
                      src="/assets/eye-closed.svg"
                      alt="Eye"
                      className={`w-5 h-5 ${showPassword ? 'opacity-40' : 'opacity-100'}`}
                    />
                  </button>
                </div>
              </div>

              {/* Forgot Password */}
              <div className="text-center -mt-1">
                <a
                  href="#forgot-password"
                  className="text-base text-[#38353d] hover:text-[#3a89c4] hover:underline transition-colors"
                >
                  Forgot password
                </a>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full h-11 bg-[#3a89c4] hover:bg-[#3479b0] text-white font-medium text-base rounded-[7px] tracking-wide shadow-md hover:shadow-lg transition-all active:scale-[0.99]"
              >
                Login
              </button>

              {/* Divider */}
              <div className="flex items-center gap-4 my-1">
                <div className="flex-1 h-px bg-[#38353d] opacity-80" />
                <span className="text-base font-medium text-[#38353d] select-none">OR</span>
                <div className="flex-1 h-px bg-[#38353d] opacity-80" />
              </div>

              {/* Social Login Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  className="flex items-center justify-center gap-3 h-11 border-2 border-[#3479b0] rounded-full bg-white text-[#17374e] font-medium text-sm sm:text-base hover:bg-sky-50 transition-all hover:-translate-y-0.5"
                >
                  <img src="/assets/google.svg" alt="Google" className="w-6 h-6" />
                  <span>Google</span>
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center gap-3 h-11 border-2 border-[#3479b0] rounded-full bg-white text-[#235175] font-medium text-sm sm:text-base hover:bg-sky-50 transition-all hover:-translate-y-0.5"
                >
                  <img src="/assets/facebook.svg" alt="Facebook" className="w-6 h-6" />
                  <span>Facebook</span>
                </button>
              </div>

            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
