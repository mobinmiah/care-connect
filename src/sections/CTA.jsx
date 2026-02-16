import Link from 'next/link';
import React from 'react';

const CTA = () => {
    return (
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 sm:mb-8 inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-primary/20 text-primary rounded-full">
            <span
              className="material-symbols-outlined text-2xl sm:text-3xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              volunteer_activism
            </span>
          </div>
          <h2 className="text-[#111818] text-2xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6 tracking-tight">
            Join our Caregiver Community
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto">
            Provide care and make a difference. Join a community of vetted
            professionals and start your journey with CareConnect today.
          </p>
          <Link
            href="/signup"
            className="inline-block bg-primary text-[#111818] px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-bold hover:shadow-lg hover:shadow-primary/20 transition-all"
          >
            Become a Caregiver
          </Link>
          <p className="text-slate-400 text-xs sm:text-sm mt-4 sm:mt-6">
            Already have an account?{" "}
            <a className="text-primary font-bold" href="#">
              Log in
            </a>
          </p>
        </div>
      </section>
    );
};

export default CTA;