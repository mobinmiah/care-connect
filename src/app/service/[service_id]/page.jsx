import { services } from "@/data/caregivers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import Link from "next/link";

const ServiceDetailPage = ({ params }) => {
  const service = services.find((item) => item.id === params.service_id);

  if (!service) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold">Service Not Found</h2>
      </div>
    );
  }

  return (
    <>
      <Header />

      <main className="min-h-screen bg-background-light p-6 pb-24">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-8">
          <span className="material-symbols-outlined text-primary text-4xl mb-4 block">
            {service.icon}
          </span>

          <h1 className="text-3xl font-bold mb-4">{service.title}</h1>

          <p className="text-slate-600 mb-6">{service.details}</p>

          <Link href="/bookings">
            <button className="bg-primary text-background-dark font-bold px-8 py-4 rounded-xl shadow-lg">
              Book Service
            </button>
          </Link>
        </div>
      </main>

      <Footer />
      <MobileNav />
    </>
  );
};

export default ServiceDetailPage;
