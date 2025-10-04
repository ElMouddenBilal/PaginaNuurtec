// src/components/Hero.jsx
import React from "react";

const Hero = () => {
  const renderTitle = () => (
    <div className="space-y-10">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight text-center max-w-5xl mx-auto px-2">
        The ecosystem behind the world's{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-emerald-400 to-green-500">
          solar supply chain
        </span>
        .
      </h1>

      <div className="space-y-6 max-w-2xl mx-auto px-2">
        <h2 className="text-base sm:text-lg md:text-xl font-normal text-white/70 leading-relaxed text-center tracking-wide">
          A private network linking Asia's leading solar manufacturers with
          Africa's fastest-growing distributors.
        </h2>

        <h3 className="text-sm sm:text-base md:text-lg font-light text-white/80 tracking-wider text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-400 font-medium">
            Nuurtec
          </span>{" "}
          is where global solar deals get done.
        </h3>
      </div>
    </div>
  );

  const handleScrollToApply = () => {
    const section = document.getElementById("apply");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-emerald-900"
    >
      {/* Fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 pointer-events-none"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg)",
        }}
      />

      {/* Contenido Hero */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 pt-24 sm:pt-32 pb-16">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mx-auto">
            <div className="mb-10">{renderTitle()}</div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center">
              <button
                onClick={handleScrollToApply} // 🔹 scroll a SeccionCTA
                className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all shadow-lg"
              >
                Apply to join
              </button>

              <button
                onClick={handleScrollToApply} // 🔹 también scroll a SeccionCTA
                className="w-full sm:w-auto bg-white/5 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base border border-white/10 hover:bg-white/10 transform hover:scale-105 transition-all"
              >
                Schedule Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
