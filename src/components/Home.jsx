import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect } from "react";
import InteractiveBackground from "./InteractiveBackground";

function Home({ handleItemClick }) {
  useGSAP(() => {
    gsap.fromTo(
      ".reveal-image",
      { opacity: 0 }, // Start with the image hidden and slightly above
      {
        opacity: 1,
        duration: 4,
        ease: "ease", // Subtle easing
      }
    );
    gsap.fromTo(
      ".hero-span",
      { y: -50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        delay: 1,
        stagger: 0.1, // Adjust stagger time as needed
        ease: "power2.out",
        duration: 0.5,
      }
    );
    gsap.fromTo(
      ".text-span",
      {
        y: 0,
        opacity: 0,
        x: 0,
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        delay: 2.5,
        stagger: 0.2, // Stagger time between each span
        duration: 0.6, // Duration of each animation
        ease: "power4.out", // Easing function
        onComplete: () => {
          gsap.fromTo(
            ".arrow-span",
            { x: -50, y: 0, opacity: 0 },
            {
              x: 0,
              opacity: 0.6,
              duration: 1.8, // Add a duration for the return animation
              ease: "power4.out",
            }
          );
        },
      }
    );
  });

  const splitText = (text) => {
    return text.split("").map((char, index) => (
      <span key={index} className="hero-span inline-block">
        {char}
      </span>
    ));
  };
  return (
    <div className="lg:w-10/12 h-full raleway font-extralight home text-primary ">
      <div className="blob-anim h-52 w-52 lg:w-96 lg:h-96 aspect-square bg-lead rounded-full blur-3xl lg:opacity-80 absolute bottom-0 left-1/2 lg:left-3/4 -translate-x-1/2"></div>
      <div className="absolute pointer-events-none w-[140%] lg:w-2/5 ratio-square left-[-50%] lg:left-[-5%] top-[2%]  opacity-5 ">
        <img
          src="/tree-1.svg"
          alt="tree-home"
          className="reveal-image tree-home opacity-0"
        />
      </div>
      
      <div className="w-full h-full flex flex-col items-center">
        <div className="w-full h-full flex justify-between uppercase">
          <div className="w-full h-full flex flex-col text-5xl lg:text-6xl pb-2 lg:p-5 items-start lg:items-end justify-end">
            <div className="flex gap-[0.9rem]">
              <p >{splitText("designer")}</p>
              <p className="hero-span text-lead">&</p>
            </div>
            <div className="">
              <p>{splitText("developer")}</p>
            </div>
          </div>
          <div className="w-0 lg:w-full h-full"></div>
        </div>
        <div className="w-full h-full flex justify-between  jetbrains">
          <div className="w-0 lg:w-full h-full"></div>
          <div className="w-full flex justify-center   text-lg lg:justify-start stuff p-1 lg:p-5">
            <p className="para leading-6 h-min  ">
              <span className="text-span">Hi! </span>
              <span className="text-span">I'm </span>
              <span
                className="text-span "
                onClick={() => handleItemClick("about")}
              >
                A. Akhmadjonov.
              </span>
              <br />
              <span className="text-span">I </span>
              <span className="text-span">craft </span>
              <span className="text-span">immersive </span>
              <span className="text-span">digital</span>
              <br />
              <span className="text-span">solutions </span>
              <span className="text-span">that </span>
              <span className="text-span">inspire.</span>
              <br className="" />
              <span
                className="text-span highlight"
                onClick={() => handleItemClick("portfolio")}
              >
                See my works{" "}
              </span>
              <span className="text-span">and </span>
              <span
                className="text-span highlight"
                onClick={() => handleItemClick("about")}
              >
                reach out.
              </span>
              <br />
              {/* <span
                className="arrow-span s aspect-square text-center align-middle leading-none lg:text-6xl  cursor-pointer arrow-hero"
                onClick={() => handleItemClick("portfolio")}
              >
                {"->"}
              </span> */}
            </p>
          </div>
        </div>
              
      </div>
    </div>
  );
}

export default Home;
