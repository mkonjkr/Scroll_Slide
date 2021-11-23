import { React } from "react";
import Main from "./components/Main.js";
import About from "./components/About.js";
import "./App.css";
import Skills from "./components/Skills.js";

const App = () => {
  return (
    <div className="contents">
      <Main />
      <About />
      <Skills />
    </div>
  );
};

export default App;
