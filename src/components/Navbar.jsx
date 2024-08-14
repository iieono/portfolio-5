import React, { useEffect, useState } from "react";
import { gsap } from "gsap";

function Navbar({ handleItemClick, activeItem }) {
  useEffect(() => {
    gsap.set(".nav-container", { y: 200 });
    // gsap.set(".nav-list", { y: 50 });
    gsap.to(
      ".nav-container", // Start with the nav-container 200% down
      { y: 0, duration: 2.4, delay: 4, ease: "power2.out" } // Animate it up
    );
  }, []);
  return (
    <div className="nav-container z-40 hidden lg:flex fixed bottom-0 left-0 lg:text-8xl jetbrains font-extralight overflow-visible px-6 py-2 uppercase text-secondary bg-accent rounded-tr-3xl">
      <div className="absolute aspect-square h-[50%] top-[-50%] left-0 bg-accent">
        <div className="absolute w-full h-full bg-bg rounded-bl-full"></div>
      </div>
      <div className="absolute aspect-square h-[50%] right-0 bottom-0 overflow-visible">
        <div className="absolute w-full h-full right-[-100%] bg-accent overlfow-visible">
          <div className="absolute w-full h-full rounded-bl-full bg-bg"></div>
        </div>
      </div>
      <div>
        <div className="nav-list grid grid-wrap text-sm w-full lg:w-content h-full p-2">
          <div
            className={`nav-item ${activeItem === "home" ? "active" : ""}`}
            onClick={() => handleItemClick("home")}
          >
            home
          </div>
          <div
            className={`nav-item ${activeItem === "about" ? "active" : ""}`}
            onClick={() => handleItemClick("about")}
          >
            about
          </div>
          <div
            className={`nav-item ${activeItem === "portfolio" ? "active" : ""}`}
            onClick={() => handleItemClick("portfolio")}
          >
            portfolio
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
