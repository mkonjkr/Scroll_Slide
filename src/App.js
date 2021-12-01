import { React, useState, useRef, useEffect } from "react";
import "./App.css";
import Main from "./components/Main.js";
import About from "./components/About.js";
/* import Skills from "./components/Skills.js"; */
import Gallery from "./components/Gallery/Gallery.jsx";
import useLocoScroll from "./hooks/useOnscreen.js";
import { CustomCursor } from "./components/Cursor.jsx";

const App = () => {
  const [preloader, setPreloader] = useState(true);

  useLocoScroll(!preloader);
  const [timer, setTimer] = useState(3);

  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  return (
    <>
      <CustomCursor />

      {preloader ? (
        <div className="loader-wrapper absolute">
          <h1>Jaehyuk Jeong</h1>
          <h2>Front-End Developer</h2>
        </div>
      ) : (
        <div className="contents" id="main-container" data-scroll-container>
          <Main />
          <About />
          <Gallery />
        </div>
      )}
    </>
  );
};

export default App;
