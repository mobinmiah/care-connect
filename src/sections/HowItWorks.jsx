import React from 'react';

const HowItWorks = () => {
    return (
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[#111818] text-2xl sm:text-3xl font-bold mb-10 sm:mb-16 text-center">
            How It Works
          </h2>
          <div className="space-y-8 sm:space-y-12 relative before:absolute before:left-4 sm:before:left-6 before:top-2 before:bottom-2 before:w-0.5 before:bg-primary/20">
            {[
              {
                title: "Post your needs",
                desc: "Tell us about your requirements, schedule, and specific care needs. It only takes 2 minutes.",
              },
              {
                title: "Review candidates",
                desc: "Get matched with qualified caregivers. Review their profiles, ratings, and background checks.",
              },
              {
                title: "Book and pay",
                desc: "Securely book through our platform and manage payments easily with automated invoicing.",
              },
            ].map((step, idx) => (
              <div key={idx} className="relative pl-12 sm:pl-14">
                <div className="absolute left-0 top-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center text-[#111818] font-bold text-lg sm:text-xl z-10 shadow-lg shadow-primary/30">
                  {idx + 1}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#111818]">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm sm:text-base mt-1 sm:mt-2">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default HowItWorks;