import { React, useRef, useEffect } from "react";

function About() {
  /* const [hideElement, setHideElement] = useState(false); */
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
    const scrollX = scrollRef.current.getBoundingClientRect().x;
    /* setHideElement(scroll.top <= -100); */
    const dy = document.documentElement.clientHeight;
    let temp = dy - scroll;
    /* {
        position_div = scroll < dy - 100 ? true : false;
      } */

    if (scrollX >= document.documentElement.clientWidth * 0.275) {
    } else {
      document.querySelector(".test2").style.transform = `translateX(${
        temp * 0.055
      }%)`;
    }

    //console.log(dy); // screen height
  };

  /* const About = () => { */
  return (
    <div className="div2">
      <div className="test2" ref={scrollRef}>
        ABOUT
      </div>
      <div>
         ME
      </div>
      <div className="aboutText">
        Front-end developer who cares deeply about user experience. Serious
        passion for UI design and new technologies. Currently, I’m learning on
        User friendly interface, interactive products
      </div>
    </div>
  );
}

export default About;
