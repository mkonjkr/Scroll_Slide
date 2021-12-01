import { React, useRef, useEffect } from "react";

function About() {
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

    const dy = document.documentElement.clientHeight;
    let temp = dy - scroll;

    if (scrollX >= document.documentElement.clientWidth * 0.278) {
    } else {
      document.querySelector(".test2").style.transform = `translateX(${
        temp * 0.055
      }%)`;
    }
  };

  /* const About = () => { */
  return (
    <div className="div2" data-scroll-section>
      <div className="about" /* ref={scrollRef} */>
        ABOUT
      </div>
      <div className="me">ME</div>
      <div className="aboutText">
        Front-end developer who cares deeply about user experience. Serious
        passion for UI design and new technologies. Currently, I’m learning on
        User friendly interface, interactive products Front-end developer who
        cares deeply about user experience. Serious passion for UI design and
        new technologies. Currently, I’m learning on User friendly interface,
        interactive products
      </div>
    </div>
  );
}

export default About;
