import "./Technologies.css";

import {
  FaReact,
  FaMicrosoft,
  FaUnity,
  FaAws,
  FaDatabase,
} from "react-icons/fa";

import { SiDotnet } from "react-icons/si";

const technologies = [
  {
    icon: FaReact,
    name: "React",
    description: "Modern and responsive web applications.",
  },
  {
    icon: SiDotnet,
    name: "ASP.NET Core",
    description: "Powerful and secure backend APIs.",
  },
  {
    icon: FaMicrosoft,
    name: "C#",
    description: "Reliable desktop and enterprise software.",
  },
  {
    icon: FaUnity,
    name: "Unity",
    description: "2D and 3D game development.",
  },
  {
    icon: FaDatabase,
    name: "SQL Server",
    description: "Efficient database management.",
  },
  {
    icon: FaAws,
    name: "AWS",
    description: "Cloud hosting and deployment solutions.",
  },
];

function Technologies() {
  return (
    <section id="technologies" className="technologies">
      <div className="section-header">
        <h2>Technologies We Use</h2>

        <p>
          We build reliable software using modern technologies and industry best
          practices.
        </p>
      </div>

      <div className="technology-grid">
        {technologies.map((technology) => {
          const Icon = technology.icon;

          return (
            <div className="technology-card" key={technology.name}>
              <h3>
                <Icon className="technology-icon" />
                {technology.name}
              </h3>

              <p>{technology.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Technologies;
