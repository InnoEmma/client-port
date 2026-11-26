import logo_2 from "../extra/logo2.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef, useState } from "react";
import FramerHoverLink from "./framerHoverLink";
import Magnetic from "./Magnetic";

import Gemi from "./Gemi";

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
            {/* <a
              href="#collaborate"
              className="text-white bg-black py-3.5 px-6.5 lg:px-6 rounded-xl text-[19px] leading-4.5 whitespace-nowrap hover:bg-black/85 transition-colors"
            >
              To collaborate
            </a> */}
            <Magnetic strength={15} textStrength={15}>
              <a
                href="#collaborate"
                className="inline-block text-white bg-black py-3.5 px-6.5 lg:px-6 rounded-xl text-[19px] leading-4.5 whitespace-nowrap hover:bg-black/85 transition-colors cursor-pointer select-none"
              >
                <span className="inline-block pointer-events-none">
                  To collaborate
                </span>
              </a>
            </Magnetic>
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
      {/* Somewhere here */}
      {/* className="relative" */}
      <div>
        x{/* The marquee sits on top */}
        <div>
          {/* className="relative z-10" */}
          <Gemi bgColor="transparent" />
        </div>
      </div>
    </header>
  );
}

{
  /* <div className="marquee-enter relative z-20 pb-7">
        <LogoMarquee />
      </div>
      <div className="h-screen"></div> */
}
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// // 9 VA/Admin/Executive Support tools + 1 Brand/Product tool (Figma)
// const LOGOS = [
//   {
//     name: "Google Workspace",
//     category: "Executive Support",
//     svg: (
//       <svg className="h-6 w-auto" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" />
//       </svg>
//     ),
//   },
//   {
//     name: "Microsoft 365",
//     category: "Executive Support",
//     svg: (
//       <svg className="h-6 w-auto" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M1 1h10v10H1V1zm12 0h10v10H13V1zM1 13h10v10H1V13zm12 0h10v10H13V13z" />
//       </svg>
//     ),
//   },
//   {
//     name: "Notion",
//     category: "SOPs & Documentation",
//     svg: (
//       <svg className="h-6 w-auto" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.83a2.64 2.64 0 0 0-1.819-.746L2.64 2.016c-.42.047-.513.327-.373.56zm.793 4.293v12.27c0 .653.373.933.98.887l14.288-.84c.606-.046.746-.513.746-1.026V7.475c0-.56-.233-.84-.7-.793l-14.568.84c-.513.047-.746.42-.746.98zm11.758.886c.093.374 0 .747-.373.793l-.653.14v7.466c0 .747-.327 1.027-.933 1.073l-2.427.14-3.593-5.226v4.386l1.213.233c.373.047.466.42.466.747l-3.36.233c-.093-.373 0-.746.373-.793l.793-.14V9.897l-1.026-.093c-.373-.047-.466-.42-.466-.747l3.407-.233 3.64 5.32V10.08l-1.12-.14c-.373-.047-.466-.42-.466-.747z" />
//       </svg>
//     ),
//   },
//   {
//     name: "Slack",
//     category: "Team Coordination",
//     svg: (
//       <svg className="h-6 w-auto" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52-2.523c0-1.394 1.127-2.524 2.52-2.524h2.524v2.524c0 1.393-1.127 2.523-2.524 2.523zm3.794-2.523a2.528 2.528 0 0 1 2.523-2.524c1.393 0 2.523 1.13 2.523 2.524v6.318a2.528 2.528 0 0 1-2.523 2.523 2.528 2.528 0 0 1-2.523-2.523v-6.318zm0-3.794a2.528 2.528 0 0 1-2.523-2.523c0-1.393 1.13-2.523 2.523-2.523h2.523v2.523c0 1.394-1.13 2.523-2.523 2.523zm3.794 0a2.528 2.528 0 0 1 2.523-2.523h6.318a2.528 2.528 0 0 1 2.523 2.523 2.528 2.528 0 0 1-2.523 2.523h-6.318a2.528 2.528 0 0 1-2.523-2.523zm3.794 3.794a2.528 2.528 0 0 1 2.524 2.523c0 1.394-1.13 2.524-2.524 2.524h-2.524v-2.524c0-1.393 1.13-2.523 2.524-2.523zm-3.794 2.523a2.528 2.528 0 0 1-2.523 2.524 2.528 2.528 0 0 1-2.523-2.524V8.847a2.528 2.528 0 0 1 2.523-2.523 2.528 2.528 0 0 1 2.523 2.523v6.318zm0 3.794a2.528 2.528 0 0 1 2.523 2.523c0 1.394-1.13 2.524-2.523 2.524h-2.523v-2.524c0-1.393 1.13-2.523 2.523-2.523zm-3.794 0a2.528 2.528 0 0 1-2.523 2.524H2.52A2.528 2.528 0 0 1 0 18.96a2.528 2.528 0 0 1 2.52-2.524h6.32v2.524z" />
//       </svg>
//     ),
//   },
//   {
//     name: "Calendly",
//     category: "Calendar Logistics",
//     svg: (
//       <svg className="h-6 w-auto" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5v-5z" />
//       </svg>
//     ),
//   },
//   {
//     name: "Asana",
//     category: "Task Delegation",
//     svg: (
//       <svg className="h-6 w-auto" viewBox="0 0 24 24" fill="currentColor">
//         <circle cx="12" cy="7" r="4.5" />
//         <circle cx="5" cy="16.5" r="4.5" />
//         <circle cx="19" cy="16.5" r="4.5" />
//       </svg>
//     ),
//   },
//   {
//     name: "Airtable",
//     category: "CRM & Database",
//     svg: (
//       <svg className="h-6 w-auto" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M11.25 1.5L1.5 5.5v5.5l9.75-4V1.5zm1.5 0v5.5l9.75 4V5.5L12.75 1.5zm-1.5 7.5L1.5 13v9.5l9.75-4V9zm1.5 0v9.5l9.75 4V13l-9.75-4z" />
//       </svg>
//     ),
//   },
//   {
//     name: "QuickBooks",
//     category: "Invoicing & Expenses",
//     svg: (
//       <svg className="h-6 w-auto" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-1.1c-1.47-.28-2.6-1.35-2.6-2.9h2c0 .83.67 1.5 1.6 1.5s1.6-.67 1.6-1.5c0-.94-.65-1.37-1.85-1.78C9.72 10.37 8.5 9.48 8.5 8c0-1.4 1-2.48 2.5-2.85V4h2v1.15c1.25.26 2.22 1.15 2.35 2.35h-2c-.13-.53-.55-.9-1.35-.9-.77 0-1.4.52-1.4 1.25 0 .8.6 1.2 1.8 1.6 1.58.53 2.8 1.35 2.8 3.05 0 1.5-1.12 2.65-2.7 2.9V16.5z" />
//       </svg>
//     ),
//   },
//   {
//     name: "Zapier",
//     category: "Admin Automation",
//     svg: (
//       <svg className="h-6 w-auto" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M13.2 0H10.8v8.4H3.6l9.6 15.6v-8.4h7.2L13.2 0z" />
//       </svg>
//     ),
//   },
//   {
//     name: "Figma",
//     category: "Brand & Assets (10%)",
//     svg: (
//       <svg className="h-6 w-auto" viewBox="0 0 38 57" fill="currentColor">
//         <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
//         <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" />
//         <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" />
//         <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" />
//         <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" />
//       </svg>
//     ),
//   },
// ];

