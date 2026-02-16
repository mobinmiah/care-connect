import Link from 'next/link';
import React from 'react';

const Hero = () => {
    return (
      <section className="relative">
        <div className="@container">
          <div className="p-0 @[480px]:p-4">
            <div
              className="flex min-h-[520px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:rounded-xl items-center justify-center p-6 text-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAMaHvnQEyn-imWZLf3UjvKoFmTRqdleZqc4DKogPMq3WuPKkHRuA3EFytJFO1RVYDQiTwnuK_Nz6IJL6RxN8QCseWgk-SmwTDE5cVVD9R5xfMDA4Xeu6pL-_QiNDj0noe13FO4IHrqd96jrjl66GRlnKQJjgN6SFoZy1yndVpOuIzRSTJ4-ZCCQfG8KYTZX9caWPxC3Mm0Gfx0BBPbX0T-V67q1XWDaa_VgPJdOtaBbggzssqI1GMOJz2TqEuk126ejVCzr-P7i7aZ")`,
              }}
            >
              <div className="max-w-2xl flex flex-col gap-4">
                <h1 className="text-white text-4xl font-black leading-tight tracking-tight @[480px]:text-5xl">
                  Compassionate care for your loved ones
                </h1>
                <p className="text-white text-base font-normal @[480px]:text-lg">
                  Connecting families with trusted, vetted caregivers for every
                  stage of life. Quality care you can count on.
                </p>
              </div>
              <div className="flex gap-3 w-full max-w-md justify-center mt-4">
                <button className="flex-1 cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary text-[#111818] text-base font-bold shadow-lg shadow-primary/20">
                  Find a Caregiver
                </button>
                <Link
                  href="/signup"
                  className="flex-1 cursor-pointer flex items-center justify-center rounded-lg h-12 px-6 bg-white/20 backdrop-blur-sm text-white text-base font-bold border border-white/30"
                >
                  Become a Caregiver
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Hero;