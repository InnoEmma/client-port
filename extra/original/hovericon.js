

import React, { useRef } from "react";
import gsap from "gsap";

const items = [
  { id: "01", label: "View our work" },
  { id: "02", label: "View our services" },
  { id: "03", label: "Schedule an introductory meeting" },
];

export default function InteractiveNav() {
  return (
    <div className="flex min-h-screen flex-col justify-center bg-[#0d0914] px-8 text-white">
      <div className="mx-auto flex w-full max-w-xl flex-col gap-2">
        {items.map((item) => (
          <NavItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

function NavItem({ item }) {
  const textRef = useRef(null);
  const arrowRef = useRef(null);

  const handleMouseEnter = () => {
    // Nudge the text 10px to the right
    gsap.to(textRef.current, {
      x: 10,
      duration: 0.3,
      ease: "power2.out",
    });

    // Reveal and move the arrow
    gsap.to(arrowRef.current, {
      opacity: 1,
      x: 0,
      y: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    // Reset text back to original position
    gsap.to(textRef.current, {
      x: 0,
      duration: 0.3,
      ease: "power2.out",
    });

    // Reset arrow back
    gsap.to(arrowRef.current, {
      opacity: 0,
      x: -6,
      y: 6,
      duration: 0.2,
      ease: "power2.in",
    });
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative flex cursor-pointer items-center justify-between rounded-2xl px-6 py-4 transition-colors duration-300 hover:bg-[#e2edff]"
    >
      {/* Label section that slides on the X-axis */}
      <div
        ref={textRef}
        className="flex items-center gap-4 text-lg md:text-xl font-medium"
      >
        <span className="text-zinc-500 transition-colors duration-300 group-hover:text-zinc-500">
          ({item.id})
        </span>
        <span className="text-zinc-300 transition-colors duration-300 group-hover:text-black">
          {item.label}
        </span>
      </div>

      {/* Arrow icon that fades and slides into place */}
      <div
        ref={arrowRef}
        className="opacity-0 -translate-x-1.5 translate-y-1.5 text-black"
      >
        <svg
          className="h-5 w-5 stroke-[2.2]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </div>
    </div>
  );
}