// import asa from "../extra/asa.mp4";
// import Click from "../extra/Click.mp4";
// import radom from "../extra/radom.jfif";
// import me from '../extra/me.jfif'

// function LoopingVideo({ speed = 1.5, src, className = "" }) {
//   return (
//     <video
//       className={`w-full h-full object-contain rounded-2xl ${className}`}
//       src={src}
//       autoPlay
//       loop
//       muted
//       playsInline
//       onLoadedMetadata={(e) => {
//         e.currentTarget.playbackRate = speed;
//         e.currentTarget.defaultPlaybackRate = speed;
//       }}
//     />
//   );
// }

// function Works() {
//   return (
//     <div className="w-full">
//       <div className="max-w-full mx-auto px-6 md:px-6 my-24 md:my-40">
//         <div>
//           <h2 className="text-midnight text-[38px] md:text-[44px] font-semibold leading-tight">
//             Selected Works
//           </h2>
//           <p className="font-medium text-[18px] md:text-[20px] leading-7 text-plum-gray flex flex-col mt-6">
//             <span>Processes from positioning to launch, from hospitality</span>
//             <span>to tech. Brand strategy, identity, and websites.</span>
//           </p>
//         </div>

//         {/* Asymmetrical Staggered Grid */}
//         <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-16 md:gap-y-28 items-start">
//           {/* Card 1: Left - Narrower & Taller (5 cols, pushed down for staggered start) */}
//           <div className="md:col-span-5 md:mt-20 group cursor-pointer">
//             <div className="w-full aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-100 shadow-sm">
//               <img
//                 src={me}
//                 alt="Product management"
//                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//               />
//             </div>
//             <div className="mt-5 space-y-2">
//               <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[14px]  font-semibold  border-gray-500 border text-neutral-600 rounded-full">
//                 <span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span>
//                 Product Management
//               </span>
//               <h3 className="text-xl md:text-2xl font-semibold text-midnight leading-snug">
//                 End-to-end ops + product support during a major launch
//               </h3>
//             </div>
//           </div>

//           {/* Card 2: Right - Wider & Fatter (7 cols, starts right at top) */}
//           <div className="md:col-span-7 group cursor-pointer">
//             <div className="relative w-full aspect-video overflow-hidden rounded-2xl bg-neutral-900 shadow-sm">
//               <LoopingVideo
//                 src={Click}
//                 speed={1.2}
//                 className="transition-transform duration-500 group-hover:scale-105"
//               />
//               <div className="pointer-events-none absolute bottom-3 right-3 z-10 h-9 w-35 rounded bg-white/75 backdrop-blur-sm" />
//             </div>

//             <div className="mt-5 space-y-2">
//               <span className="inline-flex items-center rounded-full gap-1.5 px-3 py-1 text-[14px]  font-semibold  border-gray-500 border text-neutral-600">
//                 <span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span>
//                 Operation Management
//               </span>
//               <h3 className="text-xl md:text-2xl font-semibold text-midnight leading-snug">
//                 Streamlined workflows, managed cross-functional teams, and drove
//                 operational efficiency at Mopel Technology
//               </h3>
//             </div>
//           </div>

//           {/* Card 3: Left - Flips to Wider (7 cols) */}

//           <div className="md:col-span-7 group cursor-pointer">
//             <div className="w-full aspect-video overflow-hidden rounded-2xl bg-neutral-900 shadow-sm">
//               <LoopingVideo
//                 src={asa}
//                 speed={1.7}
//                 className="transition-transform duration-500 group-hover:scale-105"
//               />
//             </div>
//             <div className="mt-5 space-y-2">
//               <span className="inline-flex items-center rounded-full gap-1.5 px-3 py-1 text-[14px]  font-semibold  border-gray-500 border text-neutral-600">
//                 <span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span>
//                 Virtual assistance
//               </span>
//               <h3 className="text-xl md:text-2xl font-semibold text-midnight leading-snug">
//                 Resolved customer inquiries, tracked transactions, and supported
//                 seamless remote operations at Proxchange
//               </h3>
//             </div>
//           </div>

//           {/* Card 4: Right - raised to the marked + position */}
//           <div className="md:col-span-5 md:-mt-74 group cursor-pointer">
//             <div className="w-full aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-100 shadow-sm">
//               <img
//                 src={radom}
//                 alt="Certifications"
//                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//               />
//               <div className="pointer-events-none absolute inset-0 bg-gray-100/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
//             </div>
//             <div className="mt-5 space-y-2">
//               <span className="inline-flex items-center rounded-full gap-1.5 px-3 py-1 text-[14px]  font-semibold  border-gray-500 border text-neutral-600">
//                 <span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span>
//                 Certifications
//               </span>
//               <h3 className="text-xl md:text-2xl font-semibold text-midnight leading-snug">
//                 My certifications &amp; credentials
//               </h3>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Works;

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import asa from "../extra/asa-compressed.mp4";
import Click from "../extra/Click-compressed.mp4";
// import radom from "../extra/radom.jfif";
import me from "../extra/me.jfif";
import cert from "../extra/cert.png";

gsap.registerPlugin(ScrollTrigger);

