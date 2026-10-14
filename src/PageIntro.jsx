// import logo_2 from "../extra/logo2.png";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { SplitText } from "gsap/SplitText";
// import { useRef, useState } from "react";
// import FramerHoverLink from "./framerHoverLink";
// import Magnetic from "./Magnetic";
// import { useLenis } from "lenis/react";

// import Gemi from "./Gemi";

// gsap.registerPlugin(ScrollTrigger, SplitText);

// const COLOR_START = "#DBE8FB";
// const COLOR_END = "#140018";
// const TEXT_START = "#140018";
// const TEXT_END = "#e1ebfc";

// // 2. Define the link data
// const NAV_LINKS = [
//   { number: "(01)", title: "View my work", href: "#work" },
//   { number: "(02)", title: "View my services", href: "#services" },
//   {
//     number: "(03)",
//     title: "Schedule an introductory meeting",
//     href: "#contact",
//   },
// ];

// export default function PageIntro() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const containerRef = useRef(null);
//   const fadeRef = useRef(null);

//   useGSAP(
//     () => {
//       // 1. Organic floating animation for each blob finger
//       gsap.to(".bf1", {
//         y: -60,
//         x: 35,
//         rotation: 6,
//         duration: 3,
//         ease: "power1.inOut",
//         repeat: -1,
//         yoyo: true,
//         transformOrigin: "bottom center",
//       });
//       gsap.to(".bf2", {
//         y: 50,
//         x: -35,
//         rotation: -7,
//         duration: 4,
//         ease: "power1.inOut",
//         repeat: -1,
//         yoyo: true,
//         transformOrigin: "bottom center",
//       });
//       gsap.to(".bf3", {
//         y: -45,
//         x: 40,
//         rotation: 4,
//         duration: 3,
//         ease: "power1.inOut",
//         repeat: -1,
//         yoyo: true,
//         transformOrigin: "bottom center",
//       });

//       // 2. Entrance animations
//       const tl = gsap.timeline();
//       tl.from(".design", { y: 25, opacity: 0, duration: 0.7, stagger: 0.2 });
//       tl.from(
//         ".blob",
//         { y: 85, opacity: 0, duration: 0.7, stagger: 0.2 },
//         "-=0.5",
//       );
//       tl.from(
//         ".logo",
//         { y: -25, opacity: 0, duration: 0.7, stagger: 0.2 },
//         "-=0.5",
//       );
//       tl.from(
//         ".icon",
//         { y: -25, opacity: 0, duration: 0.7, stagger: 0.2 },
//         "-=0.7",
//       );
//       tl.from(
//         ".para",
//         { y: 20, opacity: 0, duration: 0.7, stagger: 0.2 },
//         "-=0.6",
//       );
//       tl.from(
//         ".places",
//         { y: 20, opacity: 0, duration: 0.7, stagger: 0.2 },
//         "-=0.6",
//       );

//       // 3. Hero split text
//       const splitHero = SplitText.create(".split", {
//         type: "lines",
//         mask: "lines",
//         autoSplit: true,
//         linesClass: "split-line",
//         onSplit(self) {
//           return gsap.from(self.lines, {
//             yPercent: 200,
//             duration: 0.65,
//             stagger: 0.15,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: ".split",
//               once: false,
//               start: "top 85%",
//             },
//           });
//         },
//       });

//       // 4. Background color transitions
//       const scrollTriggerConfig = {
//         trigger: containerRef.current,
//         start: "50% bottom",
//         toggleActions: "play reverse play reverse",
//       };

//       gsap.fromTo(
//         containerRef.current,
//         { backgroundColor: COLOR_START },
//         {
//           backgroundColor: COLOR_END,
//           ease: "power1.inOut",
//           scrollTrigger: scrollTriggerConfig,

//           // markers: true,
//         },
//       );

//       gsap.fromTo(
//         ".blob-layer",
//         { color: "#EAF2FF" },
//         {
//           color: COLOR_END,
//           ease: "power2.inOut",
//           scrollTrigger: scrollTriggerConfig,
//         },
//       );

