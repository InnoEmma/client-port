// import { useState, useEffect, useRef } from "react";
// import gsap from "gsap";

// function Footer() {
//   const [lagosTime, setLagosTime] = useState("");

//   // Live Nigerian Time (WAT / Africa/Lagos)
//   useEffect(() => {
//     const updateTime = () => {
//       const formatter = new Intl.DateTimeFormat("en-GB", {
//         timeZone: "Africa/Lagos",
//         hour: "2-digit",
//         minute: "2-digit",
//         second: "2-digit",
//         hour12: false,
//       });

//       // Format to "HH : MM : SS" style as shown in the design
//       const formatted = formatter.format(new Date()).replace(/:/g, " : ");
//       setLagosTime(formatted);
//     };

//     updateTime();
//     const interval = setInterval(updateTime, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

// //   const EMAIL = "hey@jophielstudios.com";
//   const EMAIL = "i.joanozioma@gmail.com";

//   const lettersRef = useRef([]);

//   const handleMouseEnter = () => {
//     // Staggered roll up to the clone character
//     gsap.killTweensOf(lettersRef.current);
//     gsap.to(lettersRef.current, {
//       y: "-50%",
//       duration: 0.5,
//     //   ease: "power3.out",
//       stagger: 0.01,
//       overwrite: "auto",
//     });
//   };

//   const handleMouseLeave = () => {
//     // Reset back to original position
//     gsap.killTweensOf(lettersRef.current);
//     gsap.to(lettersRef.current, {
//       y: "0%",
//       duration: 0.5,
//     //   ease: "power2.inOut",
//       stagger: 0.01,
//       overwrite: "auto",
//     });
//   };

//   return (
//     <footer className="m-4 rounded-2xl bg-[#140018] text-white pt-20 pb-0 overflow-hidden font-sans selection:bg-purple-500 selection:text-white">
//       <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
//         {/* Top availability badge */}
//         <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-400 mb-8 sm:mb-6">
//           <span className="px-3 py-1 rounded-full border border-neutral-700/80 text-white font-medium">
//             3 places
//           </span>
//           <span className="text-neutral-400">available for Q4</span>
//         </div>

//         {/* Big Email Link */}
//         {/* <div className="mb-24 sm:mb-32">
//           <a
//             href="mailto:hey@jophielstudios.com"
//             className="group inline-flex items-center gap-4 sm:gap-6 text-3xl sm:text-5xl md:text-6xl font-light tracking-tight hover:opacity-80 transition-opacity"
//           >

//             <svg
//               className="w-8 h-8 sm:w-12 sm:h-12 text-white stroke-[1.5] transition-transform duration-300 group-hover:scale-105"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <rect width="20" height="16" x="2" y="4" rx="2" />
//               <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
//             </svg>
//             <span className="font-normal text-slate-100">
//               hey@jophielstudios.com
//             </span>
//           </a>
//         </div> */}
//         <div className="flex flex-col items-start select-none font-sans mb-36">
//           {/* Badge */}

//           {/* Interactive Email Link */}
//           <a
//             href={`mailto:${EMAIL}`}
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//             className="group inline-flex items-center text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-white focus:outline-none"
//           >
//             {/* Mail Icon Container: expands and fades in on hover */}
//             <span className="grid transition-all duration-300 ease-out grid-cols-[0fr] opacity-0 group-hover:grid-cols-[1fr] group-hover:opacity-100 group-hover:mr-3 sm:group-hover:mr-4">
//               <span className="overflow-hidden flex items-center">
//                 <svg
//                   className="w-7 h-7 sm:w-11 sm:h-11 shrink-0 stroke-[1.5]"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <rect width="20" height="16" x="2" y="4" rx="2" />
//                   <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
//                 </svg>
//               </span>
//             </span>

