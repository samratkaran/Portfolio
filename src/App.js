import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import VideoBackground from "./Components/background/backGorundVideo";
import Navbar from "./Components/navbar/Navbar";
import RevealName from "./Components/RevealName/RevealName";
import AboutMe from "./Components/About/AboutMe";
import ResumeButton from "./Components/ResumeButton/ResumeButton";
import { useEffect } from "react";
import Skills from "./Components/Skills/Skills";

const App = () => {
  useEffect(() => {
    // Scroll to the top of the page after refresh
    window.scrollTo(10, 0);
  }, );
  return (
    <div className="main-head-of-porto ">
      <VideoBackground />
      <Navbar />
      <RevealName>
        <div className="all-text">
          <div className="top-text">
            <img
              src={require("./Assets/Animation - 1697693462531.gif")}
              alt="karan"
              width={80}
            />
            <h2 className="hey-name">Hey</h2>
          </div>
          <h1 className="name">I'm Karan Samrat</h1>
        </div>
      </RevealName>
      <ResumeButton />
      <AboutMe />
      <Skills />
    </div>
  );
};

export default App;
