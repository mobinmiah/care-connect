import React from 'react';

const FAQ = () => {
    return (
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[#111818] text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3 sm:space-y-4">
            <div className="border border-slate-100 rounded-xl overflow-hidden shadow-sm">
              <div className="flex items-center justify-between gap-3 p-4 sm:p-5 bg-white cursor-pointer">
                <span className="font-bold text-[#111818] text-sm sm:text-base min-w-0">
                  How are caregivers vetted?
                </span>
                <span className="material-symbols-outlined text-primary shrink-0">
                  expand_more
                </span>
              </div>
              <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-slate-500 text-sm">
                Every caregiver undergoes a multi-step vetting process including
                identity verification, nationwide criminal background checks,
                and professional reference reviews.
              </div>
            </div>
            <div className="border border-slate-100 rounded-xl overflow-hidden shadow-sm">
              <div className="flex items-center justify-between gap-3 p-4 sm:p-5 bg-white cursor-pointer">
                <span className="font-bold text-[#111818] text-sm sm:text-base min-w-0">
                  What if I need to cancel?
                </span>
                <span className="material-symbols-outlined text-slate-400 shrink-0">
                  expand_more
                </span>
              </div>
            </div>
            <div className="border border-slate-100 rounded-xl overflow-hidden shadow-sm">
              <div className="flex items-center justify-between gap-3 p-4 sm:p-5 bg-white cursor-pointer">
                <span className="font-bold text-[#111818] text-sm sm:text-base min-w-0">
                  Is there a minimum booking time?
                </span>
                <span className="material-symbols-outlined text-slate-400 shrink-0">
                  expand_more
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default FAQ;