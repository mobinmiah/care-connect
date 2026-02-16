import React from 'react';

const FAQ = () => {
    return (
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[#111818] text-2xl font-bold mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div className="border border-slate-100 rounded-xl overflow-hidden shadow-sm">
              <div className="flex items-center justify-between p-5 bg-white cursor-pointer">
                <span className="font-bold text-[#111818]">
                  How are caregivers vetted?
                </span>
                <span className="material-symbols-outlined text-primary">
                  expand_more
                </span>
              </div>
              <div className="px-5 pb-5 text-slate-500 text-sm">
                Every caregiver undergoes a multi-step vetting process including
                identity verification, nationwide criminal background checks,
                and professional reference reviews.
              </div>
            </div>
            <div className="border border-slate-100 rounded-xl overflow-hidden shadow-sm">
              <div className="flex items-center justify-between p-5 bg-white cursor-pointer">
                <span className="font-bold text-[#111818]">
                  What if I need to cancel?
                </span>
                <span className="material-symbols-outlined text-slate-400">
                  expand_more
                </span>
              </div>
            </div>
            <div className="border border-slate-100 rounded-xl overflow-hidden shadow-sm">
              <div className="flex items-center justify-between p-5 bg-white cursor-pointer">
                <span className="font-bold text-[#111818]">
                  Is there a minimum booking time?
                </span>
                <span className="material-symbols-outlined text-slate-400">
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