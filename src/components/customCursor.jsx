import React, { useEffect, useRef } from "react";
import gsap from "gsap";
// import "./index.css";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;

      // Point cursor directly
      gsap.to(cursorRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.1,
        ease: "power2.out",
      });

      // Circle with delay
      gsap.to(circleRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor-circle" ref={circleRef}></div>
    </>
  );
};

export default CustomCursor;
