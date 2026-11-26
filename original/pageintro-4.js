import logo_2 from "../extra/logo2.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef, useState } from "react";
import FramerHoverLink from "./framerHoverLink";
// import LogoMarquee from "./LogoMarquee";

gsap.registerPlugin(ScrollTrigger, SplitText);

const COLOR_START = "#DBE8FB";
const COLOR_END = "#140018";
const TEXT_START = "#140018";
const TEXT_END = "#e1ebfc";

// 2. Define the link data
const NAV_LINKS = [
  { number: "(01)", title: "View our work", href: "#work" },
  { number: "(02)", title: "View our services", href: "#services" },
  {
    number: "(03)",
    title: "Schedule an introductory meeting",
    href: "#contact",
  },
];

export default function PageIntro() {
  const [menuOpen, setMenuOpen] = useState(false);
  const containerRef = useRef(null);
  const fadeRef = useRef(null);

  useGSAP(
    () => {
      // 1. Organic floating animation for each blob finger
      gsap.to(".bf1", {
        y: -60,
        x: 35,
        rotation: 6,
        duration: 3,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        transformOrigin: "bottom center",
      });
      gsap.to(".bf2", {
        y: 50,
        x: -35,
        rotation: -7,
        duration: 4,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        transformOrigin: "bottom center",
      });
      gsap.to(".bf3", {
        y: -45,
        x: 40,
        rotation: 4,
        duration: 3,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        transformOrigin: "bottom center",
      });

      // 2. Entrance animations
      const tl = gsap.timeline();
      tl.from(".design", { y: 25, opacity: 0, duration: 0.7, stagger: 0.2 });
      tl.from(
        ".blob",
        { y: 85, opacity: 0, duration: 0.7, stagger: 0.2 },
        "-=0.5",
      );
      tl.from(
        ".logo",
        { y: -25, opacity: 0, duration: 0.7, stagger: 0.2 },
        "-=0.5",
      );
      tl.from(
        ".icon",
        { y: -25, opacity: 0, duration: 0.7, stagger: 0.2 },
        "-=0.7",
      );
      tl.from(
        ".para",
        { y: 20, opacity: 0, duration: 0.7, stagger: 0.2 },
        "-=0.6",
      );
      tl.from(
        ".places",
        { y: 20, opacity: 0, duration: 0.7, stagger: 0.2 },
        "-=0.6",
      );

      // 3. Hero split text
      const splitHero = SplitText.create(".split", {
        type: "lines",
        mask: "lines",
        autoSplit: true,
        linesClass: "split-line",
        onSplit(self) {
          return gsap.from(self.lines, {
            yPercent: 200,
            duration: 0.65,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".split",
              once: false,
              start: "top 85%",
            },
          });
        },
      });

      // 4. Background color transitions
      const scrollTriggerConfig = {
        trigger: containerRef.current,
        start: "50% bottom",
        toggleActions: "play reverse play reverse",
      };

      gsap.fromTo(
        containerRef.current,
        { backgroundColor: COLOR_START },
        {
          backgroundColor: COLOR_END,
          ease: "power1.inOut",
          scrollTrigger: scrollTriggerConfig,

          markers: true,
        },
      );

      gsap.fromTo(
        ".blob-layer",
        { color: "#EAF2FF" },
        {
          color: COLOR_END,
          ease: "power2.inOut",
          scrollTrigger: scrollTriggerConfig,
        },
      );

      // Text color transition for bottom section
      gsap.fromTo(
        ".fade-text",
        { color: TEXT_START },
        {
          color: TEXT_END,
          scrollTrigger: {
            trigger: fadeRef.current,
            start: "top 74.3%", //was top 68
            toggleActions: "play reverse play reverse",
            // markers: true,
          },
        },
      );

      // 5. About section text splitting
      const aboutElements = gsap.utils.toArray(".about");
      const aboutSplits = aboutElements.map((el) => {
        return SplitText.create(el, {
          type: "lines",
          mask: "lines",
          linesClass: "split-lines",
          autoSplit: true,
          onSplit(self) {
            return gsap.from(self.lines, {
              yPercent: 120,
              duration: 1,
              stagger: 0.1,
              ease: "expo.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            });
          },
        });
      });

      return () => {
        splitHero.revert();
        aboutSplits.forEach((s) => s.revert());
      };
    },
    { scope: containerRef },
  );

  return (
    <header
      className="change-bgg m-4 rounded-3xl overflow-hidden"
      ref={containerRef}
      style={{ backgroundColor: COLOR_START }}
    >
      <nav className="relative z-20">
        <div className="flex justify-between items-center px-4 sm:px-6 pt-3 sm:pt-3.5">
          <div className="logo shrink-0 flex items-center">
            <img
              className="h-8 sm:h-10 w-auto object-contain"
              src={logo_2}
              alt="Studio Logo"
            />
          </div>
          <div className="design hidden lg:block absolute left-1/2 -translate-x-1/2 border border-black rounded-full px-5 py-1.5 font-medium mb-5">
            <p className="text-sm xl:text-base whitespace-nowrap select-none">
              Ops & Design Studio
            </p>
          </div>
          <div className="icon hidden md:flex items-center gap-5 lg:gap-7 font-medium text-[15px] lg:text-[17px]">
            <a href="#about" className="hover:opacity-70 transition-opacity">
              About Us
            </a>
            <a href="#work" className="hover:opacity-70 transition-opacity">
              Work
            </a>
            <a href="#service" className="hover:opacity-70 transition-opacity">
              Service
            </a>
            <a
              href="#collaborate"
              className="text-white bg-black py-3.5 px-6.5 lg:px-6 rounded-xl text-[19px] leading-4.5 whitespace-nowrap hover:bg-black/85 transition-colors"
            >
              To collaborate
            </a>
          </div>
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-black rounded-full transition-all duration-300 ease-in-out ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-black rounded-full transition-all duration-300 ease-in-out ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-black rounded-full transition-all duration-300 ease-in-out ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen
              ? "max-h-80 opacity-100 border-t border-black/10"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col items-start gap-4 px-6 pb-6 pt-4 font-medium text-[17px]">
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="w-full py-1 hover:opacity-70 transition-opacity"
            >
              About Us
            </a>
            <a
              href="#work"
              onClick={() => setMenuOpen(false)}
              className="w-full py-1 hover:opacity-70 transition-opacity"
            >
              Work
            </a>
            <a
              href="#service"
              onClick={() => setMenuOpen(false)}
              className="w-full py-1 hover:opacity-70 transition-opacity"
            >
              Service
            </a>
            <a
              href="#collaborate"
              onClick={() => setMenuOpen(false)}
              className="text-custom-blue bg-black py-3 px-6 rounded-2xl text-center w-full hover:bg-black/85 transition-colors mt-2"
            >
              To collaborate
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section Container */}
      <section className="relative flex flex-col justify-between min-h-[calc(100vh-4rem)] overflow-hidden">
        <div
          className="blob-layer absolute inset-0 pointer-events-none z-0"
          style={{ color: "#EAF2FF" }}
        >
          <svg
            viewBox="0 0 1322 693"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMax slice"
            className="w-full h-full"
          >
            <defs>
              <linearGradient
                id="bottomFadeGrad"
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
              >
                <stop offset="55%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="85%" stopColor="#ffffff" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>
              <mask
                id="fade-bottom"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="1322"
                height="693"
              >
                <rect
                  x="0"
                  y="0"
                  width="1322"
                  height="693"
                  fill="url(#bottomFadeGrad)"
                />
              </mask>
            </defs>
            <g mask="url(#fade-bottom)">
              <g transform="translate(20 346.5) scale(0.5)">
                <g className="magnet">
                  <g className="blob-float bf1">
                    <path
                      className="blob b1"
                      fill="currentColor"
                      d="M629.511 107.568C661 230.462 633.112 446.754 543.937 693L0 693C89.1755 446.754 217.882 230.462 338.39 107.568C405.118 39.424 469.395 0 522.946 0C576.498 0 612.121 39.424 629.511 107.568Z"
                    />
                  </g>
                </g>
              </g>
              <g transform="translate(282 173.3) scale(0.75)">
                <g className="magnet">
                  <g className="blob-float bf2">
                    <path
                      className="blob b2"
                      fill="currentColor"
                      d="M629.511 107.568C661 230.462 633.112 446.754 543.937 693L0 693C89.1755 446.754 217.882 230.462 338.39 107.568C405.118 39.424 469.395 0 522.946 0C576.498 0 612.121 39.424 629.511 107.568Z"
                    />
                  </g>
                </g>
              </g>
              <g transform="translate(677 13.9) scale(0.98)">
                <g className="magnet">
                  <g className="blob-float bf3">
                    <path
                      className="blob b3"
                      fill="currentColor"
                      d="M629.511 107.568C661 230.462 633.112 446.754 543.937 693L0 693C89.1755 446.754 217.882 230.462 338.39 107.568C405.118 39.424 469.395 0 522.946 0C576.498 0 612.121 39.424 629.511 107.568Z"
                    />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div className="relative z-10">
          <div className="split text-center font-extrabold text-[95px] leading-31.25 text-midnight ">
            <p className="-mt-7">Built to grow</p>
            <p className="-mt-10">& designed </p>
            <p className="-mt-10">to stand out</p>
          </div>
          <div>
            <p className="para text-center text-plum-gray text-[20px] leading-7 font-medium mx-82.5 mt-6">
              Standing out isn't luck, it's craftsmanship. We combine executive
              support, product management, and brand design to help your
              business thrive from positioning to launch.
            </p>
          </div>
        </div>
        <div className="fade-text places relative z-10 flex justify-between items-center px-6 pb-12">
          <div className="flex justify-between items-center gap-2">
            <p className="font-semibold border rounded-md py-1 px-2 text-[14px] leading-5">
              3 Places
            </p>
            <p className="font-medium">Available for Q4</p>
          </div>
          <div>
            <p className="border rounded-full px-5 py-1.5 font-semibold text-[14px] leading-4.5">
              ScrOll dOwn
            </p>
          </div>
        </div>
      </section>

      {/* Subsequent Page Content */}
      <section className="about-section relative z-10 flex pr-16 pl-16 justify-between items-start gap-60 pt-40 pb-20">
        <div className="shrink-0">
          <p className="about font-medium text-[20px] leading-7 text-plum-gray">
            About us, since 2025
          </p>
        </div>
        <div ref={fadeRef} className="fade-text w-full">
          <div className="pb-10">
            <div className="about font-bold text-[57px] w-150 leading-20 ">
              <p className="">Jophiel Studios is a</p>
              <p className="-mt-3">digital design studio in</p>
              <p className="-mt-3">Metro PH.</p>
            </div>
          </div>
          <div className="about-para-section">
            <div>
              <p className="about font-medium text-[20px] leading-7.75 pb-5 text-mori-text">
                We work with founders at the moments that count: a launch, a
                rebrand, or a backend that’s falling apart. From executive
                support and product management to full brand design, everything
                is under one roof.
              </p>
              <p className="about font-medium text-[20px] leading-7.75 text-mori-text">
                No account managers, no middle layers. You talk directly to the
                people doing the work, and decisions are made the same day.
              </p>
            </div>

            {/* 3. Replaced here */}
            <FramerHoverLink items={NAV_LINKS} />
          </div>
        </div>
      </section>
      {/* Somewhere here */} 
      {/* <div className="marquee-enter relative z-20 pb-7">
        <LogoMarquee />
      </div>
      <div className="h-screen"></div> */}
    </header>
  );
}