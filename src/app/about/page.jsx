import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-background-light pb-24">
        <div className="max-w-5xl mx-auto">
          {/* Hero */}
          <section className="relative w-full h-[260px] sm:h-[340px] md:h-[420px] overflow-hidden rounded-b-2xl">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1pFknlz7sqKuWHGu6k2NlZtWx2cyYo9Pnf32JaPXYFwc8hEc1FY14BtfLWfmFrpOSaQQJt7sjhZS3NauO-yPvk966LuKO-funw81Sd1UHeXlV5Xsfqf8Sb6Vivw8RdrarSmninDJj2pHXm-Rxe3wSzNYMxjD5OgkH1g9wnDkhDs-35sNe4ArcNt5UzkkrEeDu7kxiMorbFmWm4H7evQ4VjXbstldZzZFVB6D31XlsosYTGvMLHvkIfKybMuWLcNcIjPTak93oLOat"
              alt="Caregiver holding elderly hand"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                Compassionate care, built for families.
              </h1>
            </div>
          </section>

          {/* Content */}
          <div className="p-4 sm:p-6 md:p-10 space-y-12">
            {/* Our Story */}
            <section>
              <div className="flex items-center gap-2 text-primary mb-3">
                <span className="material-symbols-outlined">history_edu</span>
                <h3 className="text-sm font-bold uppercase tracking-widest">
                  Our Story
                </h3>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-[#111818]">
                Born from a personal need
              </h2>
              <p className="text-slate-600 max-w-3xl">
                CareConnect didn’t begin as a business idea—it began as a family
                problem. Finding consistent, compassionate care for loved ones
                was harder than it should be. So we built a platform that puts
                trust, empathy, and reliability first.
              </p>
            </section>

            {/* Stats */}
            <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: "10,000+", label: "Families Helped" },
                { value: "5,000+", label: "Vetted Caregivers" },
                { value: "98%", label: "Satisfaction Rate" },
                { value: "24/7", label: "Support" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-xl shadow-sm p-5 text-center"
                >
                  <p className="text-primary text-2xl font-bold">
                    {stat.value}
                  </p>
                  <p className="text-slate-500 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </section>

            {/* Values */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-[#111818]">
                Our Core Values
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: "verified_user",
                    title: "Trust",
                    desc: "Every caregiver is thoroughly vetted and verified.",
                  },
                  {
                    icon: "calendar_clock",
                    title: "Reliability",
                    desc: "Care you can count on—when you need it most.",
                  },
                  {
                    icon: "volunteer_activism",
                    title: "Compassion",
                    desc: "We lead with empathy in everything we do.",
                  },
                ].map((value) => (
                  <div
                    key={value.title}
                    className="bg-white rounded-xl shadow-sm p-6"
                  >
                    <span className="material-symbols-outlined text-primary text-3xl mb-3 block">
                      {value.icon}
                    </span>
                    <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                    <p className="text-slate-600 text-sm">{value.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Leadership */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-[#111818]">
                Our Leadership
              </h2>
              <div className="grid sm:grid-cols-2 gap-6 max-w-3xl">
                {[
                  {
                    name: "Sarah Jenkins",
                    role: "Co-Founder & CEO",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6JSATWraO5LeFBKa6bWSJQeRregTQhN768U0VVpcQ6AngKtAU5qcbnqYKULMkoQLlkmHH_jVO-8lxuWCqnO1CyqhKCINuWvlJQccPkgmUQoOtGNkVmKUa3b5aK6tw2UMA6SjBm7J_Uegs7KG3qVC6b2Kjw8of4pDdiv440bFTi7DcQIG3ZThSXQaepL4H9-ETtnVkCEcS9TIxTw5mngKG7LsAaFMQkTnbt5qJI5Lixqq3EZEZtXH7rUORC3D7Hi8DHNG4xGup7LGm",
                  },
                  {
                    name: "David Chen",
                    role: "Co-Founder & CTO",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVDK6200aOVE3f88rVR85xlG20jzkojpUrg77XrAtONzUkRUV6T5ogERrGruawa8dZgaM6gzMBBAWLphaNx4fji47AIi7HHPj2esWTDkXLPVh2DEOdO-Yjy4MrDnNVYEA8mL_pJBFolikFG-S-ZprypqMOdVO3orvpwF3JD4YTX76dXhh4sG3Xsv_JxQn8prM3aTMgimCBXvrD23U4QGj1HL4ENNGhoRiUCCaYAGHI06shHsbx3rgF3qmAJEh20H29VU8LuVgKZkf3",
                  },
                ].map((leader) => (
                  <div
                    key={leader.name}
                    className="flex items-center gap-4 bg-white rounded-xl shadow-sm p-4"
                  >
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src={leader.img}
                        alt={leader.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">{leader.name}</h4>
                      <p className="text-primary text-xs font-medium uppercase">
                        {leader.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="bg-primary/10 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-2">Ready to find care?</h2>
              <p className="text-slate-600 mb-6">
                Join thousands of families who trust CareConnect every day.
              </p>
              <button className="bg-primary text-background-dark font-bold px-8 py-4 rounded-xl shadow-lg">
                Get Started
              </button>
            </section>
          </div>
        </div>
      </main>

      <Footer />
      <MobileNav />
    </>
  );
}
