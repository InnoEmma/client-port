// import { useRef, useState } from "react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import { useGSAP } from "@gsap/react";
// gsap.registerPlugin(ScrollTrigger);
// import gsap from "gsap";

// const faqs = [
//   {
//     id: 1,
//     question: "What exactly do you handle?",
//     answer:
//       "I take over the operational and administrative weight of your business. This includes inbox and calendar management, streamlining workflows, managing follow-ups, and acting as your right hand to filter the noise. From executive support to full backend operations, it falls under my scope.",
//   },
//   {
//     id: 2,
//     question: "How do we start working together?",
//     answer:
//       "It starts with a brief conversation about where your business is right now and where it’s stuck. If we're a good fit, I conduct a deep-dive audit of your current workflows, identify the bottlenecks, and present a tailored plan to streamline your operations",
//   },
//   {
//     id: 3,
//     question: " Do you work full-time or part-time?",
//     answer:
//       "I work on both retainer and project-based models. Whether you need a few hours a day to clear your inbox or a dedicated partner to run your operations, we can structure the engagement based on your current capacity and growth stage.",
//   },
//   {
//     id: 4,
//     question: "How do you handle sensitive information?",
//     answer:
//       "With absolute discretion. I operate under strict NDAs and use secure systems for all executive communications, financial details, and private data. Your business and personal affairs stay completely private.",
//   },
// ];

// function HandyToKnow() {
//   const [openIndex, setOpenIndex] = useState(null);
//   const containerRef = useRef(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   useGSAP(() => {
//     gsap.to(containerRef.current, {
//       scrollTrigger: {
//         trigger: ".hold",
//         // markers: true,
//         start: "top 27%",
//         end: "bottom 54%",
//         pin: true,
//       },
//     });
//   }, {});

//   // return (
//   //   <section className="w-full text-neutral-900 py-16 px-6 md:px-12 ">
//   //     <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-start">
//   //       {/* Left Column */}
//   //       <div className="lg:col-span-4 flex flex-col justify-between">
//   //         <div>
//   //           {/* Tag / Category */}
//   //           <div className="flex items-center gap-2 text-[20px] text-plum-gray  mb-6 font-medium">
//   //             <span className="inline-block w-1.5 h-1.5 rounded-full bg-neutral-900" />
//   //             <span>To ask</span>
//   //           </div>

//   //           {/* Main Title */}
//   //           <h2 className="text-[55px] sm:text-6xl font-bold tracking-tight text-neutral-950 leading-[1.08] mb-12">
//   //             Handy to
//   //             <br />
//   //             to know
//   //           </h2>
//   //         </div>

//   //         {/* Subtext with Contact Link */}
//   //         <p className="text-[20px] font-medium text-plum-gray leading-relaxed max-w-xs">
//   //           Is your question not listed? We usually answer the same day.{" "}
//   //           <a
//   //             href="#contact"
//   //             className="text-neutral-900 underline underline-offset-2 decoration-1 hover:text-neutral-600 transition-colors"
//   //           >
//   //             Contact us.
//   //           </a>
//   //         </p>
//   //       </div>

//   //       {/* Right Column (Accordion List) */}
//   //       <div className="lg:col-span-8 divide-y divide-neutral-200 border-t border-b border-neutral-200">
//   //         {faqs.map((faq, index) => {
//   //           const isOpen = openIndex === index;
//   //           return (
//   //             <div key={faq.id} className="py-6 sm:py-8 transition-colors">
//   //               <button
//   //                 type="button"
//   //                 onClick={() => toggleFAQ(index)}
//   //                 className="w-full flex items-center justify-between gap-6 text-left group focus:outline-none"
//   //                 aria-expanded={isOpen}
//   //               >
//   //                 <span className="text-2xl sm:text-3xl lg:text-[2.15rem] font-medium tracking-tight text-neutral-900 group-hover:text-neutral-600 transition-colors leading-snug">
//   //                   {faq.question}
//   //                 </span>

