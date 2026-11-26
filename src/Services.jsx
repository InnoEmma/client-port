// import shape1 from "../extra/shape1.svg";
// import shape2 from "../extra/shape2.svg";
// import shape3 from "../extra/shape3.svg";
// import shape4 from "../extra/shape4.svg";

// function Services() {
//   return (
//     <div>
//       <header className="bg-custom-blue m-4 rounded-3xl ">
//         <div className="py-20 px-10 flex gap-80 mb-40">
//           <div className="flex flex-col justify-between">
//             <div>
//               <p className="text-[20px] leading-7 text-plum-gray">
//                 Our Services
//               </p>
//             </div>
//             <div className="bg-white py-3 px-7 rounded-xl text-[18px] leading-4.5 font-medium">
//               <button>Contact me</button>
//             </div>
//           </div>
//           <div className="max-w-3xl">
//             <div>
//               <p className="text-[46px] leading-12 text-midnight font-semibold pb-5">
//                 What I do
//               </p>
//               <div className="mb-20">
//                 <p className="font-medium text-[20px] leading-7.5 text-plum-gray">
//                   The entire process. Or one part, if you already have the rest
//                   in
//                 </p>
//                 <span className="font-medium text-[20px] leading-7.5 text-plum-gray">
//                   place.
//                 </span>
//               </div>
//             </div>
//             <div className="grid grid-cols-2 gap-6 mt-8">
//               {" "}
//               {/* here */}
//               <div className="bg-[#f4f8fe] p-7 rounded-2xl">
//                 <img className="h-20 w-20 rounded-2xl pb-5" src={shape1} />
//                 <p className="text-[28px] font-semibold leading-8 text-midnight pb-4">
//                   Virtual assistance
//                 </p>
//                 <p className="text-[17px] font-medium leading-7 text-plum-gray">
//                   I handle the inbox, calendar, admin, and follow-ups that drain
//                   your day, so you can focus on growth. Your proactive right
//                   hand, keeping things organized behind the scenes.
//                 </p>
//               </div>
//               <div className="bg-[#f4f8fe] p-7 rounded-2xl">
//                 <img className="h-20 w-20 rounded-2xl pb-5" src={shape2} />

//                 <p className="text-[28px] font-semibold leading-8 text-midnight pb-4">
//                   Product Management
//                 </p>
//                 <p className="text-[17px] font-medium leading-7 text-plum-gray">
//                   I answer the question most companies beat around the bush
//                   about: why build this, not that. Then I turn that clarity into
//                   a roadmap your team can actually ship.
//                 </p>
//               </div>
//               <div className="bg-[#f4f8fe] p-7 rounded-2xl">
//                 <div className="rounded-3xl">
//                   <img className="h-20 w-20 rounded-3xl pb-5" src={shape3} />
//                 </div>

//                 <p className="text-[28px] font-semibold leading-8 text-midnight pb-4">
//                   Operation Managment
//                 </p>
//                 <p className="text-[17px] font-medium leading-7 text-plum-gray">
//                   I filter the noise, manage the details, and keep you focused
//                   on what only you can do. Your discreet partner in leading
//                   well.
//                 </p>
//               </div>
//               <div className="bg-[#f4f8fe] p-7 rounded-2xl">
//                 <img className="h-19 w-19 rounded-3xl pb-5" src={shape4} />

//                 <p className="text-[28px] font-semibold leading-8 text-midnight pb-4">
//                   Executive Support
//                 </p>
//                 <p className="text-[17px] font-medium leading-7 text-plum-gray">
//                   I've run the calendars of people who don't have time to think.
//                   That means deciding what reaches you, sitting in rooms you
//                   can't be in, and remembering what everyone else forgot.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// }

// export default Services;

// import shape1 from "../extra/shape1.svg";
// import shape2 from "../extra/shape2.svg";
// import shape3 from "../extra/shape3.svg";
// import shape4 from "../extra/shape4.svg";

// function Services() {
//   return (
//     <div>
//       <header className="bg-custom-blue m-4 rounded-3xl">
//         {/* Restored the massive gap on large screens (xl:gap-80), scales safely down for smaller devices */}
//         <div className="py-10 px-6 md:py-20 md:px-10 flex flex-col lg:flex-row gap-12 lg:gap-32 xl:gap-80 mb-20 md:mb-40">
//           {/* Restored lg:justify-between to push the button all the way down on desktop */}
//           <div className="flex flex-col gap-10 lg:gap-0 lg:justify-between shrink-0">
//             <div className="mr-50">
//               <p className="text-[18px] md:text-[20px] font-medium leading-7 text-plum-gray">
//                 <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
//                 My services
//               </p>
//             </div>
//             <div className="bg-white py-3 px-7 rounded-xl text-[16px] md:text-[18px] leading-4.5 font-medium self-start inline-block hover:bg-gray-50 transition-colors">
//               <button>Contact me</button>
//             </div>
//           </div>

