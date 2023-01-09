import { useState } from "react";

import "./App.scss";
import ElevatorBio from "./components/elevatorBio/ElevatorBio";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import Technologies from "./components/technologies/Technologies";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <ElevatorBio />
      <Technologies />
      <Footer />
    </>
  );
}

export default App;
