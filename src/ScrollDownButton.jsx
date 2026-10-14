import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function ScrollDownButton({
  text = "ScrOll dOwn",
  onClick,
  className = "",
}) {
  const lettersRef = useRef([]);

  // Cleanup GSAP tweens on unmount
  useEffect(() => {
    const letters = lettersRef.current;
    return () => {
      if (letters.length) {
        gsap.killTweensOf(letters);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    gsap.killTweensOf(lettersRef.current);
    gsap.to(lettersRef.current, {
      y: "-100%",
      duration: 0.45,
      stagger: 0.02,
      ease: "power3.inOut",
      overwrite: "auto",
    });
  };

  const handleMouseLeave = () => {
    gsap.killTweensOf(lettersRef.current);
    gsap.to(lettersRef.current, {
      y: "0%",
      duration: 0.45,
      stagger: 0.02,
      ease: "power3.inOut",
      overwrite: "auto",
    });
  };

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`border border-black/20 rounded-full px-5 py-2 font-semibold text-[14px] leading-none cursor-pointer hover:border-black/50 transition-colors select-none ${className}`}
    >
      <span className="relative inline-flex overflow-hidden h-[15px]">
        {text.split("").map((char, index) => (
          <span
            key={index}
            ref={(el) => {
              if (el) lettersRef.current[index] = el;
            }}
            className="inline-flex flex-col will-change-transform"
          >
            {/* First letter (visible by default) */}
            <span className="inline-block whitespace-pre">
              {char === " " ? "\u00A0" : char}
            </span>

            {/* Trailing duplicate letter that rolls in right behind it */}
            <span className="inline-block whitespace-pre text-black/60">
              {char === " " ? "\u00A0" : char}
            </span>
          </span>
        ))}
      </span>
    </button>
  );
}