//           {/* Right Side: Content & Cards */}
//           <div className="w-full lg:max-w-3xl">
//             <div>
//               <p className="text-3xl md:text-[46px] md:leading-[54px] text-midnight font-semibold pb-5">
//                 What I do
//               </p>
//               <div className="mb-10 md:mb-20">
//                 <p className="font-medium text-lg md:text-[20px] leading-7 md:leading-7.5 text-plum-gray">
//                   The entire process. Or one part, if you already have the rest
//                   in place.
//                 </p>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
//               <div className="bg-[#f4f8fe] p-6 md:p-7 rounded-2xl">
//                 <img
//                   className="h-16 w-16 md:h-20 md:w-20 rounded-2xl pb-4 md:pb-5"
//                   src={shape1}
//                   alt="Virtual Assistance"
//                 />
//                 <p className="text-2xl md:text-[28px] font-semibold md:leading-8 text-midnight pb-3 md:pb-4">
//                   Virtual assistance
//                 </p>
//                 <p className="text-base md:text-[17px] font-medium leading-7 text-plum-gray">
//                   I handle the inbox, calendar, admin, and follow-ups that drain
//                   your day, so you can focus on growth. Your proactive right
//                   hand, keeping things organized behind the scenes.
//                 </p>
//               </div>

//               <div className="bg-[#f4f8fe] p-6 md:p-7 rounded-2xl">
//                 <img
//                   className="h-16 w-16 md:h-20 md:w-20 rounded-2xl pb-4 md:pb-5"
//                   src={shape2}
//                   alt="Product Management"
//                 />
//                 <p className="text-2xl md:text-[28px] font-semibold md:leading-8 text-midnight pb-3 md:pb-4">
//                   Product Management
//                 </p>
//                 <p className="text-base md:text-[17px] font-medium leading-7 text-plum-gray">
//                   I answer the question most companies beat around the bush
//                   about: why build this, not that. Then I turn that clarity into
//                   a roadmap your team can actually ship.
//                 </p>
//               </div>

//               <div className="bg-[#f4f8fe] p-6 md:p-7 rounded-2xl">
//                 <div className="rounded-3xl">
//                   <img
//                     className="h-16 w-16 md:h-20 md:w-20 rounded-3xl pb-4 md:pb-5"
//                     src={shape3}
//                     alt="Operation Management"
//                   />
//                 </div>
//                 <p className="text-2xl md:text-[28px] font-semibold md:leading-8 text-midnight pb-3 md:pb-4">
//                   Operation Management
//                 </p>
//                 <p className="text-base md:text-[17px] font-medium leading-7 text-plum-gray">
//                   I filter the noise, manage the details, and keep you focused
//                   on what only you can do. Your discreet partner in leading
//                   well.
//                 </p>
//               </div>

//               <div className="bg-[#f4f8fe] p-6 md:p-7 rounded-2xl">
//                 <img
//                   className="h-16 w-16 md:h-19 md:w-19 rounded-3xl pb-4 md:pb-5"
//                   src={shape4}
//                   alt="Executive Support"
//                 />
//                 <p className="text-2xl md:text-[28px] font-semibold md:leading-8 text-midnight pb-3 md:pb-4">
//                   Executive Support
//                 </p>
//                 <p className="text-base md:text-[17px] font-medium leading-7 text-plum-gray">
//                   I've run the calendars of people who don't have time to think.
//                   That means deciding what reaches you, sitting in rooms you
//                   can't be in, and remembering what everyone else forgot.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// }

// export default Services;





import shape1 from "../extra/shape1.svg";
import shape2 from "../extra/shape2.svg";
import shape3 from "../extra/shape3.svg";
import shape4 from "../extra/shape4.svg";

