import React from "react";

const About = () => {
  return (
    <section class="py-16 px-4 bg-background-light">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-[#111818] text-2xl font-bold mb-4">Our Mission</h2>
          <p class="text-slate-600 text-lg max-w-2xl mx-auto">
            Our mission is to empower families by providing access to
            compassionate, reliable, and professional care. We believe everyone
            deserves to age or grow in the comfort of their own home with
            dignity and support.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="flex flex-col items-center text-center">
            <div class="w-16 h-16 bg-white text-primary rounded-full flex items-center justify-center shadow-sm mb-4">
              <span class="material-symbols-outlined text-3xl">
                verified_user
              </span>
            </div>
            <h3 class="text-[#111818] text-xl font-bold mb-2">Trust</h3>
            <p class="text-slate-500 text-sm">
              Rigorous vetting and background checks for every caregiver on our
              platform.
            </p>
          </div>

          <div class="flex flex-col items-center text-center">
            <div class="w-16 h-16 bg-white text-primary rounded-full flex items-center justify-center shadow-sm mb-4">
              <span class="material-symbols-outlined text-3xl">schedule</span>
            </div>
            <h3 class="text-[#111818] text-xl font-bold mb-2">Reliability</h3>
            <p class="text-slate-500 text-sm">
              Consistent care you can depend on, whenever and wherever you need
              it most.
            </p>
          </div>

          <div class="flex flex-col items-center text-center">
            <div class="w-16 h-16 bg-white text-primary rounded-full flex items-center justify-center shadow-sm mb-4">
              <span class="material-symbols-outlined text-3xl">
                volunteer_activism
              </span>
            </div>
            <h3 class="text-[#111818] text-xl font-bold mb-2">Compassion</h3>
            <p class="text-slate-500 text-sm">
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
