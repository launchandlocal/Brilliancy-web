import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Approach from "./components/Approach";
import WhyUs from "./components/WhyUs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Approach />
      <WhyUs />
      <Footer />
    </>
  );
}

export default App;
