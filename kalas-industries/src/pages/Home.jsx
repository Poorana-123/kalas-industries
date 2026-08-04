import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Collections from "../components/Collections";
import Solutions from "../components/Solutions";
import Craftsmanship from "../components/Craftsmanship";
import ExperienceCentre from "../components/ExperienceCentre";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Collections />
      <Solutions />
      <Craftsmanship />
      <ExperienceCentre />
      <Footer />
    </>
  );
};

export default Home;