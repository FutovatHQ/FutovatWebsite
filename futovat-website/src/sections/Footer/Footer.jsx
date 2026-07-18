import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-company">
          <h2>FUTOVAT</h2>
          <span>Innovate. Build. Grow.</span>

          <p>
            Building innovative software solutions for businesses, startups, and
            individuals around the world.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="#hero">Home</a>
          <a href="#services">Services</a>
          <a href="#technologies">Technologies</a>
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>

          <a href="mailto:contact@futovat.com">contact@futovat.com</a>

          <p>India</p>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>© 2026 Futovat. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
