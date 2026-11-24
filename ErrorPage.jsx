import React from 'react';

/**
 * 404 Error Page Component
 * Faithfully implemented from Figma design: Desktop - 3 (node-id: 165:534)
 */
export default function ErrorPage({ onBackToHomepage }) {
  const handleBack = () => {
    if (onBackToHomepage) {
      onBackToHomepage();
    } else {
      window.location.href = '/dashboard.html';
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-white flex flex-col items-center justify-center overflow-x-hidden font-['Roboto',sans-serif]">
      {/* Container matching desktop proportions */}
      <div className="relative w-full max-w-[1100px] px-6 py-12 flex flex-col items-center justify-center">

        {/* 1. Top-Left Question Mark */}
        <div
          className="absolute pointer-events-none select-none w-[131px] h-[131px]"
          style={{
            top: '-20px',
            left: '140px',
            transform: 'rotate(-15.36deg)'
          }}
          aria-hidden="true"
        >
          <img
            src="/assets/error/help-1.svg"
            alt=""
            className="w-full h-full block"
          />
        </div>

        {/* 2. Bottom-Left Question Mark */}
        <div
          className="absolute pointer-events-none select-none w-[131px] h-[131px]"
          style={{
            top: '310px',
            left: '120px',
            transform: 'rotate(-23.93deg)'
          }}
          aria-hidden="true"
        >
          <img
            src="/assets/error/help-2.svg"
            alt=""
            className="w-full h-full block"
          />
        </div>

        {/* 3. Top-Right Question Mark */}
        <div
          className="absolute pointer-events-none select-none w-[131px] h-[131px]"
          style={{
            top: '-10px',
            right: '170px',
            transform: 'rotate(22.38deg)'
          }}
          aria-hidden="true"
        >
          <img
            src="/assets/error/help-3.svg"
            alt=""
            className="w-full h-full block"
          />
        </div>

        {/* 4. Bottom-Right Question Mark */}
        <div
          className="absolute pointer-events-none select-none w-[131px] h-[131px]"
          style={{
            top: '380px',
            right: '160px',
            transform: 'rotate(22.38deg)'
          }}
          aria-hidden="true"
        >
          <img
            src="/assets/error/help-3.svg"
            alt=""
            className="w-full h-full block"
          />
        </div>

        {/* Center Content: 404, Title, Subtitle, CTA Button */}
        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Giant 404 */}
          <h1
            className="font-medium text-[300px] leading-[0.9] text-black tracking-[-0.25px] select-none"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            404
          </h1>

          {/* Oops! Page not found */}
          <h2
            className="font-normal text-[48px] leading-[1.2] text-black mt-6 mb-5 tracking-normal"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Oops! Page not found
          </h2>

          {/* Descriptive text */}
          <p
            className="font-normal text-[24px] leading-[1.45] text-black max-w-[720px] mb-8 whitespace-pre-line"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            {`The page could not be found. Please check your connection\nor visit a page where you might find what you are looking for.`}
          </p>

          {/* Action button */}
          <button
            type="button"
            onClick={handleBack}
            className="flex items-center justify-center w-[350px] h-[65px] bg-[#12293b] hover:bg-[#1c3c54] active:bg-[#0e1f2c] text-white text-[24px] font-normal rounded-[12px] transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Back to homepage
          </button>
        </div>

      </div>
    </div>
  );
}
