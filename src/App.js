import React from "react";
import { useEffect } from "react";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Nav from "./Components/Nav";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  //Initialize Animation on scroll...
  useEffect(() => {
    AOS.init({
      duration: 1200, //Duration each animation takes to display...
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>{"SOLO PORTFOLIO"}</title>
        <meta
          name="description"
          content="Am a frontend developer with years of experience..."
        />
      </Helmet>
      <Nav />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
