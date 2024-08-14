import React, { useState } from "react";

function NavbarMobile({ handleItemClick, activeItem }) {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="jetbrains lg:hidden fixed bottom-0 w-full flex flex-col items-center justify-center text-xs bg-accent text-primary overflow-visible">
      {navOpen && (
        <div className=" absolute w-full h-10 bg-accent -top-10">
          <div className="w-full h-full rounded-b-3xl bg-bg"></div>
        </div>
      )}
      <div
        className="w-1/4 h-2 nav-handler opacity-0 bg-accent absolute -top-5 shadow-lg border rounded-full"
        onClick={() => setNavOpen((prev) => !prev)}
      ></div>
      <div className={`w-full ${navOpen ? "active" : ""} mob-nav-container`}>
        <div
          className={`mob-nav-item ${activeItem === "home" ? "active" : ""}`}
          onClick={() => {
            setNavOpen(false);
            handleItemClick("home");
          }}
        >
          home
        </div>
        <div
          className={`mob-nav-item ${activeItem === "about" ? "active" : ""}`}
          onClick={() => {
            setNavOpen(false);
            handleItemClick("about");
          }}
        >
          about
        </div>
        <div
          className={`mob-nav-item ${
            activeItem === "portfolio" ? "active" : ""
          }`}
          onClick={() => {
            setNavOpen(false);
            handleItemClick("portfolio");
          }}
        >
          portfolio
        </div>
      </div>
    </div>
  );
}

export default NavbarMobile;
