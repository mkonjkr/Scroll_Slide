import { React, useState, useEffect, useRef } from "react";
import Main from './components/Main.js';
import About from './components/About.js';
import "./App.css";


const App =() => { 
  return (
    <div className="contents">
      <Main />
      <About />
    </div>
  );
  }

export default App;
