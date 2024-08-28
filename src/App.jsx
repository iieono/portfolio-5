import React, { useState, useEffect, useRef } from "react";
import Layout from "./Layout";
import "./App.css";
import FallingLeaves from "./components/FallingLeaves";
import gsap from "gsap";

function Loading() {
  const lettersRef = useRef([]);

  useEffect(() => {
    // Create a GSAP timeline
    const tl = gsap.timeline({ delay: 0.5 });

    // Animate each letter appearing
    lettersRef.current.forEach((letter, index) => {
      tl.fromTo(
        letter,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power4.out" },
        index * 0.1 // Stagger the animation by 0.1s
      );
    });

    // Add a 2-second delay before animating the letters down
    tl.to(lettersRef.current, {
      y: 10,
      opacity: 0,
      duration: 0.5,
      ease: "power4.in",
      stagger: 0.1, // Apply the stagger to the downward animation as well
    });
  }, []);

  return (
    <div className="flex items-center justify-center antialiased h-[var(--doc-height)] bg-bg">
      <div className="text-5xl lg:text-6xl uppercase opacity-0 font-extralight text-secondary">
        {"Welcome".split("").map((letter, index) => (
          <span
            key={index}
            ref={(el) => (lettersRef.current[index] = el)}
            className="inline-block"
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const documentHeight = () => {
      const doc = document.documentElement;
      doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
    };

    window.addEventListener("resize", documentHeight);

    // Set initial height
    documentHeight();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", documentHeight);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);
  if (isLoading) return <Loading />;

  return (
    <div className="min-h-screen h-[var(--doc-height)] bg-accent">
      <Layout />
      <FallingLeaves />
    </div>
  );
}

export default App;
