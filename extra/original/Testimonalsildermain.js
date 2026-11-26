// import shape5 from "../extra/shape5.svg";
// import { useState, useRef, useEffect, useCallback } from "react";

// import gsap from "gsap";

// import { useGSAP } from "@gsap/react";

// import { SplitText } from "gsap/SplitText";

// import { ArrowLeft, ArrowRight } from "lucide-react";

// import prox from "../extra/prox.jpg";
// import mop from "../extra/mop.png";
// import noface from "../extra/noface.jpg";

// gsap.registerPlugin(useGSAP, SplitText);

// const TESTIMONIALS = [
//   {
//     id: 1,

//     quote:
//       "Joan not only handled the day-to-day admin, but she was also incredibly smart about our operational workflows. As a result, my business is not just organized, but she truly protects my time. Everything was picked up instantly, communication was concise, and I could finally focus on growth. Highly recommended",

//     name: "Health care operation partener",

//     role: "Private Hospital Network",

//     avatar:
//       // "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
//       noface,
//   },

//   {
//     id: 2,

//     quote:
//       "We have been working together for over a year now. Joan anticipates what I need before I even ask, and she completely overhauled our backend operations without missing a beat. She filters the noise so I can focus entirely on growth. With Joan handling the day-to-day, I know everything is in good hands.",

//     name: "P. A",

//     role: "Founder, ProXchange",

//     avatar:
//       // "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
//       prox,
//   },

//   {
//     id: 3,

//     quote:
//       "Joan works professionally and with an eye for detail. You notice the passion for the work: she doesn't just think about how a task gets done, but also about why it matters to the business. That commitment sets her apart from the rest",

//     name: "VA Team Leader",

//     role: "Mopel technology",

//     avatar:
//       // "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
//       mop,
//   },
// ];

// export default function TestimonialSlider() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward

//   const [fontsReady, setFontsReady] = useState(false);

//   const containerRef = useRef(null);

//   const quoteRef = useRef(null);

//   const splitRef = useRef(null);

//   const linesRef = useRef([]);

//   const isAnimating = useRef(true);

//   const autoPlayRef = useRef(null);

//   const total = TESTIMONIALS.length;

//   const current = TESTIMONIALS[currentIndex];
//   const shapeRef = useRef(null);

//   // Wait for webfonts — SplitText measures line breaks at split-time,

//   // so splitting with a fallback font gives the wrong line groups.

//   useEffect(() => {
//     let alive = true;

//     const done = () => alive && setFontsReady(true);

//     if (document.fonts?.ready) document.fonts.ready.then(done);
//     else done();

//     return () => {
//       alive = false;
//     };
//   }, []);

//   // Exit choreography — lines slide out of their masks, then we swap data

//   const requestChange = useCallback(
//     (dir) => {
//       if (isAnimating.current) return;

//       isAnimating.current = true;

//       setDirection(dir);

//       const tl = gsap.timeline({
//         onComplete: () => {
//           setCurrentIndex((prev) => (prev + dir + total) % total);
//         },
//       });

//       tl.to(linesRef.current, {
//         yPercent: -dir * 115,

//         duration: 0.35, // was 0.5

//         ease: "expo.in", // was power3.in → sharp acceleration

//         stagger: { each: 0.045, from: dir > 0 ? "start" : "end" },
//       })

//         // .to(

//         //   ".slide-author",

//         //   { y: -dir * 16, opacity: 0, duration: 0.2, ease: "power3.in" }, // was 0.3 / power2.in

//         //   "<0.02", // was "<0.05" → fires almost immediately

//         // )

//         .to(
//           ".slide-avatar",

//           {
//             scale: 0.12,

//             borderRadius: "50%",

//             opacity: 0,

//             duration: 0.3,

//             ease: "power2.in",
//           },

//           "<0.02",
//         )

//         .to(
//           ".slide-avatar img",

//           {
//             scale: 1.35,

//             duration: 0.3,

//             ease: "power2.in",
//           },

//           "<",
//         )

//         .to(
//           ".slide-author",

//           { y: -dir * 16, opacity: 0, duration: 0.2, ease: "power3.in" },

//           "<",
//         )