//       // Text color transition for bottom section
//       gsap.fromTo(
//         ".fade-text",
//         { color: TEXT_START },
//         {
//           color: TEXT_END,
//           scrollTrigger: {
//             trigger: fadeRef.current,
//             start: "top 74.3%", //was top 68
//             toggleActions: "play reverse play reverse",
//             // markers: true,
//           },
//         },
//       );

//       // 5. About section text splitting
//       const aboutElements = gsap.utils.toArray(".about");
//       const aboutSplits = aboutElements.map((el) => {
//         return SplitText.create(el, {
//           type: "lines",
//           mask: "lines",
//           linesClass: "split-lines",
//           autoSplit: true,
//           onSplit(self) {
//             return gsap.from(self.lines, {
//               yPercent: 120,
//               duration: 1,
//               stagger: 0.1,
//               ease: "expo.out",
//               scrollTrigger: {
//                 trigger: el,
//                 start: "top 90%",
//                 toggleActions: "play none none reverse",
//                 // markers: true,
//               },
//             });
//           },
//         });
//       });

//       return () => {
//         splitHero.revert();
//         aboutSplits.forEach((s) => s.revert());
//       };
//     },
//     { scope: containerRef },
//   );

//   // Inside PageIntro(), after your refs:
//   const lenis = useLenis();

//   const scrollToAbout = () => {
//     lenis?.scrollTo("#about-section", {
//       duration: 1.2,
//       // easeInOutCubic provides smooth ramp-up and ramp-down
//       easing: (t) =>
//         t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
//     });
//   };

//   return (
//     <header
//       className="change-bgg m-4 rounded-3xl overflow-hidden"
//       ref={containerRef}
//       style={{ backgroundColor: COLOR_START }}
//     >
//       <nav className="relative z-20">
//         <div className="flex justify-between items-center px-4 sm:px-6 pt-3 sm:pt-3.5">
//           <div className="logo shrink-0 flex items-center">
//             <img
//               className="h-8 sm:h-10 w-auto object-contain"
//               src={logo_2}
//               alt="Studio Logo"
//             />
//           </div>
//           <div className="design hidden lg:block absolute left-1/2 -translate-x-1/2 border border-black rounded-full px-5 py-1.5 font-medium mb-5">
//             <p className="text-sm xl:text-base whitespace-nowrap select-none">
//               Innocent Joan
//             </p>
//           </div>
//           <div className="icon hidden md:flex items-center gap-5 lg:gap-7 font-medium text-[15px] lg:text-[17px]">
//             <a href="#about" className="hover:opacity-70 transition-opacity">
//               About Me
//             </a>
//             <a href="#work" className="hover:opacity-70 transition-opacity">
//               Work
//             </a>
//             <a href="#service" className="hover:opacity-70 transition-opacity">
//               Service
//             </a>
//             {/* <a
//               href="#collaborate"
//               className="text-white bg-black py-3.5 px-6.5 lg:px-6 rounded-xl text-[19px] leading-4.5 whitespace-nowrap hover:bg-black/85 transition-colors"
//             >
//               To collaborate
//             </a> */}
//             <Magnetic strength={15} textStrength={15}>
//               <a
//                 href="#collaborate"
//                 className="inline-block text-white bg-black py-3.5 px-6.5 lg:px-6 rounded-xl text-[19px] leading-4.5 whitespace-nowrap hover:bg-black/85 transition-colors cursor-pointer select-none"
//               >
//                 <span className="inline-block pointer-events-none">
//                   To collaborate
//                 </span>
//               </a>
//             </Magnetic>
//           </div>
//           <button
//             type="button"
//             onClick={() => setMenuOpen((prev) => !prev)}
//             className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none"
//             aria-label={menuOpen ? "Close menu" : "Open menu"}
//             aria-expanded={menuOpen}
//           >
//             <span
//               className={`block w-6 h-0.5 bg-black rounded-full transition-all duration-300 ease-in-out ${
//                 menuOpen ? "rotate-45 translate-y-2" : ""
//               }`}
//             />
//             <span
//               className={`block w-6 h-0.5 bg-black rounded-full transition-all duration-300 ease-in-out ${
//                 menuOpen ? "opacity-0" : "opacity-100"
//               }`}
//             />
//             <span
//               className={`block w-6 h-0.5 bg-black rounded-full transition-all duration-300 ease-in-out ${
//                 menuOpen ? "-rotate-45 -translate-y-2" : ""
//               }`}
//             />
//           </button>
//         </div>