function LoopingVideo({ speed = 1.5, src, className = "" }) {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
      videoRef.current.defaultPlaybackRate = speed;
    }
  }, [speed, isVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" },
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      className={`w-full h-full object-contain rounded-2xl ${className}`}
      src={isVisible ? src : undefined}
      preload="none"
      autoPlay
      loop
      muted
      playsInline
    />
  );
}

function Works() {
  const container = useRef(null);

  useGSAP(
    () => {
      // Timeline for the heading and paragraph sequenced separately
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".works-header",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // 1. "Selected Works" title animates first
      headerTl.from(".works-title", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // 2. Subtitle / paragraph animates separately right after
      headerTl.from(
        ".works-desc",
        {
          y: 35,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5", // Slight overlap so it feels natural, not disjointed
      );

      // 3. Individual cards animate up as you scroll down to them
      const cards = gsap.utils.toArray(".work-card");
      cards.forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      });
    },
    { scope: container },
  );

  return (
    <section id="#selected-exp" ref={container} className="w-full">
      <div className="max-w-full mx-auto px-3 md:px-6  my-24 md:my-40">
        <div className="works-header">
          <h2 className="works-title text-midnight text-3xl md:text-[44px] font-semibold leading-tight">
            Selected experience
          </h2>
          <p className="works-desc font-medium text-base md:text-[20px] leading-relaxed md:leading-7 text-plum-gray md:flex md:flex-col mt-6">
            {/* <span>Processes from positioning to launch, from hospitality</span>
            <span>to tech. Brand strategy, identity, and websites.</span> */}
            {/* From operations to major launches, from customer to executive
            support. Workflows, coordination, and the details that keep
            businesses moving. */}
            <span>
              From daily operations to launches, from customers to
              executives.{" "}
            </span>
            <span>
              Workflows, coordination, the details keep businesses moving.
            </span>
          </p>
        </div>

        {/* Asymmetrical Staggered Grid */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-16 md:gap-y-28 items-start">
          {/* Card 1: Left - Narrower & Taller */}
          <article className="work-card md:col-span-5 md:mt-20 group cursor-pointer">
            <div className="w-full aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-100 shadow-sm">
              <img
                src={me}
                alt="Product management showcase"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-5 space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 md:text-[14px] text-[12px] font-semibold border-gray-500 border text-neutral-600 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                About me
              </span>
              <h3 className="text-xl md:text-2xl font-semibold text-midnight leading-snug">
                The person behind the work
              </h3>
            </div>
          </article>

          {/* Card 2: Right - Wider */}
          <article className="work-card md:col-span-7 group cursor-pointer">
            <div className="relative w-full aspect-video overflow-hidden rounded-2xl bg-neutral-900 shadow-sm">
              <LoopingVideo
                src={Click}
                speed={1.2}
                className="transition-transform duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute bottom-3 right-3 z-10 h-9 w-35 rounded bg-white/75 backdrop-blur-sm" />
            </div>
            <div className="mt-5 space-y-2">
              <span className="inline-flex items-center rounded-full gap-1.5 px-3 py-1 md:text-[14px] text-[12px] font-semibold border-gray-500 border text-neutral-600">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                {/* Operation Management */}
                Workflow Support
              </span>
              <h3 className="text-xl md:text-2xl font-semibold text-midnight leading-snug">
                {/* Streamlined workflows, managed cross-functional teams, and drove
                operational efficiency at Mopel Technology */}
                {/* Supported lead generation and cross-functional workflows to
                improve daily operations at Mopel Technology */}
                Coordinated leads, streamlined workflows, supported daily
                operations that kept Mopel Technology moving.
              </h3>
            </div>
          </article>

          {/* Card 3: Left - Wider */}
          <article className="work-card md:col-span-7 group cursor-pointer">
            <div className="w-full aspect-video overflow-hidden rounded-2xl bg-neutral-900 shadow-sm">
              <LoopingVideo
                src={asa}
                speed={1.7}
                className="transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-5 space-y-2">
              <span className="inline-flex items-center rounded-full gap-1.5 px-3 py-1 md:text-[14px] text-[12px] font-semibold border-gray-500 border text-neutral-600">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                {/* Virtual assistance */}
                Customer Operations
              </span>
              <h3 className="text-xl md:text-2xl font-semibold text-midnight leading-snug">
                Resolved customer inquiries, tracked transactions, and supported
                seamless remote operations at Proxchange
              </h3>
            </div>
          </article>

          {/* Card 4: Right - Narrower */}
          <article className="work-card md:col-span-5 md:-mt-74 group cursor-pointer">
            <div className="w-full aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-100 shadow-sm">
              <img
                src={cert}
                alt="Certifications and credentials showcase"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gray-100/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
            <div className="mt-5 space-y-2">
              <span className="inline-flex items-center rounded-full gap-1.5 px-3 py-1 md:text-[14px] text-[12px] font-semibold border-gray-500 border text-neutral-600">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                Certifications
              </span>
              <h3 className="text-xl md:text-2xl font-semibold text-midnight leading-snug">
                My certifications &amp; credentials
              </h3>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Works;
