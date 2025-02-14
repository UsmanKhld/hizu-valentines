import React, { useState, useEffect } from "react";
import "./AnimatedBox.css";

const AnimatedBox = () => {
  const [animate, setAnimate] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [openLetter, setOpenLetter] = useState(false);
  const [zoom, setZoom] = useState(false);

  useEffect(() => {
    if (animate) {
      const timeout = setTimeout(() => setShowButton(true), 500); // 1-second delay
      return () => clearTimeout(timeout); // Cleanup on unmount
    } else {
      setShowButton(false);
    }
  }, [animate]);

  const handleClick = () => {
    setAnimate(true);
  };

  const handleReset = () => {
    setAnimate(false);
    setOpenLetter(false);
    setZoom(false);
  };

  const handleOpenLetter = () => {
    setOpenLetter(true);
    setTimeout(() => {
      setZoom(true);
    }, 1000);
  };

  return (
    <div className="outside">
      <button
        className="border border-black absolute top-10 left-10 z-10"
        onClick={handleReset}
      >
        reset
      </button>
      <div className="container">
        <div
          className={`box ${animate ? "animate" : ""}`}
          onClick={() => {
            if (!animate) {
              // Your code here (only runs if animate is true)
              handleClick();
            } else {
              console.log("Clicked when animate is true");
            }
          }}
        ></div>
        {openLetter ? (
          <div
            className={`triangleup ${animate ? "animate" : ""}`}
            onClick={() => {
              if (!animate) {
                // Your code here (only runs if animate is true)
                handleClick();
              } else {
                console.log("Clicked when animate is true");
              }
            }}
          ></div>
        ) : (
          <div
            className={`triangle ${animate ? "animate" : ""}`}
            onClick={() => {
              if (!animate) {
                // Your code here (only runs if animate is true)
                handleClick();
              } else {
                console.log("Clicked when animate is true");
              }
            }}
          ></div>
        )}
        {showButton && !openLetter && (
          <button
            onClick={handleOpenLetter}
            className="clickme z-10 border p-2 rounded-xl bg-purple-200"
          >
            Click Here!
          </button>
        )}
        <div className={`full-page ${zoom ? "zoom" : ""}`}></div>
      </div>
    </div>
  );
};

export default AnimatedBox;
