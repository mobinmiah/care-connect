import React from "react";

const About = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-background-light">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-[#111818] text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Our Mission</h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            Our mission is to empower families by providing access to
            compassionate, reliable, and professional care. We believe everyone
            deserves to age or grow in the comfort of their own home with
            dignity and support.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white text-primary rounded-full flex items-center justify-center shadow-sm mb-3 sm:mb-4">
              <span className="material-symbols-outlined text-2xl sm:text-3xl">
                verified_user
              </span>
            </div>
            <h3 className="text-[#111818] text-lg sm:text-xl font-bold mb-2">Trust</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Rigorous vetting and background checks for every caregiver on our
              platform.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white text-primary rounded-full flex items-center justify-center shadow-sm mb-3 sm:mb-4">
              <span className="material-symbols-outlined text-2xl sm:text-3xl">schedule</span>
            </div>
            <h3 className="text-[#111818] text-lg sm:text-xl font-bold mb-2">Reliability</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Consistent care you can depend on, whenever and wherever you need
              it most.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white text-primary rounded-full flex items-center justify-center shadow-sm mb-3 sm:mb-4">
              <span className="material-symbols-outlined text-2xl sm:text-3xl">
                volunteer_activism
              </span>
            </div>
            <h3 className="text-[#111818] text-lg sm:text-xl font-bold mb-2">Compassion</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Heartfelt care that prioritizes the emotional well-being of your
              loved ones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
