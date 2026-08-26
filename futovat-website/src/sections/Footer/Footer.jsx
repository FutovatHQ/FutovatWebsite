import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glow"></div>

      <div className="footer-content">
        <div className="footer-company">
          <div className="footer-brand">
            <h2>FUTOVAT</h2>

            <span>Innovate. Build. Elevate.</span>
          </div>

          <p>
            Building innovative software solutions for businesses, startups, and
            individuals around the world.
          </p>

          <div className="footer-company-name">
            <span>OPERATED BY</span>

            <strong>Arcadia Zygnex Tech LLP</strong>
          </div>
        </div>

        <div className="footer-links">
          <h3>Explore</h3>

          <a href="#hero">Home</a>
          <a href="#services">Services</a>
          <a href="#technologies">Technologies</a>
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-contact">
          <h3>Let's Talk</h3>

          <p>Have an idea or project in mind?</p>

          <a className="footer-email" href="mailto:info@futovat.com">
            info@futovat.com
          </a>

          <span className="footer-location">India</span>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <p>© 2026 Futovat. All Rights Reserved.</p>

        <p>
          A product brand of <strong>Arcadia Zygnex Tech LLP</strong>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
