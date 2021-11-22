import { React, useState, useEffect, useRef } from "react";
import "./App.css";

function GetBoundingClientReactExample() {
  const [hideElement, setHideElement] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;
    window.addEventListener("scroll", yScrollEvent);
    return () => {
      window.removeEventListener("scroll", yScrollEvent);
    };
  }, [scrollRef.current]);

  const yScrollEvent = () => {
    const scroll = scrollRef.current.getBoundingClientRect().top;

    console.log(scroll);
    setHideElement(scroll.top <= -100);

    const dy = document.documentElement.clientHeight;
    let temp = dy - scroll;
    /* {
      position_div = scroll < dy - 100 ? true : false;
    } */
    console.log(temp);
    document.querySelector(".test2").style.transform = `translateX(${
      temp * 0.15
    }%)`;
    //console.log(dy); // screen height
  };

  /*   const Y =
  window.scrollY +
  document.querySelector(".test2").getBoundingClientRect().top;
console.log(Y); */

  return (
    <div className="contents">
      {!hideElement && (
        <div className="div1">
          <span>Will be disappeared</span>
        </div>
      )}
      <div className="div2" ref={scrollRef}>
        <div className="test2"> ABOUT ME </div>
        <div className="aboutText">
          Front-end developer who cares deeply about user experience. Serious
          passion for UI design and new technologies.
        </div>
      </div>
    </div>
  );
}

export default GetBoundingClientReactExample;
