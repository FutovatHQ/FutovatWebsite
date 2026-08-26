import "./About.css";

const stats = [
  {
    value: "6",
    title: "Core Services",
  },
  {
    value: "4",
    title: "Products",
  },
  {
    value: "6",
    title: "Core Technologies",
  },
  {
    value: "100%",
    title: "Client Focus",
  },
];

function About() {
  return (
    <section id="about" className="about">
      <div className="about-background">
        <div className="about-glow"></div>
        <div className="about-grid-line about-grid-line-one"></div>
        <div className="about-grid-line about-grid-line-two"></div>
      </div>

      <div className="about-content">
        <div className="about-left">
          <span className="section-eyebrow">WHO WE ARE</span>

          <h2>Building Technology With Purpose.</h2>

          <p>
            At Futovat, we believe technology should solve real-world problems.
            We build modern software that helps businesses streamline
            operations, improve productivity, and grow with confidence.
          </p>

          <p>
            From web and mobile applications to desktop software, AI solutions,
            cloud platforms, and game development, we combine modern
            technologies with practical experience to deliver reliable digital
            products.
          </p>

          <p>
            Our mission is simple: create software that is innovative, scalable,
            and built to make a lasting impact.
          </p>

          <div className="about-company">
            <span className="about-company-label">
              THE COMPANY BEHIND FUTOVAT
            </span>

            <h3>Futovat</h3>

            <p>
              A product brand of <strong>Arcadia Zygnex Tech LLP</strong>
            </p>
          </div>
        </div>

        <div className="about-right">
          <div className="about-stats-label">
            <span>AT A GLANCE</span>
          </div>

          <div className="about-stats">
            {stats.map((stat) => (
              <div className="about-card" key={stat.title}>
                <span className="about-card-line"></span>

                <h3>{stat.value}</h3>

                <p>{stat.title}</p>
              </div>
            ))}
          </div>

          <div className="about-quote">
            <span>“</span>

            <p>Innovate. Build. Elevate.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
