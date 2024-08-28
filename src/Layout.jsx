import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import NavbarMobile from "./components/NavbarMobile";

const Layout = () => {
  const [activeItem, setActiveItem] = useState("home");
  const layoutRef = useRef(null);

  const handleItemClick = (item) => {
    const sections = layoutRef.current.querySelectorAll(".section");
    gsap.to(sections, {
      opacity: 0,
      duration: 0.6,
      onComplete: () => {
        setActiveItem(item);
      },
    });
    gsap.to(".load-wave", {
      opacity: 0.1,
      delay: 0.3,
      duration: 0.6,
    });
  };

  useEffect(() => {
    const sections = layoutRef.current.querySelectorAll(".section");
    gsap.to(sections, {
      opacity: 1,
      duration: 0.3,
      delay: 1.4,
    });
    gsap.to(".load-wave", {
      opacity: 0,
      duration: 0.6,
      delay: 1.2,
    });

    gsap.to(sections, {
      x: (index) => {
        switch (activeItem) {
          case "home":
            return `0`;
          case "about":
            return `-100%`;
          case "portfolio":
            return `-200%`;
          default:
            return 0;
        }
      },
      duration: 2.4,
      ease: "power4.inOut",
    });
  }, [activeItem]);

  return (
    <div
      className="layout bg-bg h-screen w-full flex overflow-hidden"
      ref={layoutRef}
    >
      <div className="section w-screen h-full flex justify-center flex-shrink-0">
        <Home handleItemClick={handleItemClick} />
      </div>
      <div className="section w-screen h-full flex justify-center flex-shrink-0">
        {activeItem === "about" && <About />}
      </div>
      <div className="section w-screen h-full flex justify-center flex-shrink-0">
        {activeItem === "portfolio" && <Portfolio />}
      </div>
      <div className="load-wave pointer-events-none absolute text-5xl md:text-9xl raleway font-extralight flex items-center opacity-0 justify-center w-full h-full">
        <div>( ´ ▽ ` )ﾉ</div>
      </div>
      <Navbar handleItemClick={handleItemClick} activeItem={activeItem} />
      <NavbarMobile handleItemClick={handleItemClick} activeItem={activeItem} />
    </div>
  );
};

export default Layout;
