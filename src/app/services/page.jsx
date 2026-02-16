import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/caregivers";

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-background-light pb-24">
        <div className="max-w-5xl mx-auto">
          {/* Hero */}
          <section className="mt-10 flex items-center justify-center text-center px-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-background-dark mb-3">
                Our Specialized Services
              </h1>
              <p className="text-background-dark/80 max-w-xl mx-auto">
                Personalized care solutions designed to support families at
                every stage of life.
              </p>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-12 px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  id={service.id}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="px-4 pb-16">
            <h2 className="text-2xl font-bold text-[#111818] mb-8 text-center">
              Why Families Choose CareConnect
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: "verified",
                  title: "Thoroughly Vetted",
                  desc: "All caregivers go through background checks and interviews.",
                },
                {
                  icon: "support_agent",
                  title: "24/7 Support",
                  desc: "Our team is always available to assist your needs.",
                },
                {
                  icon: "health_and_safety",
                  title: "Personalized Care",
                  desc: "Care plans tailored to your unique family situation.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-xl shadow-sm p-6 text-center"
                >
                  <span className="material-symbols-outlined text-primary text-3xl mb-3 block">
                    {item.icon}
                  </span>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mx-4 mb-16 bg-primary/10 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-2">
              Need Help Choosing the Right Service?
            </h2>
            <p className="text-slate-600 mb-6">
              Our team is ready to guide you in finding the perfect care
              solution.
            </p>

            <a
              href="/bookings"
              className="inline-block bg-primary text-background-dark font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-primary/90 transition"
            >
              Book a Consultation
            </a>
          </section>
        </div>
      </main>

      <Footer />
      <MobileNav />
    </>
  );
}
