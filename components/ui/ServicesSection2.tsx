import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

export default function ServicesSection2() {
  const services = [
    {
      title: "Stone spa",
      description: "Proin efficitur, mauris vel condimentum pulvinar",
      icon: "/icons/stone-spa.svg",
      image: "/images/services/service1.webp",
      highlight: false,
    },
    {
      title: "Face Treatments",
      description: "Proin efficitur, mauris vel condimentum pulvinar",
      icon: "/icons/face-treatments.svg",
      image: "/images/services/service2.webp",
      highlight: false,
    },
    {
      title: "Body Massage",
      description: "Proin efficitur, mauris vel condimentum pulvinar",
      icon: "/icons/body-massage.svg",
      image: "/images/services/service3.webp",
      highlight: false,
    },
  ];

  return (
    <section className="bg-[url('/images/bg-pattern.jpg')] bg-cover bg-center py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm text-gray-500 italic mb-2">What We Do</p>
        <h2 className="text-4xl font-bold mb-12">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-lg overflow-hidden shadow-md border ${
                service.highlight
                  ? "bg-yellow-500 text-white"
                  : "bg-white text-gray-900"
              }`}
            >
              <div className="p-6 flex flex-col items-center">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={50}
                  height={50}
                />
                <h3
                  className={`mt-4 text-xl font-semibold ${
                    service.highlight ? "text-white" : "text-gray-900"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`mt-2 text-sm ${
                    service.highlight ? "text-white/90" : "text-gray-500"
                  }`}
                >
                  {service.description}
                </p>
                {service.highlight && (
                  <button className="mt-4 p-2 rounded-full border border-white hover:bg-white hover:text-yellow-500 transition">
                    <FiArrowRight />
                  </button>
                )}
              </div>
              {!service.highlight && (
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