//         <div
//           className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
//             menuOpen
//               ? "max-h-80 opacity-100 border-t border-black/10"
//               : "max-h-0 opacity-0"
//           }`}
//         >
//           <div className="flex flex-col items-start gap-4 px-6 pb-6 pt-4 font-medium text-[17px]">
//             <a
//               href="#about"
//               onClick={() => setMenuOpen(false)}
//               className="w-full py-1 hover:opacity-70 transition-opacity"
//             >
//               About Me
//             </a>
//             <a
//               href="#work"
//               onClick={() => setMenuOpen(false)}
//               className="w-full py-1 hover:opacity-70 transition-opacity"
//             >
//               Work
//             </a>
//             <a
//               href="#service"
//               onClick={() => setMenuOpen(false)}
//               className="w-full py-1 hover:opacity-70 transition-opacity"
//             >
//               Service
//             </a>
//             <a
//               href="#collaborate"
//               onClick={() => setMenuOpen(false)}
//               className="text-custom-blue bg-black py-3 px-6 rounded-2xl text-center w-full hover:bg-black/85 transition-colors mt-2"
//             >
//               To collaborate
//             </a>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section Container */}
//       <section className="relative flex flex-col justify-between min-h-[calc(100vh-4rem)] overflow-hidden">
//         <div
//           className="blob-layer absolute inset-0 pointer-events-none z-0"
//           style={{ color: "#EAF2FF" }}
//         >
//           <svg
//             viewBox="0 0 1322 693"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             preserveAspectRatio="xMidYMax slice"
//             className="w-full h-full"
//           >
//             <defs>
//               <linearGradient
//                 id="bottomFadeGrad"
//                 x1="0"
//                 y1="0"
//                 x2="0"
//                 y2="100%"
//               >
//                 <stop offset="55%" stopColor="#ffffff" stopOpacity="1" />
//                 <stop offset="85%" stopColor="#ffffff" stopOpacity="0.3" />
//                 <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
//               </linearGradient>
//               <mask
//                 id="fade-bottom"
//                 maskUnits="userSpaceOnUse"
//                 x="0"
//                 y="0"
//                 width="1322"
//                 height="693"
//               >
//                 <rect
//                   x="0"
//                   y="0"
//                   width="1322"
//                   height="693"
//                   fill="url(#bottomFadeGrad)"
//                 />
//               </mask>
//             </defs>
//             <g mask="url(#fade-bottom)">
//               <g transform="translate(20 346.5) scale(0.5)">
//                 <g className="magnet">
//                   <g className="blob-float bf1">
//                     <path
//                       className="blob b1"
//                       fill="currentColor"
//                       d="M629.511 107.568C661 230.462 633.112 446.754 543.937 693L0 693C89.1755 446.754 217.882 230.462 338.39 107.568C405.118 39.424 469.395 0 522.946 0C576.498 0 612.121 39.424 629.511 107.568Z"
//                     />
//                   </g>
//                 </g>
//               </g>
//               <g transform="translate(282 173.3) scale(0.75)">
//                 <g className="magnet">
//                   <g className="blob-float bf2">
//                     <path
//                       className="blob b2"
//                       fill="currentColor"
//                       d="M629.511 107.568C661 230.462 633.112 446.754 543.937 693L0 693C89.1755 446.754 217.882 230.462 338.39 107.568C405.118 39.424 469.395 0 522.946 0C576.498 0 612.121 39.424 629.511 107.568Z"
//                     />
//                   </g>
//                 </g>
//               </g>
//               <g transform="translate(677 13.9) scale(0.98)">
//                 <g className="magnet">
//                   <g className="blob-float bf3">
//                     <path
//                       className="blob b3"
//                       fill="currentColor"
//                       d="M629.511 107.568C661 230.462 633.112 446.754 543.937 693L0 693C89.1755 446.754 217.882 230.462 338.39 107.568C405.118 39.424 469.395 0 522.946 0C576.498 0 612.121 39.424 629.511 107.568Z"
//                     />
//                   </g>
//                 </g>
//               </g>
//             </g>
//           </svg>
//         </div>
//         <div className="relative z-10">
//           <div className="split text-center font-extrabold text-[95px] leading-31.25 text-midnight ">
//             <p className="-mt-7">Better systems</p>
//             <p className="-mt-10">& smoother </p>
//             <p className="-mt-10">daily operations</p>
//           </div>
//           <div>
//             <p className="para text-center text-plum-gray text-[20px] leading-7 font-medium mx-82.5 mt-6">
//               Standing out isn't luck, it's craftsmanship. I combine executive
//               support, product management, and operation managment to help your
//               business thrive from positioning to launch.
//             </p>
//           </div>
//         </div>
//         <div className="fade-text places relative z-10 flex justify-between items-center px-6 pb-12">
//           <div className="flex justify-between items-center gap-2">
//             <p className="font-semibold border rounded-md py-1 px-2 text-[14px] leading-5">
//               3 Places
//             </p>
//             <p className="font-medium">Available for Q4</p>
//           </div>
//           <div>
//             {/* <p className="border rounded-full px-5 py-1.5 font-semibold text-[14px] leading-4.5">
//               ScrOll dOwn
//             </p> */}
//             <button
//               type="button"
//               onClick={scrollToAbout}
//               className="border rounded-full px-5 py-1.5 font-semibold text-[14px] leading-4.5 cursor-pointer"
//             >
//               ScrOll dOwn
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Subsequent Page Content */}
//       <section
//         id="about-section"
//         className="about-section relative z-10 flex pr-16 pl-16 justify-between items-start gap-60 pt-40 pb-20"
//       >
//         <div className="shrink-0">
//           <p className="about font-medium text-[20px] leading-7 text-plum-gray">
//             About me, since 2025
//           </p>
//         </div>
//         <div ref={fadeRef} className="fade-text w-full">
//           <div className="pb-10">
//             <div className="about font-bold text-[57px] w-[690px] leading-20 ">
//               <p className="">Hey, I'm Innocent Joan</p>
//               <p className="-mt-3">a business operations manager and</p>
//               <p className="-mt-3"> executive right hand</p>
//             </div>
//           </div>
//           <div className="about-para-section">
//             <div>
//               <p className="about font-medium text-[20px] leading-7.75 pb-5 text-mori-text">
//                 I work with founders at the moments that count: a launch, a
//                 rebrand, or a backend that’s falling apart. From executive
//                 support and product management to full operational management,
//                 everything is under one roof.
//               </p>
//               <p className="about font-medium text-[20px] leading-7.75 text-mori-text">
//                 No account managers, no middle layers. You talk directly to the
//                 me, and decisions take immediate effect.
//               </p>
//             </div>

