import "./About.css";

const stats = [
  {
    value: "5+",
    title: "Software Services",
  },
  {
    value: "100%",
    title: "Client Focus",
  },
  {
    value: "Modern",
    title: "Technologies",
  },
  {
    value: "Future",
    title: "Ready Solutions",
  },
];

function About() {
  return (
    <section id="about" className="about">
      <div className="about-left">
        <h2>About Futovat</h2>

        <p>
          At Futovat, we believe technology should solve real-world problems. We
          build modern software that helps businesses streamline operations,
          improve productivity, and grow with confidence.
        </p>

        <p>
          From web and mobile applications to desktop software, AI solutions,
          cloud platforms, and game development, we combine modern technologies
          with practical experience to deliver reliable digital products.
        </p>

        <p>
          Our mission is simple: create software that is innovative, scalable,
          and built to make a lasting impact.
        </p>
      </div>

      <div className="about-right">
        {stats.map((stat) => (
          <div className="about-card" key={stat.title}>
            <h3>{stat.value}</h3>
            <p>{stat.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
