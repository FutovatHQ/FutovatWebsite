import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = section.getAttribute("id");
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>FUTOVAT</h2>
      </div>
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <a
            href="#hero"
            className={activeSection === "hero" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#services"
            className={activeSection === "services" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#technologies"
            className={activeSection === "technologies" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Technologies
          </a>
        </li>
        <li>
          <a
            href="#products"
            className={activeSection === "products" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Products
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={activeSection === "about" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={activeSection === "contact" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