//             {/* 3. Replaced here */}
//             <FramerHoverLink items={NAV_LINKS} />
//           </div>
//         </div>
//       </section>
//       {/* Somewhere here */}
//       {/* Somewhere here */}
//       {/* className="relative" */}
//       <div>
//         x{/* The marquee sits on top */}
//         <div>
//           {/* className="relative z-10" */}
//           <Gemi bgColor="transparent" />
//         </div>
//       </div>
//     </header>
//   );
// }

import logo_2 from "../extra/logo2.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import FramerHoverLink from "./framerHoverLink";
import Magnetic from "./Magnetic";
import { useLenis } from "lenis/react";
import ScrollDownButton from "./ScrollDownButton";

import Gemi from "./Gemi";

gsap.registerPlugin(ScrollTrigger, SplitText);

const COLOR_START = "#DBE8FB";
const COLOR_END = "#140018";
const TEXT_START = "#140018";
const TEXT_END = "#e1ebfc";

const NAV_LINKS = [
  { number: "(01)", title: "View my work", href: "#selected-exp" },
  { number: "(02)", title: "View my services", href: "#services" },
  {
    number: "(03)",
    // title: "Schedule an introductory meeting",
    title: "Schedule\u00A0an\u00A0introductory meeting",
    href: "#contact",
  },
];

