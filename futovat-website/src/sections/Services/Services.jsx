import "./Services.css";

import {
  FaGlobe,
  FaMobileAlt,
  FaDesktop,
  FaGamepad,
  FaRobot,
  FaCloud,
} from "react-icons/fa";

const services = [
  {
    icon: FaGlobe,
    title: "Web Development",
    description:
      "Modern, responsive, and high-performance websites for every business.",
  },
  {
    icon: FaMobileAlt,
    title: "Mobile Applications",
    description:
      "Android and iOS applications with beautiful user experiences.",
  },
  {
    icon: FaDesktop,
    title: "Desktop Applications",
    description: "Powerful Windows desktop software built for productivity.",
  },
  {
    icon: FaGamepad,
    title: "Game Development",
    description:
      "Unity-based 2D and 3D games for businesses and entertainment.",
  },
  {
    icon: FaRobot,
    title: "AI Solutions",
    description:
      "Intelligent software powered by modern Artificial Intelligence.",
  },
  {
    icon: FaCloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment services.",
  },
];

function Services() {
  return (
    <section id="services" className="services">
      <div className="section-header">
        <h2>Our Services</h2>

        <p>
          We provide modern software solutions tailored to businesses, startups,
          and individuals.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div className="service-card" key={service.title}>
              <h3>
                <Icon className="service-icon" />

                {service.title}
              </h3>

              <p>{service.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
