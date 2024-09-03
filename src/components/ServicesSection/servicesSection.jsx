import ServiceCard from "./serviceCard";
import "./servicesSection.css";

const ServicesSection = () => {
  const services = [
    {
      title: "Custom Software Development",
      description:
        "Creating tailored software solutions to meet specific business requirements.",
    },
    {
      title: "Web Development",
      description:
        " Building functional and engaging websites and web applications",
    },
    {
      title: "Mobile App Development",
      description:
        " Developing mobile applications for iOS, Android, and other platforms.",
    },
    {
      title: " QA and Testing",
      description:
        " Ensuring software quality through rigorous testing and quality assurance processes.",
    },
    {
      title: "IT Consulting",
      description:
        " Providing expert advice on IT strategy, technology roadmaps, and digital transformation",
    },
    {
      title: "Software Testing",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <div className="services-section">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
