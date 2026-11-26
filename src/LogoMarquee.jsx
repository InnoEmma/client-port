import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LOGOS = [
  {
    name: "Google Workspace",
    category: "Executive Support",
    isSpecialty: false,
    svg: (
      <svg className="h-6 w-auto" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" />
      </svg>
    ),
  },
  {
    name: "Microsoft 365",
    category: "Executive Support",
    isSpecialty: false,
    svg: (
      <svg className="h-6 w-auto" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1 1h10v10H1V1zm12 0h10v10H13V1zM1 13h10v10H1V13zm12 0h10v10H13V13z" />
      </svg>
    ),
  },
  {
    name: "Notion",
    category: "SOPs & Documentation",
    isSpecialty: false,
    svg: (
      <svg className="h-6 w-auto" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.83a2.64 2.64 0 0 0-1.819-.746L2.64 2.016c-.42.047-.513.327-.373.56zm.793 4.293v12.27c0 .653.373.933.98.887l14.288-.84c.606-.046.746-.513.746-1.026V7.475c0-.56-.233-.84-.7-.793l-14.568.84c-.513.047-.746.42-.746.98zm11.758.886c.093.374 0 .747-.373.793l-.653.14v7.466c0 .747-.327 1.027-.933 1.073l-2.427.14-3.593-5.226v4.386l1.213.233c.373.047.466.42.466.747l-3.36.233c-.093-.373 0-.746.373-.793l.793-.14V9.897l-1.026-.093c-.373-.047-.466-.42-.466-.747l3.407-.233 3.64 5.32V10.08l-1.12-.14c-.373-.047-.466-.42-.466-.747z" />
      </svg>
    ),
  },
  {
    name: "Slack",
    category: "Team Coordination",
    isSpecialty: false,
    svg: (
      <svg className="h-6 w-auto" viewBox="0 0 24 24" fill="currentColor">
        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52-2.523c0-1.394 1.127-2.524 2.52-2.524h2.524v2.524c0 1.393-1.127 2.523-2.524 2.523zm3.794-2.523a2.528 2.528 0 0 1 2.523-2.524c1.393 0 2.523 1.13 2.523 2.524v6.318a2.528 2.528 0 0 1-2.523 2.523 2.528 2.528 0 0 1-2.523-2.523v-6.318zm0-3.794a2.528 2.528 0 0 1-2.523-2.523c0-1.393 1.13-2.523 2.523-2.523h2.523v2.523c0 1.394-1.13 2.523-2.523 2.523zm3.794 0a2.528 2.528 0 0 1 2.523-2.523h6.318a2.528 2.528 0 0 1 2.523 2.523 2.528 2.528 0 0 1-2.523 2.523h-6.318a2.528 2.528 0 0 1-2.523-2.523zm3.794 3.794a2.528 2.528 0 0 1 2.524 2.523c0 1.394-1.13 2.524-2.524 2.524h-2.524v-2.524c0-1.393 1.13-2.523 2.524-2.523zm-3.794 2.523a2.528 2.528 0 0 1-2.523 2.524 2.528 2.528 0 0 1-2.523-2.524V8.847a2.528 2.528 0 0 1 2.523-2.523 2.528 2.528 0 0 1 2.523 2.523v6.318zm0 3.794a2.528 2.528 0 0 1 2.523 2.523c0 1.394-1.13 2.524-2.523 2.524h-2.523v-2.524c0-1.393 1.13-2.523 2.523-2.523zm-3.794 0a2.528 2.528 0 0 1-2.523 2.524H2.52A2.528 2.528 0 0 1 0 18.96a2.528 2.528 0 0 1 2.52-2.524h6.32v2.524z" />
      </svg>
    ),
  },
  {
    name: "Calendly",
    category: "Calendar Logistics",
    isSpecialty: false,
    svg: (
      <svg className="h-6 w-auto" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5v-5z" />
      </svg>
    ),
  },
  {
    name: "Asana",
    category: "Task Delegation",
    isSpecialty: false,
    svg: (
      <svg className="h-6 w-auto" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="7" r="4.5" />
        <circle cx="5" cy="16.5" r="4.5" />
        <circle cx="19" cy="16.5" r="4.5" />
      </svg>
    ),
  },
  {
    name: "Airtable",
    category: "CRM & Database",
    isSpecialty: false,
    svg: (
      <svg className="h-6 w-auto" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.25 1.5L1.5 5.5v5.5l9.75-4V1.5zm1.5 0v5.5l9.75 4V5.5L12.75 1.5zm-1.5 7.5L1.5 13v9.5l9.75-4V9zm1.5 0v9.5l9.75 4V13l-9.75-4z" />
      </svg>
    ),
  },
  {
    name: "QuickBooks",
    category: "Invoicing & Expenses",
    isSpecialty: false,
    svg: (
      <svg className="h-6 w-auto" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-1.1c-1.47-.28-2.6-1.35-2.6-2.9h2c0 .83.67 1.5 1.6 1.5s1.6-.67 1.6-1.5c0-.94-.65-1.37-1.85-1.78C9.72 10.37 8.5 9.48 8.5 8c0-1.4 1-2.48 2.5-2.85V4h2v1.15c1.25.26 2.22 1.15 2.35 2.35h-2c-.13-.53-.55-.9-1.35-.9-.77 0-1.4.52-1.4 1.25 0 .8.6 1.2 1.8 1.6 1.58.53 2.8 1.35 2.8 3.05 0 1.5-1.12 2.65-2.7 2.9V16.5z" />
      </svg>
    ),
  },
  {
    name: "Zapier",
    category: "Admin Automation",
    isSpecialty: false,
    svg: (
      <svg className="h-6 w-auto" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.2 0H10.8v8.4H3.6l9.6 15.6v-8.4h7.2L13.2 0z" />
      </svg>
    ),
  },
  {
    name: "Figma",
    category: "Brand & Assets",
    badge: "10% Design Add-on",
    isSpecialty: true,
    svg: (
      <svg className="h-6 w-auto" viewBox="0 0 38 57" fill="currentColor">
        <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
        <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" />
        <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" />
        <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" />
        <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" />
      </svg>
    ),
  },
];

