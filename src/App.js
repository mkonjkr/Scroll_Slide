import { React } from "react";
import Main from "./components/Main.js";
import About from "./components/About.js";
import "./App.css";
import Skills from "./components/Skills.js";
import { CustomCursor } from "./components/Cursor.jsx";
import HorizontalScroll from "react-scroll-horizontal";

const App = () => {
  return (
    <div className="contents">
      <CustomCursor />
      <Main />
      <About />
      <Skills />
    </div>
  );
};

export default App;