//         .to(
//           ".slide-counter-digit",

//           { y: -dir * 14, opacity: 0, duration: 0.25, ease: "power2.in" },

//           "<",
//         );
//     },

//     [total],
//   );

//   // Gentle right-to-left drift for the background shape
//   // useGSAP(() => {
//   //   if (!shapeRef.current) return;

//   //   gsap.fromTo(
//   //     shapeRef.current,
//   //     { x: 60 }, // start offset to the right
//   //     {
//   //       x: -60, // end offset to the left
//   //       duration: 12, // very slow, gentle
//   //       ease: "sine.inOut", // smooth acceleration + deceleration
//   //       yoyo: true, // reverses back to the right
//   //       repeat: -1, // loops forever
//   //     },
//   //   );
//   // }, []);
//   useGSAP(() => {
//     if (!shapeRef.current) return;

//     gsap.to(shapeRef.current, {
//       xPercent: -25,
//       duration: 70,
//       ease: "none",
//       repeat: -1,
//     });
//   }, []);

//   const handleNext = useCallback(() => requestChange(1), [requestChange]);

//   const handlePrev = useCallback(() => requestChange(-1), [requestChange]);

//   // Auto-advance every 4 seconds

//   useEffect(() => {
//     if (!fontsReady) return;

//     autoPlayRef.current = setTimeout(() => {
//       handleNext();
//     }, 4000);

//     return () => clearTimeout(autoPlayRef.current);
//   }, [currentIndex, fontsReady, handleNext]);

//   // Enter choreography — split the fresh quote into lines, mask each line,

//   // then reveal them one by one from behind the masks.

//   useGSAP(
//     () => {
//       if (!fontsReady || !quoteRef.current) return;

//       isAnimating.current = true;

//       const split = SplitText.create(quoteRef.current, {
//         type: "lines",

//         linesClass: "st-line",
//       });

//       splitRef.current = split;

//       // Wrap each line in its own overflow-hidden mask.

//       split.lines.forEach((line) => {
//         const mask = document.createElement("span");

//         mask.className = "st-mask";

//         line.parentNode.insertBefore(mask, line);

//         mask.appendChild(line);
//       });

//       linesRef.current = split.lines;

//       const tl = gsap.timeline({
//         defaults: { ease: "expo.out" }, // was power4.out → snappier, more authoritative

//         onComplete: () => {
//           isAnimating.current = false;
//         },
//       });

//       tl.fromTo(
//         ".slide-counter-digit",

//         { y: direction * 14, opacity: 0 },

//         { y: 0, opacity: 1, duration: 0.35 }, // was 0.4

//         0,
//       )

//         .fromTo(
//           split.lines,

//           { yPercent: direction * 115 },

//           {
//             yPercent: 0,

//             duration: 0.65, // was 1 → much quicker

//             stagger: {
//               each: 0.08,

//               from: direction > 0 ? "start" : "end",
//             },
//           },

//           0.05,
//         )

//         // .fromTo(

//         //   ".slide-author",

//         //   { y: direction * 20, opacity: 0 },

//         //   { y: 0, opacity: 1, duration: 0.5 },

//         //   0.3,

//         // );

//         .fromTo(
//           ".slide-avatar",

//           { scale: 0.12, borderRadius: "50%", opacity: 0 },

//           {
//             scale: 1,

//             borderRadius: "8px",

//             opacity: 1,

//             duration: 0.6,

//             ease: "expo.out",
//           },

//           0.05,
//         )

//         .fromTo(
//           ".slide-author",

//           { y: direction * 20, opacity: 0 },

//           { y: 0, opacity: 1, duration: 0.4 },

//           0.1,
//         );

//       return () => {
//         // React removes the old <p> on key change, so its split DOM is already

//         // gone. Just drop the reference so the next slide starts clean.

//         splitRef.current = null;

//         linesRef.current = [];
//       };
//     },

//     { dependencies: [currentIndex, fontsReady], scope: containerRef },
//   );

