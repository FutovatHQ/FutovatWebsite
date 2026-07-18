import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");

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

      <ul className="nav-links">
        <li>
          <a href="#hero" className={activeSection === "hero" ? "active" : ""}>
            Home
          </a>
        </li>
        <li>
          <a
            href="#services"
            className={activeSection === "services" ? "active" : ""}
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#technologies"
            className={activeSection === "technologies" ? "active" : ""}
          >
            Technologies
          </a>
        </li>
        <li>
          <a
            href="#products"
            className={activeSection === "products" ? "active" : ""}
          >
            Products
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={activeSection === "about" ? "active" : ""}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={activeSection === "contact" ? "active" : ""}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
