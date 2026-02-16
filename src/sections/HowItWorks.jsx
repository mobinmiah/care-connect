import React from 'react';

const HowItWorks = () => {
    return (
      <section className="py-16 px-4 bg-background-light">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[#111818] text-2xl font-bold mb-12 text-center">
            How It Works
          </h2>
          <div className="space-y-12 relative before:absolute before:left-6 before:top-2 before:bottom-2 before:w-0.5 before:bg-primary/20">
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
              <div key={idx} className="relative pl-14">
                <div className="absolute left-0 top-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-[#111818] font-bold text-xl z-10 shadow-lg shadow-primary/30">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold text-[#111818]">
                  {step.title}
                </h3>
                <p className="text-slate-500 mt-2">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default HowItWorks;