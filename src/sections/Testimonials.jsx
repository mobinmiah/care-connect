import React from "react";

const Testimonials = () => {
  return (
    <section className="py-16 px-4 bg-background-light">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black mb-4">
            Families love CareConnect
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Read stories from families who found the perfect match for their
            loved ones.
          </p>
        </div>

        {/* Cards */}
        <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide md:grid md:grid-cols-3 md:overflow-visible">
          {/* Jennifer */}
          <div className="min-w-[300px] flex flex-col justify-between p-6 rounded-2xl bg-white/5 border border-white/10 relative">
            <p className="text-lg italic mb-8 relative z-10">
              "Finding Sarah for my mother was a blessing. She is patient, kind,
              and incredibly professional. The peace of mind we have now is
              priceless."
            </p>

            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAMaHvnQEyn-imWZLf3UjvKoFmTRqdleZqc4DKogPMq3WuPKkHRuA3EFytJFO1RVYDQiTwnuK_Nz6IJL6RxN8QCseWgk-SmwTDE5cVVD9R5xfMDA4Xeu6pL-_QiNDj0noe13FO4IHrqd96jrjl66GRlnKQJjgN6SFoZy1yndVpOuIzRSTJ4-ZCCQfG8KYTZX9caWPxC3Mm0Gfx0BBPbX0T-V67q1XWDaa_VgPJdOtaBbggzssqI1GMOJz2TqEuk126ejVCzr-P7i7aZ')",
                }}
              />
              <div>
                <p className="font-bold">Jennifer M.</p>
                <p className="text-white/60 text-xs">
                  Daughter of Senior Patient
                </p>
              </div>
            </div>
          </div>

          {/* David */}
          <div className="min-w-[300px] flex flex-col justify-between p-6 rounded-2xl bg-white/5 border border-white/10 relative">
            <span className="material-symbols-outlined absolute top-4 left-4 text-white/10 text-6xl">
              format_quote
            </span>

            <p className="text-lg italic mb-8 relative z-10">
              "We needed last-minute child care and found Emily within hours.
              She was amazing with the kids and they're already asking when she
              can come back!"
            </p>

            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDRGIUZIu3SMv_yu-3XeneS4oz30QC_JbNCouLNHikKh5Z-Z0pNKeL82LdVjzExihPbFM2XDeCUNvppw9VbpWh25ZpI-uJm3WThcjRptVA6r3Sqpq3ApeX3pBwYo7KTKK1ytTu_tlOxteUWxsFSjRBkY4cugVJ0KiPu4RXOogPdOGg01RCPT2fKyZMmm10qKWnH2E6coMQULgzPl1eyLxF08LQtRcJ_E9mg9fQwfh8rJeEGjAWMYomshsZ6lRbm7mXE1rieOyOWKRnq')",
                }}
              />
              <div>
                <p className="font-bold">David L.</p>
                <p className="text-white/60 text-xs">Father of two</p>
              </div>
            </div>
          </div>

          {/* Maria */}
          <div className="min-w-[300px] flex flex-col justify-between p-6 rounded-2xl bg-white/5 border border-white/10 relative">
            <span className="material-symbols-outlined absolute top-4 left-4 text-white/10 text-6xl">
              format_quote
            </span>

            <p className="text-lg italic mb-8 relative z-10">
              "The platform made it so easy to filter by specific needs. We
              found a caregiver who specializes in autism support and it has
              changed our daily routine for the better."
            </p>

            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB0ujjdnkSWpdWhHh8kBYSCrL34c3zJ15epuEzEFasEdcgCJfStVK6tt4O_IBcfyRgHxxe3e7mJ9zwSuhruFGvCMQJWAh0ibk5iKNFLLCxWk8fhq4l9VJtLF21IriJw4S3PtHk-FSJ8At4aWTohII9oc4aE6FKaDDpkxbKGDz8jRbEx1JHe3diNuYDaUqYaXSyc5DXIVOFEhoMxTMCf8_vnsHY8o7CDd-QFOJACA9hgNbMPMwAShGBcAw02qarNWVCEjo9y-OiVOb6d')",
                }}
              />
              <div>
                <p className="font-bold">Maria S.</p>
                <p className="text-white/60 text-xs">Mother</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
