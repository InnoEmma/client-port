// import {
//   SiAsana,
//   SiCalendly,
//   SiCanva,
//   SiClickup,
//   SiGoogle,
//   SiNotion,
//   SiOpenai,
//   SiSlack,
// } from "react-icons/si";

// const brands = [
//   { name: "ClickUp", Icon: SiClickup },
//   { name: "Notion", Icon: SiNotion },
//   { name: "Slack", Icon: SiSlack },
//   { name: "Asana", Icon: SiAsana },
//   { name: "Google Workspace", Icon: SiGoogle },
//   { name: "Calendly", Icon: SiCalendly },
//   { name: "ChatGPT", Icon: SiOpenai },
//   { name: "Canva", Icon: SiCanva },
// ];

// function BrandSet({ duplicate = false }) {
//   return (
//     <div
//       aria-hidden={duplicate || undefined}
//       className="flex w-screen min-w-max shrink-0 items-center justify-around gap-10 px-8 md:gap-12"
//     >
//       {brands.map(({ name, Icon }) => (
//         <span
//           key={`${duplicate ? "duplicate-" : ""}${name}`}
//           role={duplicate ? undefined : "img"}
//           aria-label={duplicate ? undefined : name}
//           title={name}
//           className="shrink-0 text-violet-100/70 transition-colors duration-300 hover:text-white"
//         >
//           <Icon aria-hidden="true" className="h-9 w-9 md:h-12 md:w-12" />
//         </span>
//       ))}
//     </div>
//   );
// }
// /**
//  * Reusable logo-style marquee. Import it into any React component with:
//  * import BrandMarquee from "./BrandMarquee";
//  * then render <BrandMarquee />.
//  * then render <BrandMarquee />. Install the icon set with `npm install react-icons`.
//  */
// export default function BrandMarquee() {
//   return (
//     <section
//       aria-label="Tools and platforms"
//       className="overflow-hidden rounded-3xl bg-[#19051c] py-12 md:py-16"
//     >
//       <style>{`
//         @keyframes brand-marquee-scroll {
//           from { transform: translateX(0); }
//           to { transform: translateX(-50%); }
//         }

//         .brand-marquee-track {
//           animation: brand-marquee-scroll 32s linear infinite;
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .brand-marquee-track { animation: none; }
//         }
//       `}</style>

//       <div className="brand-marquee-track flex w-max">
//         <BrandSet />
//         <BrandSet duplicate />
//       </div>
//     </section>
//   );
// }