// Extracted Subcomponent
export function MarqueeItem({ item, isClone = false }) {
  return (
    <div
      className={`group relative flex items-center gap-3.5 px-4 py-2 rounded-xl transition-all duration-300 cursor-pointer ${
        item.isSpecialty
          ? "bg-purple-500/10 border border-purple-500/30 text-purple-300 hover:border-purple-400 hover:bg-purple-500/20"
          : "border border-transparent text-white/50 hover:text-white hover:bg-white/5"
      }`}
      aria-hidden={isClone ? "true" : undefined}
      aria-label={!isClone ? `${item.name} - ${item.category}` : undefined}
    >
      <div className="flex-shrink-0">{item.svg}</div>

      <div className="flex flex-col text-left">
        <div className="flex items-center gap-2">
          <span
            className={`text-sm font-semibold tracking-wide ${
              item.isSpecialty
                ? "text-purple-100 group-hover:text-white"
                : "text-white/80 group-hover:text-white"
            }`}
          >
            {item.name}
          </span>

          {item.badge && (
            <span className="rounded-full bg-purple-500/25 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-purple-200 border border-purple-400/40">
              {item.badge}
            </span>
          )}
        </div>

        <span
          className={`text-[11px] font-medium ${
            item.isSpecialty
              ? "text-purple-300/80 group-hover:text-purple-200"
              : "text-white/40 group-hover:text-white/60"
          }`}
        >
          {item.category}
        </span>
      </div>
    </div>
  );
}

// Main Marquee Component
export default function LogoMarquee() {
  const containerRef = useRef(null);
  const marqueeInnerRef = useRef(null);

  useEffect(() => {
    const marqueeInner = marqueeInnerRef.current;
    if (!marqueeInner) return;

    const ctx = gsap.context(() => {
      let totalWidth = marqueeInner.scrollWidth / 2;
      let wrap = gsap.utils.wrap(-totalWidth, 0);

      const tl = gsap.to(marqueeInner, {
        x: `-=${totalWidth}`,
        duration: 32,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: (x) => `${wrap(parseFloat(x))}px`,
        },
      });

      const timeScaleSetter = gsap.quickTo(tl, "timeScale", {
        duration: 0.6,
        ease: "power2.out",
      });

      let timeoutId;

      ScrollTrigger.create({
        onUpdate: (self) => {
          const velocity = self.getVelocity();

          let targetScale = 1;
          if (velocity > 0) {
            targetScale = 1 + velocity / 220;
          } else if (velocity < 0) {
            targetScale = -1 + velocity / 120;
          }

          targetScale = gsap.utils.clamp(-5, 6, targetScale);
          timeScaleSetter(targetScale);

          clearTimeout(timeoutId);
          timeoutId = setTimeout(() => {
            timeScaleSetter(1);
          }, 80);
        },
      });

      const handleResize = () => {
        totalWidth = marqueeInner.scrollWidth / 2;
        wrap = gsap.utils.wrap(-totalWidth, 0);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        clearTimeout(timeoutId);
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden bg-transparent py-6 border-t border-black/10 dark:border-white/10"
    >
      {/* Edge gradient masks using CSS variables or translucent masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-inherit to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-inherit to-transparent z-10" />

      <div
        ref={marqueeInnerRef}
        className="flex w-max items-center gap-10 pr-10 select-none will-change-transform"
      >
        {LOGOS.map((item, idx) => (
          <MarqueeItem key={`orig-${idx}`} item={item} isClone={false} />
        ))}
        {LOGOS.map((item, idx) => (
          <MarqueeItem key={`clone-${idx}`} item={item} isClone={true} />
        ))}
      </div>
    </div>
  );
}
