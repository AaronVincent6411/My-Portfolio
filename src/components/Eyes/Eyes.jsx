import React, { useState, useEffect } from "react";
import './Eyes.css';

function Eyes() {
  useEffect(() => {
    const pupils = document.querySelectorAll(".eye .pupil");
    const handleMouseMove = (e) => {
      pupils.forEach((pupil) => {
        var rect = pupil.getBoundingClientRect();
        var x = (e.pageX - rect.left) / 100 + "px";
        var y = (e.pageY - rect.top) / 125 + "px";
        pupil.style.transform = "translate3d(" + x + "," + y + ", 90px)";
      });
    };
    
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="eyes">
      <div className="eye">
        <div className="pupil"></div>
      </div>
      <div className="eye">
        <div className="pupil"></div>
      </div>
    </div>
  );
}

export default Eyes;
