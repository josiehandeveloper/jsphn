import React from "react";
import Hero from "../../Components/Hero/Hero";
import About from "../../Components/About/About";
import Services from "../../Components/Services/Services";
import Portfolio from "../../Components/Portfolio/Portfolio";
import Footer from "../../Components/Footer/Footer";

function Home() {
  return (
    <div id="home">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default Home;
