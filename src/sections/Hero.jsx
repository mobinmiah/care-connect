import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative">
      <div
        className="flex min-h-[480px] sm:min-h-[560px] md:min-h-[700px] flex-col gap-4 sm:gap-6 bg-cover bg-center bg-no-repeat items-center justify-center px-4 sm:px-6 py-12 text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAMaHvnQEyn-imWZLf3UjvKoFmTRqdleZqc4DKogPMq3WuPKkHRuA3EFytJFO1RVYDQiTwnuK_Nz6IJL6RxN8QCseWgk-SmwTDE5cVVD9R5xfMDA4Xeu6pL-_QiNDj0noe13FO4IHrqd96jrjl66GRlnKQJjgN6SFoZy1yndVpOuIzRSTJ4-ZCCQfG8KYTZX9caWPxC3Mm0Gfx0BBPbX0T-V67q1XWDaa_VgPJdOtaBbggzssqI1GMOJz2TqEuk126ejVCzr-P7i7aZ")`,
        }}
      >
        <div className="max-w-3xl flex flex-col gap-4 sm:gap-6 w-full">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
            Compassionate care for your loved ones
          </h1>

          <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed">
            Connecting families with trusted, vetted caregivers for every stage
            of life. Quality care you can count on.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-md justify-center mt-4 sm:mt-6 px-1">
          <button className="flex-1 rounded-lg h-12 sm:h-14 px-6 sm:px-8 bg-primary text-[#111818] text-sm sm:text-base font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
            Find a Caregiver
          </button>

          <Link
            href="/signup"
            className="flex-1 flex items-center justify-center rounded-lg h-12 sm:h-14 px-6 sm:px-8 bg-white/20 backdrop-blur-sm text-white text-sm sm:text-base font-bold border border-white/30 hover:bg-white/30 transition-all"
          >
            Become a Caregiver
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
