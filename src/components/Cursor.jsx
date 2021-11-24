import React from "react";
import "./style.scss";

export const CustomCursor = () => {
    const cursorRef = React.useRef(null);

    React.useEffect(() => {
        document.addEventListener("mousemove", (e) => {
            const {clientX, clientY} = e;
            const mouseX = clientX - cursorRef.current.clientWidth / 2;
            const mouseY = clientY - cursorRef.current.clientHeight / 2;
            cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0`
        });
    }, []);
    return (
        <div className="app-cursor" ref={cursorRef}/>
    )
}