//   return (
//     <div className="overflow-hidden relative min-h-screen w-full flex items-center justify-center p-4 md:p-10 select-none">
//       <style>{`
//       .st-mask {
//         display: block;
//         overflow: hidden;
//         padding-bottom: 0.16em;
//         margin-bottom: -0.16em;
//       }
//       .slide-avatar {
//         will-change: transform, border-radius, opacity, filter;
//         transform-origin: center center;
//       }
//       .slide-avatar img {
//         will-change: transform;
//         transform-origin: center center;
//       }
//     `}</style>

//       {/* Background shape — sits behind the card */}
//       {/* <div
//         aria-hidden="true"
//         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] max-w-[1500px] pointer-events-none select-none overflow-hidden"
//         style={{ zIndex: 0 }}
//       >
//         <img
//           ref={shapeRef}
//           src={shape5}
//           alt=""
//           className="w-full h-auto pointer-events-none select-none"
//         />
//       </div> */}
//       <div
//         ref={shapeRef}
//         className="absolute top-1/2 -translate-y-1/2 left-0 flex w-max"
//       >
//         {[0, 1, 2, 3].map((i) => (
//           <img
//             key={i}
//             src={shape5}
//             alt=""
//             draggable={false}
//             className="block shrink-0 h-[40vh] w-auto"
//           />
//         ))}
//       </div>

//       {/* Main purple card */}
//       <div
//         ref={containerRef}
//         className="overflow-hidden relative w-full max-w-[1020px] min-h-[600px] md:min-h-[680px] flex flex-col  justify-start rounded-[36px] bg-[#140018] text-white py-16 px-8 md:py-20 md:px-14  overflow-hidden"
//       >
//         {/* Top navigation row */}
//         <div className="flex items-center gap-10 md:gap-14 mb-12 md:mb-16">
//           <div className="flex items-center gap-2">
//             <button
//               onClick={handlePrev}
//               aria-label="Previous Testimonial"
//               className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/20 text-white/80 transition-colors hover:border-white/70 hover:text-white active:scale-95 cursor-pointer"
//             >
//               <ArrowLeft className="h-4 w-4 stroke-[1.5]" />
//             </button>
//             <button
//               onClick={handleNext}
//               aria-label="Next Testimonial"
//               className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/20 text-white/80 transition-colors hover:border-white/70 hover:text-white active:scale-95 cursor-pointer"
//             >
//               <ArrowRight className="h-4 w-4 stroke-[1.5]" />
//             </button>
//           </div>

//           <div className="flex items-center gap-6 text-[15px] font-normal tracking-wide">
//             <div className="flex items-center text-white/50">
//               <span className="slide-counter-digit font-semibold text-white/90">
//                 {currentIndex + 1}
//               </span>
//               <span className="mx-1.5 text-white/35">/</span>
//               <span className="text-white/35">{total}</span>
//             </div>
//             <span className="text-white/45 text-[18px] md:text-[20px]">
//               What customers say
//             </span>
//           </div>
//         </div>

//         {/* Indented Content: Quote + Author right below it */}
//         <div className="pl-0 md:pl-[144px]">
//           {/* Quote */}
//           <div className="overflow-hidden">
//             <p
//               key={currentIndex}
//               ref={quoteRef}
//               className="text-[25px] sm:text-[28px] md:text-[34px] leading-[1.3] font-semibold text-neutral-100 tracking-[-0.03em] whitespace-pre-line max-w-[760px]"
//               style={{ visibility: fontsReady ? "visible" : "hidden" }}
//             >
//               {current.quote}
//             </p>
//           </div>

//           {/* Author Details — sits directly below the quote */}
//           {/* Adjust mt-6, mt-8, or mt-10 to get the exact vertical distance you want */}
//           <div className="mt-10 flex items-center gap-4">
//             <div className="slide-avatar h-14 w-14 rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 flex-shrink-0">
//               <img
//                 src={current.avatar}
//                 alt={current.name}
//                 className="h-full w-full object-cover"
//               />
//             </div>
//             <div className="slide-author flex flex-col justify-center">
//               <span className="text-[17px] font-semibold text-white tracking-tight leading-tight">
//                 {current.name}
//               </span>
//               <span className="text-[17px] font-semibold text-white/50 leading-normal">
//                 {current.role}
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     // <div>
//     //   <img src={shape5}/>
//     // </div>
//   );
// }
