import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/caregivers";

const Service = () => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
      <h2 className="text-[#111818] text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">
        Our Specialized Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 max-w-5xl mx-auto">
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
  );
};

export default Service;
