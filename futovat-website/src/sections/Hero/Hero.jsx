import "./Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="hero-glow hero-glow-left"></div>
        <div className="hero-glow hero-glow-right"></div>

        <div className="hero-orbit hero-orbit-one"></div>
        <div className="hero-orbit hero-orbit-two"></div>
        <div className="hero-orbit hero-orbit-three"></div>

        <div className="hero-line hero-line-one"></div>
        <div className="hero-line hero-line-two"></div>

        <div className="hero-core">
          <span></span>
        </div>
      </div>

      <div className="hero-content">
        <p className="hero-tag">FUTOVAT</p>

        <h1>Build the Future</h1>

        <h2>We Build Software That Matters.</h2>

        <p className="hero-description">
          We design and develop modern websites, mobile applications, desktop
          software, AI solutions, and games that help businesses grow faster.
        </p>

        <div className="hero-tech">
          <span>WEB</span>
          <span>APPS</span>
          <span>AI</span>
          <span>SOFTWARE</span>
          <span>GAMES</span>
        </div>

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