function Services({scrollToContact}) {
  return (
    <div id="services">
      <header className="bg-custom-blue m-4 rounded-3xl">
        <div className="py-10 px-6 md:py-20 md:px-10 flex flex-col lg:flex-row gap-12 lg:gap-32 xl:gap-70 mb-20 md:mb-40">
          {/* Left Side: Header & Desktop Button */}
          <div className="flex flex-col lg:justify-between shrink-0">
            {/* Added flex and items-center so the dot aligns nicely with the text */}
            <div className="mr-10 ">
              {" "}
              {/* lg:mr-50 */}
              <p className="flex items-center gap-2 text-[18px] md:text-[20px] font-medium leading-7 text-plum-gray">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-neutral-400" />
                My services
              </p>
            </div>

            {/* DESKTOP BUTTON: Hidden on mobile (hidden lg:inline-block) */}
            <div className="hidden lg:inline-block bg-white py-3 px-7 rounded-xl text-[16px] md:text-[18px] leading-4.5 font-medium self-start hover:bg-gray-50 transition-colors cursor-pointer">
              <button className="cursor-pointer" onClick={scrollToContact}>Contact me</button>
            </div>
          </div>

          {/* Right Side: Content & Cards */}
          <div className="w-full lg:max-w-3xl">
            <div>
              <p className="text-3xl md:text-[46px] md:leading-[54px] text-midnight font-semibold pb-5">
                What I do
              </p>
              <div className="mb-10 md:mb-20">
                <p className="font-medium text-lg md:text-[20px] leading-7 md:leading-7.5 text-plum-gray">
                  The entire process. Or one part, if you already have the rest
                  in place.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-[#f4f8fe] p-6 md:p-7 rounded-2xl">
                <img
                  className="h-16 w-16 md:h-20 md:w-20 rounded-2xl pb-4 md:pb-5"
                  src={shape1}
                  alt="Virtual Assistance"
                />
                <p className="text-2xl md:text-[28px] font-semibold md:leading-8 text-midnight pb-3 md:pb-4">
                  Virtual assistance
                </p>
                <p className="text-base md:text-[17px] font-medium leading-7 text-plum-gray">
                  I handle the inbox, calendar, admin, and follow-ups that drain
                  your day, so you can focus on growth. Your proactive right
                  hand, keeping things organized behind the scenes.
                </p>
              </div>

              <div className="bg-[#f4f8fe] p-6 md:p-7 rounded-2xl">
                <img
                  className="h-16 w-16 md:h-20 md:w-20 rounded-2xl pb-4 md:pb-5"
                  src={shape2}
                  alt="Product Management"
                />
                <p className="text-2xl md:text-[28px] font-semibold md:leading-8 text-midnight pb-3 md:pb-4">
                  Product Management
                </p>
                <p className="text-base md:text-[17px] font-medium leading-7 text-plum-gray">
                  I answer the question most companies beat around the bush
                  about: why build this, not that. Then I turn that clarity into
                  a roadmap your team can actually ship.
                </p>
              </div>

              <div className="bg-[#f4f8fe] p-6 md:p-7 rounded-2xl">
                <div className="rounded-3xl">
                  <img
                    className="h-16 w-16 md:h-20 md:w-20 rounded-3xl pb-4 md:pb-5"
                    src={shape3}
                    alt="Operation Management"
                  />
                </div>
                <p className="text-2xl md:text-[28px] font-semibold md:leading-8 text-midnight pb-3 md:pb-4">
                  Operation Management
                </p>
                <p className="text-base md:text-[17px] font-medium leading-7 text-plum-gray">
                  I filter the noise, manage the details, and keep you focused
                  on what only you can do. Your discreet partner in leading
                  well.
                </p>
              </div>

              <div className="bg-[#f4f8fe] p-6 md:p-7 rounded-2xl">
                <img
                  className="h-16 w-16 md:h-19 md:w-19 rounded-3xl pb-4 md:pb-5"
                  src={shape4}
                  alt="Executive Support"
                />
                <p className="text-2xl md:text-[28px] font-semibold md:leading-8 text-midnight pb-3 md:pb-4">
                  Executive Support
                </p>
                <p className="text-base md:text-[17px] font-medium leading-7 text-plum-gray">
                  I've run the calendars of people who don't have time to think.
                  That means deciding what reaches you, sitting in rooms you
                  can't be in, and remembering what everyone else forgot.
                </p>
              </div>
            </div>

            {/* MOBILE BUTTON: Shows below the cards on mobile/tablet (lg:hidden) */}
            <div className="mt-8 lg:hidden flex justify-start">
              <div className="bg-white py-3 px-7 rounded-xl text-[16px] md:text-[18px] leading-4.5 font-medium inline-block hover:bg-gray-50 transition-colors">
                <button>Contact me</button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Services;
