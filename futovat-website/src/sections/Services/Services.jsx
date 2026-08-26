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
    number: "01",
    icon: FaGlobe,
    title: "Web Development",
    description:
      "Modern, responsive, and high-performance websites for every business.",
  },
  {
    number: "02",
    icon: FaMobileAlt,
    title: "Mobile Applications",
    description:
      "Android and iOS applications with beautiful user experiences.",
  },
  {
    number: "03",
    icon: FaDesktop,
    title: "Desktop Applications",
    description: "Powerful Windows desktop software built for productivity.",
  },
  {
    number: "04",
    icon: FaGamepad,
    title: "Game Development",
    description:
      "Unity-based 2D and 3D games for businesses and entertainment.",
  },
  {
    number: "05",
    icon: FaRobot,
    title: "AI Solutions",
    description:
      "Intelligent software powered by modern Artificial Intelligence.",
  },
  {
    number: "06",
    icon: FaCloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment services.",
  },
];

function Services() {
  return (
    <section id="services" className="services">
      <div className="section-header">
        <span className="section-eyebrow">WHAT WE BUILD</span>

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
              <div className="service-card-top">
                <span className="service-number">{service.number}</span>

                <div className="service-icon-wrapper">
                  <Icon className="service-icon" />
                </div>
              </div>

              <div className="service-card-content">
                <h3>{service.title}</h3>

                <p>{service.description}</p>
              </div>

              <div className="service-card-footer">
                <span>Explore</span>

                <span className="service-arrow">→</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
