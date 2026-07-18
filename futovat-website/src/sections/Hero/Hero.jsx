import "./Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <p className="hero-tag">FUTOVAT</p>

        <h1>Build the Future</h1>

        <h2>We Build Software That Matters.</h2>

        <p className="hero-description">
          We design and develop modern websites, mobile applications, desktop
          software, AI solutions, and games that help businesses grow faster.
        </p>

        <div className="hero-buttons">
          <a href="#services" className="primary-btn">
            Our Services
          </a>

          <a href="#contact" className="secondary-btn">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
