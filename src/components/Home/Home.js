import React from "react";
import "./Home.css";
import Header from "./Header/Header";
import Programs from "./Programs/Programs";
import Projects from "./Projects/Projects";


const Home = () => {
  return (
    <section className="section-home">
      <Header/>
      <Programs/>
      <Projects/>
    </section>
  );
};

export default Home;