//             {/* Rolling Letter Text */}
//             <span className="inline-flex overflow-hidden">
//               {EMAIL.split("").map((char, index) => (
//                 <span
//                   key={index}
//                   className="relative inline-flex flex-col overflow-hidden h-[1.17em] leading-[1.16em] font-medium text-ice-blue text-[48px]"
//                 >
//                   <span
//                     ref={(el) => (lettersRef.current[index] = el)}
//                     className="inline-flex flex-col"
//                   >
//                     {/* Default character */}
//                     <span className="inline-block">{char}</span>
//                     {/* Secondary rolled character */}
//                     <span className="inline-block" aria-hidden="true">
//                       {char}
//                     </span>
//                   </span>
//                 </span>
//               ))}
//             </span>
//           </a>
//         </div>

//         {/* Metadata & Secondary Navigation bar */}
//         <div className="flex flex-col font-medium md:flex-row items-start md:items-center justify-between text-xs sm:text-sm  border-b  pt-6 pb-8 mb-8 gap-6 md:gap-0 text-footer-grey">

//           <div className="flex items-center gap-3  text-footer-grey">
//             <span>© {new Date().getFullYear()} Innocent Joan</span>
//             <span className=" font-mono tracking-wider">
//               Metro PH {lagosTime || "22:00:00"}
//             </span>
//           </div>

//           <div className="flex items-center gap-8  text-footer-grey">
//             <a
//               href="https://linkedin.com"
//               target="_blank"
//               rel="noreferrer"
//               className="hover:text-white transition-colors"
//             >
//               LinkedIn
//             </a>
//             <a
//               href="https://instagram.com"
//               target="_blank"
//               rel="noreferrer"
//               className="hover:text-white transition-colors"
//             >
//               Instagram
//             </a>
//           </div>

//           <div>
//             <button
//               onClick={scrollToTop}
//               className="inline-flex items-center gap-1.5  text-footer-grey hover:text-white transition-colors cursor-pointer"
//             >
//               Back to top <span>↑</span>
//             </button>
//           </div>
//         </div>

//         <div className="w-full pb-4 flex justify-between items-center text-[157px] font-extrabold uppercase leading-none tracking-tighter text-ice-blue">
//           {"Innocent joan".split("").map((char, index) => (
//             <span key={index}>{char === " " ? "\u00A0" : char}</span>
//           ))}
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

// import { useState, useEffect, useRef } from "react";
// import gsap from "gsap";

// function Footer() {
//   const [lagosTime, setLagosTime] = useState("");
//   const lettersRef = useRef([]);

//   const EMAIL = "i.joanozioma@gmail.com";

//   // Live Nigerian Time (WAT / Africa/Lagos) with SSR/Hydration protection
//   useEffect(() => {
//     const updateTime = () => {
//       const formatter = new Intl.DateTimeFormat("en-GB", {
//         timeZone: "Africa/Lagos",
//         hour: "2-digit",
//         minute: "2-digit",
//         second: "2-digit",
//         hour12: false,
//       });

//       const formatted = formatter.format(new Date()).replace(/:/g, " : ");
//       setLagosTime(formatted);
//     };