export default function PageIntro({ scrollToContact }) {
  // const [menuOpen, setMenuOpen] = useState(false);
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
      // const tl = gsap.timeline();
      // tl.from(".design", { y: 25, opacity: 0, duration: 0.7, stagger: 0.2 });
      // tl.from(
      //   ".blob",
      //   { y: 85, opacity: 0, duration: 0.7, stagger: 0.2 },
      //   "-=0.5",
      // );
      // tl.from(
      //   ".logo",
      //   { y: -25, opacity: 0, duration: 0.9, stagger: 0.2 },
      //   "-=0.5",
      // );
      // tl.from(
      //   ".icon",
      //   { y: -25, opacity: 0, duration: 0.7, stagger: 0.2 },
      //   "-=0.7",
      // );
      // tl.from(
      //   ".para",
      //   { y: 20, opacity: 0, duration: 0.7, stagger: 0.2 },
      //   "-=0.6",
      // );
      // tl.from(
      //   ".places",
      //   { y: 20, opacity: 0, duration: 0.7, stagger: 0.2 },
      //   "-=0.6",
      // );

       const tl = gsap.timeline();
      tl.from(".design", { y: 25, opacity: 0, duration: 0.7, stagger: 0.2 });
      tl.from(
        ".icon",
        { y: -25, opacity: 0, duration: 0.7, stagger: 0.2 },
        "-=0.8",
      );
      tl.from(
        ".logo",
        { y: -25, opacity: 0, duration: 0.9, stagger: 0.2 },
        "<",
      );
      tl.from(
        ".blob",
        { y: 85, opacity: 0, duration: 0.5, stagger: 0.2, ease:'back.out(2)' },
        "-=0.7",
      );
      tl.from(
        ".para",
        { y: 20, opacity: 0, duration: 0.7, stagger: 0.2 },
        "0.5",
      );
      tl.from(
        ".places",
        { y: 20, opacity: 0, duration: 0.7, stagger: 0.2 },
        "-=0.5",
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

      // 4. Background + text color transitions
      const mm = gsap.matchMedia();

      mm.add(
        {
          isMobile: "(max-width: 767px)",
          isDesktop: "(min-width: 768px)",
        },
        (ctx) => {
          const { isMobile } = ctx.conditions;

          const scrollTriggerConfig = {
            trigger: containerRef.current,
            start: isMobile ? "60% bottom" : "47.5% bottom",
            toggleActions: "play reverse play reverse",
            // invalidateOnRefresh: true,
            // markers: true, // flip on while tuning
          };

          gsap.fromTo(
            containerRef.current,
            { backgroundColor: COLOR_START },
            {
              backgroundColor: COLOR_END,
              ease: "power1.inOut",
              scrollTrigger: scrollTriggerConfig,
              // markers: true,
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

          gsap.fromTo(
            ".fade-text",
            { color: TEXT_START },
            {
              color: TEXT_END,
              ease: "power1.inOut",
              scrollTrigger: {
                trigger: fadeRef.current,
                start: isMobile ? "top 65%" : "top 52.8%",
                toggleActions: "play reverse play reverse",
                // invalidateOnRefresh: true,
                // markers: true,
              },
            },
          );
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
                start: "top 90%",
                toggleActions: "play none none reverse",
              },
            });
          },
        });
      });

      return () => {
        mm.revert();
        splitHero.revert();
        aboutSplits.forEach((s) => s.revert());
      };
    },
    { scope: containerRef },
  );

  const lenis = useLenis();

  const scrollToAbout = () => {
    lenis?.scrollTo("#about-section", {
      duration: 1.2,
      easing: (t) =>
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
    });
  };

  const scrollToWork = () => {
    lenis?.scrollTo("#selected-exp", {
      duration: 1.2,
      easing: (t) =>
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
    });
  };

  const scrollToServices = () => {
    lenis?.scrollTo("#services", {
      duration: 1.2,
      easing: (t) =>
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
    });
  };

  return (
    <header
      className="change-bgg m-4 sm:m-4 rounded-3xl overflow-hidden"
      ref={containerRef}
      style={{ backgroundColor: COLOR_START }}
    >
      <nav className="relative z-20">
        <div className="flex justify-between items-center px-5 sm:px-6 pt-5 md:pt-0">
          {" "}
          {/*  pt-5 sm:pt-6 */}
          <div className="logo shrink-0 flex items-center">
            <img
              className="h-6 sm:h-10 w-auto object-contain"
              src={logo_2}
              alt="Studio Logo"
            />
          </div>
          <div className="design hidden lg:block absolute left-1/2 -translate-x-1/2 border border-black/20 rounded-full px-5 py-1.5 font-medium">
            <p className="text-sm xl:text-base  whitespace-nowrap select-none text-midnight">
              Innocent Joan
            </p>
          </div>
          <div className="icon hidden md:flex items-center gap-5 lg:gap-7 font-medium text-[15px] lg:text-[17px]">
            <a
              onClick={scrollToAbout}
              className="hover:opacity-70 transition-opacity cursor-pointer"
            >
              About Me
            </a>
            <a
              onClick={scrollToWork}
              className="hover:opacity-70 transition-opacity cursor-pointer"
            >
              Work
            </a>
            <a
              onClick={scrollToServices}
              className="hover:opacity-70 transition-opacity cursor-pointer"
            >
              Service
            </a>
            <Magnetic strength={15} textStrength={15}>
              <a
                onClick={scrollToContact}
                className="inline-block text-white bg-[#140018] py-3.5 px-6.5 lg:px-6 rounded-xl text-[19px] leading-4.5 whitespace-nowrap hover:bg-[#140018]/85 transition-colors cursor-pointer select-none"
              >
                <span className="inline-block pointer-events-none">
                  To collaborate
                </span>
              </a>
            </Magnetic>
          </div>
          {/* Mobile Direct CTA matching original design over Hamburger */}
          <div className="flex md:hidden items-center icon">
            <a
              href="#collaborate"
              className="text-white bg-[#140018] py-2.5 px-5 rounded-xl text-[14px] font-medium flex items-center gap-2 hover:opacity-85 transition-opacity"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white block"></span>
              To collaborate
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section Container */}
      {/* <section className="relative flex flex-col justify-between min-h-[calc(100vh-5rem)] overflow-hidden"> */}
      <section className="relative flex flex-col justify-between min-h-[calc(100vh-5rem)] overflow-hidden">
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

        <div className="relative z-10 flex flex-col items-center justify-center mt-20 md:mt-0">
          {/* Mobile Pill (Positioned above Title) */}
          <div className="design lg:hidden border border-black/20 rounded-full px-4 py-1.5 font-medium mb-6">
            <p className="text-[13px] whitespace-nowrap text-midnight">
              Innocent Joan
            </p>
          </div>

          <div className="split text-center font-extrabold text-[44px]  tracking-tight xl:text-[95px] md:text-[70px] md:leading-25  lg:leading-30  leading-13 text-midnight">
            <p className="md:-mt-7">Better systems</p>
            <p className="md:-mt-10">& smoother </p>
            <p className="md:-mt-10">daily operations</p>
          </div>
          <div className="px-5 w-full">
            {/* <p className="para text-center text-plum-gray text-[16px] leading-[22px] md:text-[20px] md:leading-7 font-medium md:mx-82.5 mx-auto max-w-full md:max-w-[700px] mt-6 md:mt-8"> */}
            <p className="para text-center text-plum-gray text-[clamp(1rem,1.4vw,1.25rem)] leading-relaxed font-medium mx-auto max-w-xl lg:max-w-2xl mt-6 md:mt-8">
              Standing out isn't luck, it's craftsmanship. I combine executive
              support, product management, and operation managment to help your
              business thrive from positioning to launch.
            </p>
          </div>
        </div>

        {/* Hero Bottom - Aligns layout across mobile and desktop */}
        <div className="fade-text places relative z-10 flex flex-row justify-between md:justify-between items-center px-6 md:px-6 pb-12 w-full mt-24 md:mt-0">
          <div className="flex justify-between md:justify-start items-center w-full md:w-auto md:gap-3">
            <p className="font-semibold border border-black/20 rounded-lg md:rounded-md py-1.5 px-3 md:py-1 md:px-2 text-[13px] md:text-[14px] leading-5">
              3 places
            </p>
            <p className="font-medium text-[13px] md:text-base">
              available for Q4
            </p>
          </div>
          <div className="hidden md:block">
            {/* <button
              type="button"
              onClick={scrollToAbout}
              className="border border-black/20 rounded-full px-5 py-1.5 font-semibold text-[14px] leading-4.5 cursor-pointer hover:bg-black/5 transition-colors"
            >
              ScrOll dOwn
            </button> */}
            <ScrollDownButton onClick={scrollToAbout} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about-section"
        className="about-section relative z-10 flex flex-col md:flex-row px-6 md:px-14 justify-between items-start gap-8 md:gap-65 pt-20 md:pt-40 pb-20"
      >
        <div className="fade-text shrink-0 flex items-center gap-2">
          {/* Added dot to match mobile design spec */}
          <span className="md:hidden w-1.5 h-1.5 rounded-full bg-current block" />
          <p className="about font-medium text-[16px] md:text-[20px] leading-7">
            About me, since 2025
          </p>
        </div>

        <div ref={fadeRef} className="fade-text w-full min-w-0">
          {/* <div className="pb-8 md:pb-10">
            <div className="about font-bold text-[36px] leading-[1.1] tracking-tight w-full md:text-[57px] md:w-[690px] md:leading-20">
              <p>Hey, I'm Innocent Joan</p>
              <p className="md:-mt-3">a business operations manager and</p>
              <p className="md:-mt-3">executive right hand</p>
            </div>
          </div> */}
          <div className="pb-8 md:pb-10">
            <div className="about font-bold text-[30px] xs:text-[32px] leading-[1.15] tracking-tighter w-full md:text-[28px] lg:text-[57px] md:w-[690px] md:leading-20">
              {/* <div className="about font-bold text-[30px] md:text-[3.8vw] xl:text-[57px] leading-[1.12] xl:leading-20 tracking-tight w-full max-w-full xl:max-w-[690px]"> */}
              <p>Hey, I'm Innocent Joan</p>
              <p className="md:-mt-3">
                a business operations <br className="md:hidden" />
                manager and
              </p>
              <p className="md:-mt-3">executive right hand</p>
            </div>
          </div>
          <div className="about-para-section flex flex-col gap-6 md:gap-0">
            {/* <div className="flex flex-col gap-4 md:gap-0"> */}
            <div className="flex flex-col gap-4 md:gap-0 max-w-xl lg:max-w-2xl">
              <p className="about font-medium text-[16px] leading-[24px] md:text-[20px] md:leading-7.75 md:pb-5 text-mori-text">
                I work with founders at the moments that count: a launch, a
                rebrand, or a backend that’s falling apart. From executive
                support and product management to full operational management,
                everything is under one roof.
              </p>
              <p className="about font-medium text-[16px] leading-[24px] md:text-[20px] md:leading-7.75 text-mori-text">
                No account managers, no middle layers. You talk directly to the
                me, and decisions take immediate effect.
              </p>
            </div>

            <div className="mt-8 md:mt-12">
              <FramerHoverLink items={NAV_LINKS} />
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-10">
        <Gemi bgColor="transparent" />
      </div>
    </header>
  );
}