// export default function LogoMarquee() {
//   const containerRef = useRef(null);
//   const marqueeInnerRef = useRef(null);

//   useEffect(() => {
//     const marqueeInner = marqueeInnerRef.current;
//     if (!marqueeInner) return;

//     const ctx = gsap.context(() => {
//       let totalWidth = marqueeInner.scrollWidth / 2;
//       let wrap = gsap.utils.wrap(-totalWidth, 0);

//       const tl = gsap.to(marqueeInner, {
//         x: `-=${totalWidth}`,
//         duration: 30,
//         ease: "none",
//         repeat: -1,
//         modifiers: {
//           x: (x) => `${wrap(parseFloat(x))}px`,
//         },
//       });

//       const timeScaleSetter = gsap.quickTo(tl, "timeScale", {
//         duration: 0.6,
//         ease: "power2.out",
//       });

//       let timeoutId;

//       ScrollTrigger.create({
//         onUpdate: (self) => {
//           const velocity = self.getVelocity();

//           let targetScale = 1;
//           if (velocity > 0) {
//             targetScale = 1 + velocity / 220;
//           } else if (velocity < 0) {
//             targetScale = -1 + velocity / 120;
//           }

//           targetScale = gsap.utils.clamp(-5, 6, targetScale);
//           timeScaleSetter(targetScale);

//           clearTimeout(timeoutId);
//           timeoutId = setTimeout(() => {
//             timeScaleSetter(1);
//           }, 80);
//         },
//       });

//       const handleResize = () => {
//         totalWidth = marqueeInner.scrollWidth / 2;
//         wrap = gsap.utils.wrap(-totalWidth, 0);
//       };

//       window.addEventListener("resize", handleResize);

//       return () => {
//         window.removeEventListener("resize", handleResize);
//         clearTimeout(timeoutId);
//       };
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="relative w-full overflow-hidden bg-[#0d0714] py-8 border-y border-white/10"
//     >
//       {/* Edge gradient masks */}
//       <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#0d0714] to-transparent z-10" />
//       <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-[#0d0714] to-transparent z-10" />

//       {/* Marquee Track */}
//       <div
//         ref={marqueeInnerRef}
//         className="flex w-max items-center gap-14 pr-14 select-none will-change-transform"
//       >
//         {/* Original items */}
//         {LOGOS.map((item, idx) => (
//           <div
//             key={`orig-${idx}`}
//             className="group flex items-center gap-3.5 text-white/50 hover:text-white transition-colors duration-200 cursor-pointer"
//             aria-label={`${item.name} - ${item.category}`}
//           >
//             {item.svg}
//             <div className="flex flex-col text-left">
//               <span className="text-sm font-semibold tracking-wide text-white/80 group-hover:text-white">
//                 {item.name}
//               </span>
//               <span className="text-[11px] font-medium text-white/40 group-hover:text-white/60">
//                 {item.category}
//               </span>
//             </div>
//           </div>
//         ))}

//         {/* Cloned set for loop */}
//         {LOGOS.map((item, idx) => (
//           <div
//             key={`clone-${idx}`}
//             className="group flex items-center gap-3.5 text-white/50 hover:text-white transition-colors duration-200 cursor-pointer"
//             aria-hidden="true"
//           >
//             {item.svg}
//             <div className="flex flex-col text-left">
//               <span className="text-sm font-semibold tracking-wide text-white/80 group-hover:text-white">
//                 {item.name}
//               </span>
//               <span className="text-[11px] font-medium text-white/40 group-hover:text-white/60">
//                 {item.category}
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
