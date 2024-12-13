import React, { useEffect, useState } from "react";

const Resize = () => {
  const [screensize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const updateSize = () => {
    setScreenSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", updateSize);
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);
  return <div>
    <h1>Screen Size Example</h1>
    <p>resize the window to see the screen size</p>
    <p style={{color:"Red"}}>Width: {screensize.width}px</p>
    <p style={{color:"Red"}}>height: {screensize.height}px</p>
  </div>;
};

export default Resize;
