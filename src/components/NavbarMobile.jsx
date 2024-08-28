import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

function NavbarMobile({ handleItemClick, activeItem }) {
  const [navOpen, setNavOpen] = useState(false);
  const navButtonRef = useRef(null);
  const navContainerRef = useRef(null);

  useEffect(() => {
    const navButton = navButtonRef.current;
    gsap.fromTo(navButton, 
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 1, ease: "power2.inOut" }
    );
  }, []);

  useEffect(() => {
    if (navOpen) {
      const navContainer = navContainerRef.current;
      const navItems = document.querySelectorAll('.mob-nav-item')
      const timeline = gsap.timeline({ ease: "power2.inOut" });

      timeline.fromTo(navContainer, 
        { 
          width: '100%', 
          height: '100%', 
          borderRadius: '0 1024px',
          opacity: 0 
        },
        { 
          width: '100%', 
          height: '100%', 
          opacity: 1,
          duration: 0.6 ,
          borderRadius: '0 1024px',
          ease: "power2.out"
        }
      ).fromTo(navItems, {
       y:-20, opacity: 0 
      },{
        opacity: 1,
        duration: 0.6,
        y: -50,
        stagger: 0.3,
        ease: "ease.in"
      }, '-=0.5')
    }
  }, [navOpen]);

  return (
    <div className={`jetbrains  lg:hidden fixed right-0 top-0 ${navOpen ? 'h-full w-full' : 'h-20 w-20'} `}>
      <div 
        ref={navButtonRef}
        className={`p-1 raleway font-extralight text-lead z-20 opacity-0 absolute right-4 top-4 flex items-center justify-center text-4xl rounded-full duration-100 origin-center transition-transform cursor-pointer ${navOpen && 'rotate-0'}`}
        onClick={() => setNavOpen(prev => !prev)}
      >
        {navOpen ? (
          <><span className="inline-block staggered-out-slide-1">{'>'}</span><span className="inline-block staggered-out-slide-2">{'>'}</span></>
          
        ):(
          <><span className="inline-block staggered-fade-slide-2">{'<'}</span><span className="inline-block staggered-fade-slide-1">{'<'}</span></>
        )}
      </div>
      {navOpen && (
        <div ref={navContainerRef} className="absolute top-0 right-0 bg-secondary text-lead shadow-white backdrop-blur-sm text-6xl uppercase raleway flex flex-col gap-3 items-start p-4 justify-center overflow-hidden">
          <div className={`mob-nav-item ${activeItem === 'home' && 'active'}`} onClick={() => {
            if(activeItem != 'home'){
              handleItemClick("home")
            }
            setNavOpen(false)
          }}>home</div>
          <div className={`mob-nav-item ${activeItem === 'about' && 'active'}`} onClick={() => {
            if(activeItem != 'about'){
              handleItemClick("about")
            }
            setNavOpen(false)
          }}>about</div>
          <div className={`mob-nav-item ${activeItem === 'portfolio' && 'active'}`} onClick={() => {
            if(activeItem != 'portfolio'){
              handleItemClick("portfolio")
            }
            setNavOpen(false)
          }}>portfolio</div>
        </div>
      )}
    </div>
  );
}

export default NavbarMobile;
