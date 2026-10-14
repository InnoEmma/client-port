// import { useState, useRef } from "react";
// import { motion } from "framer-motion";
// import { ArrowUpRight } from "lucide-react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// export default function FramerHoverLink({ items = [] }) {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const containerRef = useRef(null);

//   // GSAP Scroll Entrance Animation
//   useGSAP(
//     () => {
//       gsap.from(".link-mask-inner", {
//         yPercent: 120,
//         opacity: 0,
//         duration: 1,
//         stagger: 0.12,
//         ease: "expo.out",
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top 80%",
//           toggleActions: "play none none reverse",
//           // markers:true
//         },
//       });
//     },
//     { scope: containerRef }
//   );

//   return (
//     <div className="pt-20 pb-60" ref={containerRef}>
//       <div
//         className="font-medium text-[28px] leading-9.25 space-y-3 -ml-6"
//         onMouseLeave={() => setHoveredIndex(null)}
//       >
//         {items.map((item, index) => {
//           const isHovered = hoveredIndex === index;

//           return (
//             <div key={item.number || index} className="overflow-hidden">
//               <a
//                 href={item.href || "#"}
//                 onMouseEnter={() => setHoveredIndex(index)}
//                 className="link-mask-inner relative flex items-center justify-between px-6 py-4 rounded-xl cursor-pointer select-none will-change-transform"
//               >
//                 {/* Gliding Pill (Fade + LayoutId without AnimatePresence collision) */}
//                 {isHovered && (
//                   <motion.div
//                     layoutId="gliding-pill"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{
//                       opacity: { duration: 0.15 },
//                       layout: {
//                         type: "spring",
//                         stiffness: 420,
//                         damping: 34,
//                         mass: 0.7,
//                       },
//                     }}
//                     className="absolute inset-0 bg-[#e8edfc] rounded-xl pointer-events-none"
//                   />
//                 )}

//                 {/* Staggered Elastic Text Shift */}
//                 <motion.div
//                   className="relative z-10 flex items-center"
//                   animate={{ x: isHovered ? 12 : 0 }}
//                   transition={{
//                     type: "spring",
//                     stiffness: 350,
//                     damping: 24,
//                     mass: 0.6,
//                   }}
//                 >
//                   <motion.span
//                     animate={{
//                       color: isHovered
//                         ? "rgba(0, 0, 0, 0.45)"
//                         : "rgba(225, 235, 252, 0.55)",
//                     }}
//                     transition={{ duration: 0.18 }}
//                     className="mr-3 select-none"
//                   >
//                     {item.number}
//                   </motion.span>

//                   <motion.span
//                     animate={{
//                       color: isHovered ? "#0a0a0a" : "rgba(225, 235, 252, 0.9)",
//                     }}
//                     transition={{ duration: 0.18 }}
//                   >
//                     {item.title}
//                   </motion.span>
//                 </motion.div>

//                 {/* Snappy Arrow Reveal */}
//                 <motion.span
//                   className="relative z-10 text-black flex items-center justify-center pointer-events-none"
//                   initial={false}
//                   animate={
//                     isHovered
//                       ? { opacity: 1, x: 0, y: 0, scale: 1 }
//                       : { opacity: 0, x: -8, y: 8, scale: 0.7 }
//                   }
//                   transition={{
//                     type: "spring",
//                     stiffness: 420,
//                     damping: 26,
//                   }}
//                 >
//                   <ArrowUpRight className="w-7 h-7" strokeWidth={2.2} />
//                 </motion.span>
//               </a>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

import { useLenis } from "lenis/react"; // or "@studio-freight/react-lenis"

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function FramerHoverLink({ items = [] }) {
  const lenis = useLenis();

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const containerRef = useRef(null);

  // GSAP Scroll Entrance Animation
  useGSAP(
    () => {
      gsap.from(".link-mask-inner", {
        yPercent: 120,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "expo.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <div className="pt-12 pb-24 md:pt-20 md:pb-60 w-full" ref={containerRef}>
      <div
        className="font-medium text-[20px] sm:text-[24px] md:text-[28px] leading-snug md:leading-[37px] space-y-2 md:space-y-3 -ml-3 md:-ml-6"
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {items.map((item, index) => {
          const isHovered = hoveredIndex === index;

          return (
            <div key={item.number || index} className="overflow-hidden">
              <a
                href={item.href || "#"}
                onMouseEnter={() => setHoveredIndex(index)}
                // Added gap-4 so text never touches the arrow area when wrapping
                className="link-mask-inner relative flex items-center justify-between gap-4 px-3 py-3 md:px-6 md:py-4 rounded-xl cursor-pointer select-none will-change-transform"
                onClick={(e) => {
                  if (item.href?.startsWith("#")) {
                    e.preventDefault();
                    lenis?.scrollTo(item.href, {
                      duration: 1.2,
                      easing: (t) =>
                        t < 0.5
                          ? 4 * t * t * t
                          : 1 - Math.pow(-2 * t + 2, 3) / 2,
                    });
                  }
                }}
              >
                {/* Gliding Pill */}
                {isHovered && (
                  <motion.div
                    layoutId="gliding-pill"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      opacity: { duration: 0.15 },
                      layout: {
                        type: "spring",
                        stiffness: 420,
                        damping: 34,
                        mass: 0.7,
                      },
                    }}
                    className="absolute inset-0 bg-[#e8edfc] rounded-xl pointer-events-none"
                  />
                )}

                {/* Staggered Elastic Text Shift */}
                <motion.div
                  // Changed from items-center to items-start so the number aligns with the FIRST line of text
                  className="relative z-10 flex items-start md:items-center text-left"
                  animate={{
                    x: isHovered ? (window.innerWidth < 768 ? 8 : 12) : 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 24,
                    mass: 0.6,
                  }}
                >
                  <motion.span
                    animate={{
                      color: isHovered
                        ? "rgba(0, 0, 0, 0.45)"
                        : "rgba(225, 235, 252, 0.55)",
                    }}
                    transition={{ duration: 0.18 }}
                    // Added flex-shrink-0 to prevent number from squishing, and mt-[2px] to visually align it perfectly with the top line
                    className="mr-3 md:mr-4 select-none flex-shrink-0 mt-[2px] md:mt-0 text-[18px] sm:text-[22px] md:text-[26px]"
                  >
                    {item.number}
                  </motion.span>

                  <motion.span
                    animate={{
                      color: isHovered ? "#0a0a0a" : "rgba(225, 235, 252, 0.9)",
                    }}
                    transition={{ duration: 0.18 }}
                    className="block"
                  >
                    {item.title}
                  </motion.span>
                </motion.div>

                {/* Snappy Arrow Reveal */}
                <motion.span
                  // Added flex-shrink-0 to guarantee the arrow always has space
                  className="relative z-10 text-black flex items-center justify-center pointer-events-none flex-shrink-0"
                  initial={false}
                  animate={
                    isHovered
                      ? { opacity: 1, x: 0, y: 0, scale: 1 }
                      : { opacity: 0, x: -8, y: 8, scale: 0.7 }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 420,
                    damping: 26,
                  }}
                >
                  <ArrowUpRight
                    className="w-5 h-5 md:w-7 md:h-7"
                    strokeWidth={2.2}
                  />
                </motion.span>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
