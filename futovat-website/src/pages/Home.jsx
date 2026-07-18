import Navbar from "../sections/Navbar/Navbar";
import Hero from "../sections/Hero/Hero";
import Services from "../sections/Services/Services";
import Technologies from "../sections/Technologies/Technologies";
import Products from "../sections/Products/Products";
import About from "../sections/About/About";
import Contact from "../sections/Contact/Contact";
import Footer from "../sections/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Technologies />
      <Products />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
export default Home;