//   //                 {/* Plus Icon with smooth rotation */}
//   //                 <span className="shrink-0 text-neutral-800 transition-transform duration-300">
//   //                   <svg
//   //                     className={`w-7 h-7 stroke-[1.25] transition-transform duration-300 ${
//   //                       isOpen ? "rotate-45" : "rotate-0"
//   //                     }`}
//   //                     fill="none"
//   //                     viewBox="0 0 24 24"
//   //                     stroke="currentColor"
//   //                   >
//   //                     <path
//   //                       strokeLinecap="round"
//   //                       strokeLinejoin="round"
//   //                       d="M12 4.5v15m7.5-7.5h-15"
//   //                     />
//   //                   </svg>
//   //                 </span>
//   //               </button>

//   //               {/* Expandable answer */}
//   //               <div
//   //                 className={`grid transition-all duration-300 ease-in-out ${
//   //                   isOpen
//   //                     ? "grid-rows-[1fr] opacity-100 mt-4"
//   //                     : "grid-rows-[0fr] opacity-0"
//   //                 }`}
//   //               >
//   //                 <div className="overflow-hidden">
//   //                   <p className="text-base text-neutral-600 leading-relaxed max-w-2xl pr-8">
//   //                     {faq.answer}
//   //                   </p>
//   //                 </div>
//   //               </div>
//   //             </div>
//   //           );
//   //         })}
//   //       </div>
//   //     </div>
//   //   </section>
//   // );
//   return (
//     <section className="w-full text-neutral-900 py-16 px-6 md:px-12 mt-36 ">
//       <div
//         ref={containerRef}
//         className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-start"
//       >
//         {/* Left Column */}
//         <div className="hold  lg:col-span-4 flex flex-col justify-between">
//           <div>
//             {/* Tag / Category */}
//             <div className="flex items-center gap-2 text-[20px] text-plum-gray mb-6 font-medium">
//               <span className="inline-block w-1.5 h-1.5 rounded-full bg-neutral-900" />
//               <span>To ask</span>
//             </div>

//             {/* Main Title */}
//             <h2 className="text-[55px] sm:text-6xl font-bold tracking-tight text-neutral-950 leading-[1.08] mb-6">
//               Handy to
//               <br />
//               to know
//             </h2>
//           </div>

//           {/* Subtext with Contact Link */}
//           <p className="text-[20px] font-medium text-plum-gray leading-relaxed max-w-xs">
//             Is your question not listed? We usually answer the same day.{" "}
//             <a
//               href="#contact"
//               className="text-neutral-900 underline underline-offset-2 decoration-1 hover:text-neutral-600 transition-colors"
//             >
//               Contact me.
//             </a>
//           </p>
//         </div>

//         {/* Right Column (Accordion List) -> Added group/list here */}
//         {/* Right Column (Accordion List) */}
//         <div className="lg:col-span-8 divide-y divide-neutral-200 border-t border-b border-neutral-200 group/list cursor-pointer">
//           {faqs.map((faq, index) => {
//             const isOpen = openIndex === index;
//             return (
//               /* APPLIED HERE TO THE WHOLE DIV: default black -> parent hover: plum-gray -> row hover: black */
//               <div
//                 key={faq.id}
//                 className="py-6 sm:py-8 transition-colors duration-200 text-black group-hover/list:text-plum-gray hover:!text-black"
//               >
//                 <button
//                   type="button"
//                   onClick={() => toggleFAQ(index)}
//                   className="w-full flex items-center justify-between gap-6 text-left group focus:outline-none"
//                   aria-expanded={isOpen}
//                 >
//                   {/* Inherits color directly from the parent row */}
//                   <span className="text-2xl sm:text-3xl lg:text-[2.15rem] font-medium tracking-tight leading-snug">
//                     {faq.question}
//                   </span>

//                   {/* Plus Icon: inherits color and keeps rotation */}
//                   <span className="shrink-0 transition-transform duration-300">
//                     <svg
//                       className={`w-7 h-7 stroke-[1.25] transition-transform duration-300 ${
//                         isOpen ? "rotate-45" : "rotate-0"
//                       }`}
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M12 4.5v15m7.5-7.5h-15"
//                       />
//                     </svg>
//                   </span>
//                 </button>

//                 {/* Expandable answer */}
//                 <div
//                   className={`grid transition-all duration-300 ease-in-out ${
//                     isOpen
//                       ? "grid-rows-[1fr] opacity-100 mt-4"
//                       : "grid-rows-[0fr] opacity-0"
//                   }`}
//                 >
//                   <div className="overflow-hidden">
//                     <p className="text-base text-gray-800 font-medium max-w-2xl pr-8 text-[19px] leading-7 ">
//                       {faq.answer}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default HandyToKnow;


import { useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    id: 1,
    question: "What exactly do you handle?",
    answer:
      "I take over the operational and administrative weight of your business. This includes inbox and calendar management, streamlining workflows, managing follow-ups, and acting as your right hand to filter the noise. From executive support to full backend operations, it falls under my scope.",
  },
  {
    id: 2,
    question: "How do we start working together?",
    answer:
      "It starts with a brief conversation about where your business is right now and where it’s stuck. If we're a good fit, I conduct a deep-dive audit of your current workflows, identify the bottlenecks, and present a tailored plan to streamline your operations",
  },
  {
    id: 3,
    question: " Do you work full-time or part-time?",
    answer:
      "I work on both retainer and project-based models. Whether you need a few hours a day to clear your inbox or a dedicated partner to run your operations, we can structure the engagement based on your current capacity and growth stage.",
  },
  {
    id: 4,
    question: "How do you handle sensitive information?",
    answer:
      "With absolute discretion. I operate under strict NDAs and use secure systems for all executive communications, financial details, and private data. Your business and personal affairs stay completely private.",
  },
];

function HandyToKnow() {
  const [openIndex, setOpenIndex] = useState(null);
  const containerRef = useRef(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useGSAP(
    () => {
      // Initialize GSAP matchMedia
      let mm = gsap.matchMedia();

      // Only run this animation on screens 1024px and wider (Tailwind's 'lg' breakpoint)
      mm.add("(min-width: 1024px)", () => {
        gsap.to(containerRef.current, {
          scrollTrigger: {
            trigger: ".hold",
            // markers: true,
            start: "top 27%",
            end: "bottom 54%",
            pin: true,
          },
        });
      });
      
      // useGSAP automatically cleans up the matchMedia on unmount!
    },
    { scope: containerRef } // Added scope to keep GSAP context clean
  );

  return (
    <section className="w-full text-neutral-900 py-16 px-6 md:px-12 mt-36 ">
      <div
        ref={containerRef}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-start"
      >
        {/* Left Column */}
        <div className="hold lg:col-span-4 flex flex-col justify-between">
          <div>
            {/* Tag / Category */}
            <div className="flex items-center gap-2 text-[20px] text-plum-gray mb-6 font-medium">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-neutral-900" />
              <span>To ask</span>
            </div>

            {/* Main Title */}
            <h2 className="text-[55px] sm:text-6xl font-bold tracking-tight text-neutral-950 leading-[1.08] mb-6">
              Handy to
              <br />
              to know
            </h2>
          </div>

          {/* Subtext with Contact Link */}
          <p className="text-[20px] font-medium text-plum-gray leading-relaxed max-w-xs">
            Is your question not listed? We usually answer the same day.{" "}
            <a
              href="#contact"
              className="text-neutral-900 underline underline-offset-2 decoration-1 hover:text-neutral-600 transition-colors"
            >
              Contact me.
            </a>
          </p>
        </div>

        {/* Right Column (Accordion List) */}
        <div className="lg:col-span-8 divide-y divide-neutral-200 border-t border-b border-neutral-200 group/list cursor-pointer">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className="py-6 sm:py-8 transition-colors duration-200 text-black group-hover/list:text-plum-gray hover:!text-black"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between gap-6 text-left group focus:outline-none"
                  aria-expanded={isOpen}
                >
                  {/* Inherits color directly from the parent row */}
                  <span className="text-2xl sm:text-3xl lg:text-[2.15rem] font-medium tracking-tight leading-snug">
                    {faq.question}
                  </span>

                  {/* Plus Icon: inherits color and keeps rotation */}
                  <span className="shrink-0 transition-transform duration-300">
                    <svg
                      className={`w-7 h-7 stroke-[1.25] transition-transform duration-300 ${
                        isOpen ? "rotate-45" : "rotate-0"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </span>
                </button>

                {/* Expandable answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 mt-4"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-base text-gray-800 font-medium max-w-2xl pr-8 text-[19px] leading-7 ">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HandyToKnow;