
import logo_2 from "../extra/logo2.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const COLOR_START = "#DBE8FB";
const COLOR_END = "#140018";
const TEXT_START = "#140018";
const TEXT_END = "#e1ebfc";

export default function PageIntro() {
  const [menuOpen, setMenuOpen] = useState(false);
  const containerRef = useRef(null);
  const fadeRef = useRef(null);

  useGSAP(
    () => {
      const scope = containerRef.current;
      if (!scope) return;

      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      // 1. Organic floating animation for each blob finger
      const blobTweens = prefersReduced
        ? []
        : [
            gsap.to(".bf1", {
              y: -60,
              x: 35,
              rotation: 6,
              duration: 3,
              ease: "power1.inOut",
              repeat: -1,
              yoyo: true,
              transformOrigin: "bottom center",
            }),
            gsap.to(".bf2", {
              y: 50,
              x: -35,
              rotation: -7,
              duration: 4,
              ease: "power1.inOut",
              repeat: -1,
              yoyo: true,
              transformOrigin: "bottom center",
            }),
            gsap.to(".bf3", {
              y: -45,
              x: 40,
              rotation: 4,
              duration: 3,
              ease: "power1.inOut",
              repeat: -1,
              yoyo: true,
              transformOrigin: "bottom center",
            }),
          ];

      // 2. Entrance animations
      const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
      });

      tl.from(".design", { y: 25, opacity: 0, duration: 0.7, stagger: 0.2 })
        .from(
          ".blob",
          { y: 85, opacity: 0, duration: 0.7, stagger: 0.2 },
          "-=0.5",
        )
        .from(
          ".logo",
          { y: -25, opacity: 0, duration: 0.7, stagger: 0.2 },
          "-=0.5",
        )
        .from(
          ".icon",
          { y: -25, opacity: 0, duration: 0.7, stagger: 0.2 },
          "-=0.7",
        )
        .from(
          ".para",
          { y: 20, opacity: 0, duration: 0.7, stagger: 0.2 },
          "-=0.6",
        )
        .from(
          ".places",
          { y: 20, opacity: 0, duration: 0.7, stagger: 0.2 },
          "-=0.6",
        );

      // 3. Hero split text
      const splitHero = SplitText.create(".split", {
        type: "lines",
        mask: "lines",
        autoSplit: true,
        linesClass: "split-line",
        onSplit(self) {
          return gsap.from(self.lines, {
            yPercent: 200,
            duration: 0.65,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".split",
              once: true, // was `once: false` with no toggleActions (never replayed)
              start: "top 85%",
            },
          });
        },
      });

      // 4. Background color transitions
      const scrollTriggerConfig = {
        trigger: scope,
        start: "50% bottom",
        toggleActions: "play none none reset",
      };

      gsap.fromTo(
        scope,
        { backgroundColor: COLOR_START },
        {
          backgroundColor: COLOR_END,
          ease: "power1.inOut",
          scrollTrigger: scrollTriggerConfig,
        },
      );

      gsap.fromTo(
        ".blob-layer",
        { color: "#EAF2FF" },
        {
          color: COLOR_END,
          ease: "power2.inOut",
          scrollTrigger: scrollTriggerConfig,
        },
      );

      // Text color transition — scoped to the about block ONLY.
      // Previously ".fade-text" also matched the hero ".places" row,
      // so that row flipped color off-screen along with the about copy.
      gsap.fromTo(
        fadeRef.current,
        { color: TEXT_START },
        {
          color: TEXT_END,
          scrollTrigger: {
            trigger: fadeRef.current,
            start: "top 72.8%",
            toggleActions: "play reverse play reverse",
          },
        },
      );

      // 5. About section text splitting
      // NOTE: gsap.utils.toArray(".about") is NOT scoped by useGSAP —
      // pass the scope as the second argument (or query the node directly).
      const aboutElements = gsap.utils.toArray(".about", scope);

      const aboutSplits = aboutElements.map((el) =>
        SplitText.create(el, {
          type: "lines",
          mask: "lines",
          linesClass: "split-lines",
          autoSplit: true,
          onSplit(self) {
            return gsap.from(self.lines, {
              yPercent: 120,
              duration: 1,
              stagger: 0.1,
              ease: "expo.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            });
          },
        }),
      );

      return () => {
        blobTweens.forEach((t) => t.kill());
        splitHero.revert();
        aboutSplits.forEach((s) => s.revert());
      };
    },
    { scope: containerRef },
  );

  return (
    <header
      className="m-4 overflow-hidden rounded-2xl"
      ref={containerRef}
      style={{ backgroundColor: COLOR_START }}
    >
      <nav className="relative z-20">
        <div className="flex items-center justify-between px-4 pt-3 sm:px-6 sm:pt-3.5">
          <div className="logo flex shrink-0 items-center">
            <img
              className="h-8 w-auto object-contain sm:h-10"
              src={logo_2}
              alt="Studio Logo"
            />
          </div>

          <div className="design absolute left-1/2 mb-5 hidden -translate-x-1/2 rounded-full border border-black px-5 py-1.5 font-medium lg:block">
            <p className="select-none whitespace-nowrap text-sm xl:text-base">
              Ops &amp; Design Studio
            </p>
          </div>

          <div className="icon hidden items-center gap-5 font-medium text-[15px] md:flex lg:gap-7 lg:text-[17px]">
            <a href="#about" className="transition-opacity hover:opacity-70">
              About Us
            </a>
            <a href="#work" className="transition-opacity hover:opacity-70">
              Work
            </a>
            <a href="#service" className="transition-opacity hover:opacity-70">
              Service
            </a>
            <a
              href="#collaborate"
              className="whitespace-nowrap rounded-xl bg-black px-6 py-3.5 text-[19px] leading-[18px] text-white transition-colors hover:bg-black/85 lg:px-6.5"
            >
              To collaborate
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 focus:outline-none md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span
              className={`block h-0.5 w-6 rounded-full bg-black transition-all duration-300 ease-in-out ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 rounded-full bg-black transition-all duration-300 ease-in-out ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-6 rounded-full bg-black transition-all duration-300 ease-in-out ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
            menuOpen
              ? "max-h-80 border-t border-black/10 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col items-start gap-4 px-6 pb-6 pt-4 text-[17px] font-medium">
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="w-full py-1 transition-opacity hover:opacity-70"
            >
              About Us
            </a>
            <a
              href="#work"
              onClick={() => setMenuOpen(false)}
              className="w-full py-1 transition-opacity hover:opacity-70"
            >
              Work
            </a>
            <a
              href="#service"
              onClick={() => setMenuOpen(false)}
              className="w-full py-1 transition-opacity hover:opacity-70"
            >
              Service
            </a>
            <a
              href="#collaborate"
              onClick={() => setMenuOpen(false)}
              className="text-custom-blue mt-2 w-full rounded-2xl bg-black px-6 py-3 text-center transition-colors hover:bg-black/85"
            >
              To collaborate
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section Container */}
      <section className="relative flex min-h-[calc(100vh-4rem)] flex-col justify-between overflow-hidden">
        <div
          className="blob-layer pointer-events-none absolute inset-0 z-0"
          style={{ color: "#EAF2FF" }}
        >
          <svg
            viewBox="0 0 1322 693"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMax slice"
            className="h-full w-full"
          >
            <defs>
              <linearGradient
                id="bottomFadeGrad"
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
              >
                <stop offset="55%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="85%" stopColor="#ffffff" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>
              <mask
                id="fade-bottom"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="1322"
                height="693"
              >
                <rect
                  x="0"
                  y="0"
                  width="1322"
                  height="693"
                  fill="url(#bottomFadeGrad)"
                />
              </mask>
            </defs>
            <g mask="url(#fade-bottom)">
              <g transform="translate(20 346.5) scale(0.5)">
                <g className="magnet">
                  <g className="blob-float bf1">
                    <path
                      className="blob b1"
                      fill="currentColor"
                      d="M629.511 107.568C661 230.462 633.112 446.754 543.937 693L0 693C89.1755 446.754 217.882 230.462 338.39 107.568C405.118 39.424 469.395 0 522.946 0C576.498 0 612.121 39.424 629.511 107.568Z"
                    />
                  </g>
                </g>
              </g>
              <g transform="translate(282 173.3) scale(0.75)">
                <g className="magnet">
                  <g className="blob-float bf2">
                    <path
                      className="blob b2"
                      fill="currentColor"
                      d="M629.511 107.568C661 230.462 633.112 446.754 543.937 693L0 693C89.1755 446.754 217.882 230.462 338.39 107.568C405.118 39.424 469.395 0 522.946 0C576.498 0 612.121 39.424 629.511 107.568Z"
                    />
                  </g>
                </g>
              </g>
              <g transform="translate(677 13.9) scale(0.98)">
                <g className="magnet">
                  <g className="blob-float bf3">
                    <path
                      className="blob b3"
                      fill="currentColor"
                      d="M629.511 107.568C661 230.462 633.112 446.754 543.937 693L0 693C89.1755 446.754 217.882 230.462 338.39 107.568C405.118 39.424 469.395 0 522.946 0C576.498 0 612.121 39.424 629.511 107.568Z"
                    />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>

        <div className="relative z-10">
          {/* Single heading, block lines, leading drives spacing.
              Negative margins on stacked <p> tags fight SplitText's masks. */}
          <h1 className="split text-midnight text-center text-[44px] font-extrabold leading-[0.9] sm:text-[64px] md:text-[80px] lg:text-[95px]">
            <span className="block">Built to grow</span>
            <span className="block">&amp; designed</span>
            <span className="block">to stand out</span>
          </h1>

          <p className="para text-plum-gray mx-auto mt-6 max-w-[660px] px-6 text-center text-[17px] font-medium leading-7 sm:text-[20px]">
            Standing out isn&apos;t luck, it&apos;s craftsmanship. We combine
            executive support, product management, and brand design to help your
            business thrive from positioning to launch.
          </p>
        </div>

        <div className="places relative z-10 flex items-center justify-between px-6 pb-12">
          <div className="flex items-center justify-between gap-2">
            <p className="rounded-md border px-2 py-1 text-[14px] font-semibold leading-5">
              3 Places
            </p>
            <p className="font-medium">Available for Q4</p>
          </div>
          <div>
            <p className="rounded-full border px-5 py-1.5 text-[14px] font-semibold leading-[18px]">
              ScrOll dOwn
            </p>
          </div>
        </div>
      </section>

      {/* Subsequent Page Content */}
      <section
        id="about"
        className="about-section relative z-10 flex flex-col items-start justify-between gap-10 px-6 pb-20 pt-20 sm:px-10 lg:flex-row lg:gap-24 lg:px-16 lg:pt-40 xl:gap-[280px]"
      >
        <div className="shrink-0">
          <p className="about text-plum-gray text-[17px] font-medium leading-7 sm:text-[20px]">
            About us, since 2025
          </p>
        </div>

        <div ref={fadeRef} className="w-full min-w-0">
          <div className="pb-10">
            <h2 className="about text-[32px] font-bold leading-[1.15] sm:text-[42px] lg:text-[57px] xl:w-[600px]">
              Jophiel Studios is a digital design studio in Metro PH.
            </h2>
          </div>

          <div className="about-para-section">
            <div className="max-w-[640px]">
              <p className="about pb-5 text-[17px] font-medium leading-[31px] sm:text-[20px]">
                We work with founders at the moments that count: a launch, a
                rebrand, or a backend that&apos;s falling apart. From executive
                support and product management to full brand design, everything
                is under one roof.
              </p>
              <p className="about text-[17px] font-medium leading-[31px] sm:text-[20px]">
                No account managers, no middle layers. You talk directly to the
                people doing the work, and decisions are made the same day.
              </p>
            </div>

            <div className="about space-y-7 pb-20 pt-16 text-[22px] font-medium leading-[37px] sm:text-[28px] lg:pb-80 lg:pt-20">
              <p>(01) View our work</p>
              <p>(02) View our service</p>
              <p>(03) Schedule and introductory meeting</p>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
