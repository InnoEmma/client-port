import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

function Footer() {
  const [lagosTime, setLagosTime] = useState("");

  // Live Nigerian Time (WAT / Africa/Lagos)
  useEffect(() => {
    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Africa/Lagos",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });

      // Format to "HH : MM : SS" style as shown in the design
      const formatted = formatter.format(new Date()).replace(/:/g, " : ");
      setLagosTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

//   const EMAIL = "hey@jophielstudios.com";
  const EMAIL = "hey@mammyoutstyoudiOs.cOm";

  const lettersRef = useRef([]);

  const handleMouseEnter = () => {
    // Staggered roll up to the clone character
    gsap.killTweensOf(lettersRef.current);
    gsap.to(lettersRef.current, {
      y: "-50%",
      duration: 0.5,
    //   ease: "power3.out",
      stagger: 0.01,
      overwrite: "auto",
    });
  };

  const handleMouseLeave = () => {
    // Reset back to original position
    gsap.killTweensOf(lettersRef.current);
    gsap.to(lettersRef.current, {
      y: "0%",
      duration: 0.5,
    //   ease: "power2.inOut",
      stagger: 0.01,
      overwrite: "auto",
    });
  };

  return (
    <footer className="m-4 rounded-2xl bg-[#140018] text-white pt-20 pb-0 overflow-hidden font-sans selection:bg-purple-500 selection:text-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Top availability badge */}
        <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-400 mb-8 sm:mb-6">
          <span className="px-3 py-1 rounded-full border border-neutral-700/80 text-white font-medium">
            3 places
          </span>
          <span className="text-neutral-400">available for Q4</span>
        </div>

        {/* Big Email Link */}
        {/* <div className="mb-24 sm:mb-32">
          <a
            href="mailto:hey@jophielstudios.com"
            className="group inline-flex items-center gap-4 sm:gap-6 text-3xl sm:text-5xl md:text-6xl font-light tracking-tight hover:opacity-80 transition-opacity"
          >
  
            <svg
              className="w-8 h-8 sm:w-12 sm:h-12 text-white stroke-[1.5] transition-transform duration-300 group-hover:scale-105"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span className="font-normal text-slate-100">
              hey@jophielstudios.com
            </span>
          </a>
        </div> */}
        <div className="flex flex-col items-start select-none font-sans mb-36">
          {/* Badge */}


          {/* Interactive Email Link */}
          <a
            href={`mailto:${EMAIL}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="group inline-flex items-center text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-white focus:outline-none"
          >
            {/* Mail Icon Container: expands and fades in on hover */}
            <span className="grid transition-all duration-300 ease-out grid-cols-[0fr] opacity-0 group-hover:grid-cols-[1fr] group-hover:opacity-100 group-hover:mr-3 sm:group-hover:mr-4">
              <span className="overflow-hidden flex items-center">
                <svg
                  className="w-7 h-7 sm:w-11 sm:h-11 shrink-0 stroke-[1.5]"
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
                  className="relative inline-flex flex-col overflow-hidden h-[1.15em] leading-[1.15em]"
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
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between text-xs sm:text-sm  border-b pt-6 pb-8 mb-8 gap-6 md:gap-0 text-footer-grey">
  
          <div className="flex items-center gap-3  text-footer-grey">
            <span>© {new Date().getFullYear()} Jophiel Studios</span>
            <span className=" font-mono tracking-wider">
              Lagos {lagosTime || "22:00:00"}
            </span>
          </div>


          <div className="flex items-center gap-8  text-footer-grey">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
          </div>

          <div>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5  text-footer-grey hover:text-white transition-colors cursor-pointer"
            >
              Back to top <span>↑</span>
            </button>
          </div>
        </div>
        {/* Giant Bottom Branding Typography */}
        {/* Giant Bottom Branding Typography */}
        {/* <div className="w-full select-none pointer-events-none pt-4 pb-8 overflow-visible">
          <h1 className="text-[clamp(2.5rem,10vw,11rem)] font-black leading-none tracking-tighter text-[#e8ecf4] whitespace-nowrap text-center">
            Jophiel Studios
          </h1>
        </div> */}
        {/* Giant Bottom Branding Typography */}
        {/* Giant Bottom Branding Typography */}
        {/* <div className="w-[calc(100%+3rem)] sm:w-[calc(100%+5rem)] lg:w-[calc(100%+7rem)] -mx-6 sm:-mx-10 lg:-mx-14 select-none pointer-events-none pb-4">
          <svg
            viewBox="0 0 1180 185"
            className="w-full h-auto block"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              x="50%"
              y="135"
              textAnchor="middle"
              fill="#e8ecf4"
              style={{
                fontSize: "148px",
                fontWeight: 900,
                letterSpacing: "-0.04em",
                fontFamily: "system-ui, -apple-system, sans-serif",
              }}
            >
              Jophiel Studios
            </text>
          </svg>
        </div> */}
        {/* Giant Bottom Branding Typography */}
        {/* <div className="w-full select-none pointer-events-none pb-8 pt-4 overflow-visible">
          <h1 className="text-[clamp(3.5rem,11.5vw,12rem)] font-black leading-none tracking-tighter text-[#e8ecf4] whitespace-nowrap text-left">
            Jophiel Studios
          </h1>
        </div> */}

        <div className="w-full flex justify-between items-center text-[148px] font-extrabold uppercase leading-none tracking-tighter text-ice-blue">
          {"Jophiel Studios".split("").map((char, index) => (
            <span key={index}>{char === " " ? "\u00A0" : char}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;






"use client";



const EMAIL = "hey@jophielstudios.com";
const LETTERS = EMAIL.split("");

/* The cube-roll geometry: each glyph lives on a 1.1em-tall box,
   so the two faces sit half that distance from the rotation axis. */
const LINE_HEIGHT = 1.1;
const CUBE_HALF = LINE_HEIGHT / 2; // 0.55em

const FACE = {
  backfaceVisibility: "hidden",
  WebkitBackfaceVisibility: "hidden",
};

function EMailAnimation() {
  const boundsRef = useRef(null);
  const linkRef = useRef(null);
  const glowRef = useRef(null);
  const rotatorsRef = useRef([]);
  const quickRef = useRef({});
  const reducedRef = useRef(false);

  /* ---------- setup: magnetic tweens ---------- */
  useEffect(() => {
    reducedRef.current =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const q = quickRef.current;
    q.linkX = gsap.quickTo(linkRef.current, "x", { duration: 1, ease: "power3.out" });
    q.linkY = gsap.quickTo(linkRef.current, "y", { duration: 1, ease: "power3.out" });
    q.glowX = gsap.quickTo(glowRef.current, "x", { duration: 1.2, ease: "power3.out" });
    q.glowY = gsap.quickTo(glowRef.current, "y", { duration: 1.2, ease: "power3.out" });

    return () => {
      gsap.killTweensOf(
        [linkRef.current, glowRef.current, ...rotatorsRef.current].filter(Boolean)
      );
    };
  }, []);

  /* ---------- the roll ---------- */
  const roll = useCallback((active, from = "start") => {
    const targets = rotatorsRef.current.filter(Boolean);
    if (!targets.length) return;

    gsap.killTweensOf(targets);

    if (reducedRef.current) {
      gsap.set(targets, { rotateX: active ? 90 : 0 });
      return;
    }

    gsap.to(targets, {
      rotateX: active ? 90 : 0,
      duration: active ? 0.9 : 0.65,
      ease: active ? "expo.out" : "power3.inOut",
      // the wave travels away from wherever the cursor entered
      stagger: { each: 0.017, from },
    });
  }, []);

  /* ---------- pointer ---------- */
  const handlePointerEnter = useCallback(
    (e) => {
      const rect = boundsRef.current?.getBoundingClientRect();
      if (!rect) return;
      const from = e.clientX < rect.left + rect.width / 2 ? "start" : "end";
      roll(true, from);
    },
    [roll]
  );

  const handlePointerLeave = useCallback(() => {
    roll(false, "end");
    const q = quickRef.current;
    q.linkX?.(0);
    q.linkY?.(0);
    q.glowX?.(0);
    q.glowY?.(0);
  }, [roll]);

  const handlePointerMove = useCallback((e) => {
    const rect = boundsRef.current?.getBoundingClientRect();
    if (!rect) return;

    const rx = (e.clientX - rect.left) / rect.width - 0.5;
    const ry = (e.clientY - rect.top) / rect.height - 0.5;

    const q = quickRef.current;
    // text drifts a little…
    q.linkX?.(rx * 20);
    q.linkY?.(ry * 12);
    // …the aura drifts a lot
    q.glowX?.(rx * 110);
    q.glowY?.(ry * 70);
  }, []);

  /* ---------- keyboard ---------- */
  const handleFocus = useCallback(() => roll(true, "start"), [roll]);
  const handleBlur = useCallback(() => roll(false, "start"), [roll]);

  return (
    <div className="relative mb-36 flex flex-col items-start font-sans select-none bg-purple-950 py-20 px-">
      {/* Eyebrow badge */}
      <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[10px] font-medium tracking-[0.22em] text-[#93A9C7] uppercase backdrop-blur-sm">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
        </span>
        Available for new work
      </span>

      <div
        ref={boundsRef}
        className="group relative inline-flex"
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onPointerMove={handlePointerMove}
      >
        <a
          ref={linkRef}
          href={`mailto:${EMAIL}`}
          aria-label={`Email me at ${EMAIL}`}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="relative inline-flex items-center rounded-lg text-[#8FC2FF] outline-none focus-visible:ring-2 focus-visible:ring-[#7FB6FF]/50 focus-visible:ring-offset-[12px] focus-visible:ring-offset-transparent"
        >
          {/* Cursor-tracking aura */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[240px] w-[620px] -translate-x-1/2 -translate-y-1/2"
          >
            <span
              ref={glowRef}
              className="block h-full w-full opacity-0 blur-3xl transition-opacity duration-700 ease-out group-hover:opacity-100 group-focus-within:opacity-100"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(120,180,255,0.30), rgba(120,180,255,0) 72%)",
              }}
            />
          </span>

          {/* Mail icon — expands, unclips, and settles in */}
          <span className="grid grid-cols-[0fr] opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:mr-3 group-hover:grid-cols-[1fr] group-hover:opacity-100 group-focus-within:mr-3 group-focus-within:grid-cols-[1fr] group-focus-within:opacity-100 sm:group-hover:mr-5 sm:group-focus-within:mr-5">
            <span className="flex items-center overflow-hidden">
              <svg
                aria-hidden="true"
                className="h-6 w-6 shrink-0 -translate-x-3 scale-75 stroke-[1.5] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0 group-hover:scale-100 group-focus-within:translate-x-0 group-focus-within:scale-100 sm:h-9 sm:w-9"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </span>
          </span>

          {/* Rolling glyphs */}
          <span className="relative inline-flex items-center" aria-hidden="true">
            {LETTERS.map((char, index) => (
              <span
                key={`${char}-${index}`}
                className="relative inline-block shrink-0 text-[clamp(24px,6.5vw,64px)] font-medium text-[#C9E0FF] transition-colors duration-500 group-hover:text-white group-focus-within:text-white"
                style={{ perspective: "1200px" }}
              >
                <span
                  ref={(el) => {
                    rotatorsRef.current[index] = el;
                  }}
                  className="relative block"
                  style={{ transformStyle: "preserve-3d", willChange: "transform" }}
                >
                  {/* front face — in flow, defines the box */}
                  <span
                    className="block"
                    style={{
                      ...FACE,
                      lineHeight: LINE_HEIGHT,
                      transform: `translateZ(${CUBE_HALF}em)`,
                    }}
                  >
                    {char}
                  </span>

                  {/* bottom face — swings up into place */}
                  <span
                    className="absolute inset-0 block"
                    style={{
                      ...FACE,
                      lineHeight: LINE_HEIGHT,
                      transform: `rotateX(-90deg) translateZ(${CUBE_HALF}em)`,
                    }}
                  >
                    {char}
                  </span>
                </span>
              </span>
            ))}

            {/* Hairline underline */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-3 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-[#7FB6FF]/0 via-[#7FB6FF]/70 to-[#7FB6FF]/0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100 group-focus-within:scale-x-100"
            />
          </span>
        </a>
      </div>
    </div>
  );
}