//     updateTime();
//     const interval = setInterval(updateTime, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   // Cleanup GSAP tweens on unmount to prevent leaks and conflicts
//   useEffect(() => {
//     return () => {
//       gsap.killTweensOf(lettersRef.current);
//     };
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handleMouseEnter = () => {
//     gsap.killTweensOf(lettersRef.current);
//     gsap.to(lettersRef.current, {
//       y: "-50%",
//       duration: 0.5,
//       stagger: 0.01,
//       overwrite: "auto",
//     });
//   };

//   const handleMouseLeave = () => {
//     gsap.killTweensOf(lettersRef.current);
//     gsap.to(lettersRef.current, {
//       y: "0%",
//       duration: 0.5,
//       stagger: 0.01,
//       overwrite: "auto",
//     });
//   };

//   return (
//     <footer className="m-4 rounded-2xl bg-[#140018] text-white pt-20 pb-0 overflow-hidden font-sans selection:bg-purple-500 selection:text-white">
//       <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
//         {/* Top availability badge */}
//         <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-400 mb-8 sm:mb-6">
//           <span className="px-3 py-1 rounded-full border border-neutral-700/80 text-white font-medium">
//             3 places
//           </span>
//           <span className="text-neutral-400">available for Q4</span>
//         </div>

//         <div className="flex flex-col items-start select-none font-sans mb-36">
//           {/* Interactive Email Link */}
//           <a
//             href={`mailto:${EMAIL}`}
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//             className="group inline-flex items-center text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-white focus:outline-none"
//           >
//             {/* Mail Icon Container */}
//             <span className="grid transition-all duration-300 ease-out grid-cols-[0fr] opacity-0 group-hover:grid-cols-[1fr] group-hover:opacity-100 group-hover:mr-3 sm:group-hover:mr-4">
//               <span className="overflow-hidden flex items-center">
//                 <svg
//                   className="w-7 h-7 sm:w-11 sm:h-11 shrink-0 stroke-[1.5]"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <rect width="20" height="16" x="2" y="4" rx="2" />
//                   <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
//                 </svg>
//               </span>
//             </span>

//             {/* Rolling Letter Text */}
//             <span className="inline-flex overflow-hidden">
//               {EMAIL.split("").map((char, index) => (
//                 <span
//                   key={index}
//                   className="relative inline-flex flex-col overflow-hidden h-[1.17em] leading-[1.16em] font-medium text-ice-blue text-[48px]"
//                 >
//                   <span
//                     ref={(el) => (lettersRef.current[index] = el)}
//                     className="inline-flex flex-col"
//                   >
//                     {/* Default character */}
//                     <span className="inline-block">{char}</span>
//                     {/* Secondary rolled character */}
//                     <span className="inline-block" aria-hidden="true">
//                       {char}
//                     </span>
//                   </span>
//                 </span>
//               ))}
//             </span>
//           </a>
//         </div>

//         {/* Metadata & Secondary Navigation bar */}
//         <div className="flex flex-col font-medium md:flex-row items-start md:items-center justify-between text-xs sm:text-sm border-b pt-6 pb-8 mb-8 gap-6 md:gap-0 text-footer-grey">
//           <div className="flex items-center gap-3 text-footer-grey">
//             <span>© {new Date().getFullYear()} Innocent Joan</span>
//             <span className="font-mono tracking-wider">
//               Metro PH {lagosTime || "22:00:00"}
//             </span>
//           </div>

//           <div className="flex items-center gap-8 text-footer-grey">
//             <a
//               href="https://linkedin.com"
//               target="_blank"
//               rel="noreferrer"
//               className="hover:text-white transition-colors"
//             >
//               LinkedIn
//             </a>
//             <a
//               href="https://instagram.com"
//               target="_blank"
//               rel="noreferrer"
//               className="hover:text-white transition-colors"
//             >
//               Instagram
//             </a>
//           </div>

//           {/* Back to Top */}
//           <div>
//             <button
//               onClick={scrollToTop}
//               className="group inline-flex items-center gap-1.5 text-footer-grey hover:text-white transition-colors cursor-pointer"
//             >
//               <span>Back to top</span>
//               <span className="inline-block transition-transform duration-200 ease-out group-hover:-translate-y-1">
//                 ↑
//               </span>
//             </button>
//           </div>
//         </div>

//         <div className="w-full pb-4 flex justify-between items-center text-[157px] font-extrabold uppercase leading-none tracking-tighter text-ice-blue">
//           {"Innocent joan".split("").map((char, index) => (
//             <span key={index}>{char === " " ? "\u00A0" : char}</span>
//           ))}
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;




import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

function Footer() {
  const [lagosTime, setLagosTime] = useState("");
  const lettersRef = useRef([]);

  const EMAIL = "i.joanozioma@gmail.com";

  // Live Nigerian Time (WAT / Africa/Lagos) with SSR/Hydration protection
  useEffect(() => {
    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Africa/Lagos",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });

      const formatted = formatter.format(new Date()).replace(/:/g, " : ");
      setLagosTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Cleanup GSAP tweens on unmount to prevent leaks and conflicts
  // useEffect(() => {
  //   return () => {
  //     gsap.killTweensOf(lettersRef.current);
  //   };
  // }, []);
  // Cleanup GSAP tweens on unmount to prevent leaks and conflicts
  useEffect(() => {
    const letters = lettersRef.current;
    return () => {
      if (letters) {
        gsap.killTweensOf(letters);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleMouseEnter = () => {
    gsap.killTweensOf(lettersRef.current);
    gsap.to(lettersRef.current, {
      y: "-50%",
      duration: 0.5,
      stagger: 0.01,
      overwrite: "auto",
    });
  };

  const handleMouseLeave = () => {
    gsap.killTweensOf(lettersRef.current);
    gsap.to(lettersRef.current, {
      y: "0%",
      duration: 0.5,
      stagger: 0.01,
      overwrite: "auto",
    });
  };

  return (
    <footer id="contact" className="m-2 sm:m-3 lg:m-4 rounded-2xl bg-[#140018] text-white pt-12 sm:pt-16 lg:pt-20 pb-0 overflow-hidden font-sans selection:bg-purple-500 selection:text-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Top availability badge */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs sm:text-sm text-neutral-400 mb-8 sm:mb-6">
          <span className="px-3 py-1 rounded-full border border-neutral-700/80 text-white font-medium whitespace-nowrap">
            3 places
          </span>
          <span className="text-neutral-400">available for Q4</span>
        </div>

        <div className="flex flex-col items-start select-none font-sans mb-16 sm:mb-24 lg:mb-36">
          {/* Interactive Email Link */}
          <a
            href={`mailto:${EMAIL}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="group inline-flex items-center text-[clamp(17px,7vw,48px)] font-light tracking-tight text-white focus:outline-none max-w-full"
          >
            {/* Mail Icon Container */}
            <span className="grid transition-all duration-300 ease-out grid-cols-[0fr] opacity-0 group-hover:grid-cols-[1fr] group-hover:opacity-100 group-hover:mr-2 sm:group-hover:mr-4">
              <span className="overflow-hidden flex items-center">
                <svg
                  className="w-[clamp(1.1rem,5vw,2.75rem)] h-[clamp(1.1rem,5vw,2.75rem)] shrink-0 stroke-[1.5]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </span>
            </span>

            {/* Rolling Letter Text */}
            <span className="inline-flex overflow-hidden">
              {EMAIL.split("").map((char, index) => (
                <span
                  key={index}
                  className="relative inline-flex flex-col overflow-hidden h-[1.17em] leading-[1.16em] font-medium text-ice-blue text-[clamp(17px,7vw,48px)]"
                >
                  <span
                    ref={(el) => (lettersRef.current[index] = el)}
                    className="inline-flex flex-col"
                  >
                    {/* Default character */}
                    <span className="inline-block">{char}</span>
                    {/* Secondary rolled character */}
                    <span className="inline-block" aria-hidden="true">
                      {char}
                    </span>
                  </span>
                </span>
              ))}
            </span>
          </a>
        </div>

        {/* Metadata & Secondary Navigation bar */}
        <div className="flex flex-col font-medium md:flex-row items-start md:items-center justify-between text-xs sm:text-sm border-b pt-6 pb-8 mb-8 gap-5 sm:gap-6 md:gap-0 text-footer-grey">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-footer-grey">
            <span>© {new Date().getFullYear()} Innocent Joan</span>
            <span className="font-mono tracking-wider">
              Metro PH {lagosTime || "22:00:00"}
            </span>
          </div>

          <div className="flex items-center gap-6 sm:gap-8 text-footer-grey">
            <a
              href="https://www.linkedin.com/in/ozioma-joan-innocent-237b301b3"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href="tel:+23471042606"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors duration-200"
            >
              phone
            </a>
          </div>

          {/* Back to Top */}
          <div>
            <button
              onClick={scrollToTop}
              className="group inline-flex items-center gap-1.5 text-footer-grey hover:text-white transition-colors duration-200 cursor-pointer"
            >
              <span>Back to top</span>
              <span className="inline-block transition-transform duration-200 ease-out group-hover:-translate-y-1">
                ↑
              </span>
            </button>
          </div>
        </div>

        <div className="w-full pb-3 sm:pb-4 flex justify-between items-center text-[clamp(1.5rem,calc(11.8vw_-_13px),157px)] font-extrabold uppercase leading-none tracking-tighter text-ice-blue">
          {"Innocent joan".split("").map((char, index) => (
            <span key={index}>{char === " " ? "\u00A0" : char}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;