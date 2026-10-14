import { useState, useRef, useEffect, useCallback } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ArrowLeft, ArrowRight } from "lucide-react";

gsap.registerPlugin(useGSAP, SplitText);

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "We have been working together on multiple projects for years.\nJuliette and Daniel switch gears quickly and keep searching for new solutions, and that is exactly what we ourselves also want to project towards our customers. With Mammut as partner, we know that it is in good hands.”",
    name: "Sjoerd Griekspoor",
    role: "Founder, Hubrand",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    quote:
      "Daniel not only thought about the design, but also smart about our brand story. As a result, our website is not just beautiful, but he truly tells our story.\nEverything was picked up and delivered quickly, with short lines. Highly recommended.”",
    name: "Valentijn Jansen",
    role: "Operations Director, Likifree",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    quote:
      "Mammut works professionally and with an eye for detail.\nYou notice the passion for the profession: they don't just think about how something looks, but also about why. That commitment sets them apart from the rest.”",
    name: "Yuejin de Raadt",
    role: "Eigenaar, Jinbo Cafe",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [fontsReady, setFontsReady] = useState(false);

  const containerRef = useRef(null);
  const quoteRef = useRef(null);
  const splitRef = useRef(null);
  const linesRef = useRef([]);
  const isAnimating = useRef(true);
  const autoPlayRef = useRef(null);

  const total = TESTIMONIALS.length;
  const current = TESTIMONIALS[currentIndex];

  // Wait for webfonts — SplitText measures line breaks at split-time,
  // so splitting with a fallback font gives the wrong line groups.
  useEffect(() => {
    let alive = true;
    const done = () => alive && setFontsReady(true);
    if (document.fonts?.ready) document.fonts.ready.then(done);
    else done();
    return () => {
      alive = false;
    };
  }, []);

  // Exit choreography — lines slide out of their masks, then we swap data
  const requestChange = useCallback(
    (dir) => {
      if (isAnimating.current) return;
      isAnimating.current = true;
      setDirection(dir);

      const tl = gsap.timeline({
        onComplete: () => {
          setCurrentIndex((prev) => (prev + dir + total) % total);
        },
      });

      tl.to(linesRef.current, {
        yPercent: -dir * 115,
        duration: 0.35, // was 0.5
        ease: "expo.in", // was power3.in → sharp acceleration
        stagger: { each: 0.045, from: dir > 0 ? "start" : "end" },
      })
        // .to(
        //   ".slide-author",
        //   { y: -dir * 16, opacity: 0, duration: 0.2, ease: "power3.in" }, // was 0.3 / power2.in
        //   "<0.02", // was "<0.05" → fires almost immediately
        // )
        .to(
          ".slide-avatar",
          {
            scale: 0.12,
            borderRadius: "50%",
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
          },
          "<0.02",
        )
        .to(
          ".slide-avatar img",
          {
            scale: 1.35,
            duration: 0.3,
            ease: "power2.in",
          },
          "<",
        )
        .to(
          ".slide-author",
          { y: -dir * 16, opacity: 0, duration: 0.2, ease: "power3.in" },
          "<",
        )
        .to(
          ".slide-counter-digit",
          { y: -dir * 14, opacity: 0, duration: 0.25, ease: "power2.in" },
          "<",
        );
    },
    [total],
  );

  const handleNext = useCallback(() => requestChange(1), [requestChange]);
  const handlePrev = useCallback(() => requestChange(-1), [requestChange]);

  // Auto-advance every 4 seconds
  useEffect(() => {
    if (!fontsReady) return;

    autoPlayRef.current = setTimeout(() => {
      handleNext();
    }, 4000);

    return () => clearTimeout(autoPlayRef.current);
  }, [currentIndex, fontsReady, handleNext]);

  // Enter choreography — split the fresh quote into lines, mask each line,
  // then reveal them one by one from behind the masks.
  useGSAP(
    () => {
      if (!fontsReady || !quoteRef.current) return;

      isAnimating.current = true;

      const split = SplitText.create(quoteRef.current, {
        type: "lines",
        linesClass: "st-line",
      });
      splitRef.current = split;

      // Wrap each line in its own overflow-hidden mask.
      split.lines.forEach((line) => {
        const mask = document.createElement("span");
        mask.className = "st-mask";
        line.parentNode.insertBefore(mask, line);
        mask.appendChild(line);
      });

      linesRef.current = split.lines;

      const tl = gsap.timeline({
        defaults: { ease: "expo.out" }, // was power4.out → snappier, more authoritative
        onComplete: () => {
          isAnimating.current = false;
        },
      });

      tl.fromTo(
        ".slide-counter-digit",
        { y: direction * 14, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.35 }, // was 0.4

        0,
      )
        .fromTo(
          split.lines,
          { yPercent: direction * 115 },
          {
            yPercent: 0,
            duration: 0.65, // was 1 → much quicker
            stagger: {
              each: 0.08,
              from: direction > 0 ? "start" : "end",
            },
          },
          0.05,
        )
        // .fromTo(
        //   ".slide-author",
        //   { y: direction * 20, opacity: 0 },
        //   { y: 0, opacity: 1, duration: 0.5 },
        //   0.3,
        // );
        .fromTo(
          ".slide-avatar",
          { scale: 0.12, borderRadius: "50%", opacity: 0 },
          {
            scale: 1,
            borderRadius: "8px",
            opacity: 1,
            duration: 0.6,
            ease: "expo.out",
          },
          0.05,
        )
        .fromTo(
          ".slide-author",
          { y: direction * 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4 },
          0.1,
        );

      return () => {
        // React removes the old <p> on key change, so its split DOM is already
        // gone. Just drop the reference so the next slide starts clean.
        splitRef.current = null;
        linesRef.current = [];
      };
    },
    { dependencies: [currentIndex, fontsReady], scope: containerRef },
  );

  return (
    <div className="flex min-h-screen items-center justify-center p-6 text-white selection:bg-purple-600 selection:text-white">
      <style>{`
        /* --- SplitText line masks --- */
        .st-mask {
          display: block;
          overflow: hidden;
          padding-bottom: 0.12em;   /* room for descenders (g, y, p) */
          margin-bottom: -0.12em;   /* ...without changing the layout */
        }
          .slide-avatar {
  will-change: transform, border-radius, opacity, filter;
  transform-origin: center center;
}
.slide-avatar img {
  will-change: transform;
  transform-origin: center center;
}

      `}</style>

      <div
        ref={containerRef}
        className="w-full max-w-3xl overflow-hidden rounded-2xl bg-[#140018] p-8 md:px-20 md:py-20 border border-white/5 shadow-2xl"
      >
        {/* Navigation & Header Status */}
        <div className="flex items-center gap-6 mb-12">
          {/* Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              aria-label="Previous Testimonial"
              className="flex h-10 w-10 items-center justify-center rounded border border-white/20 text-white/70 transition-colors hover:border-white hover:text-white active:scale-95 cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Testimonial"
              className="flex h-10 w-10 items-center justify-center rounded border border-white/20 text-white/70 transition-colors hover:border-white hover:text-white active:scale-95 cursor-pointer"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Indicator */}
          <div className="flex items-center gap-3 text-sm tracking-wide text-neutral-400">
            <div className="overflow-hidden flex items-center font-mono">
              <span className="slide-counter-digit font-medium text-white">
                {currentIndex + 1}
              </span>
              <span>/{total}</span>
            </div>
            <span className="text-white/40">What customers say</span>
          </div>
        </div>

        {/* Testimonial Quote — SplitText feeds on this <p> */}
        <div className="min-h-[220px] md:min-h-[190px] overflow-hidden">
          <p
            key={currentIndex}
            ref={quoteRef}
            className="slide-content text-xl md:text-[28px]  font-semibold leading-relaxed text-neutral-100 whitespace-pre-line tracking-tight"
            style={{ visibility: fontsReady ? "visible" : "hidden" }}
          >
            “{current.quote.replace(/^“|”$/g, "")}”
          </p>
        </div>

        {/* Author Details */}
        {/* <div className="mt-8 pt-6">
          <div className="slide-author flex items-center gap-4">
            <div className="h-14 w-14 overflow-hidden rounded-lg border border-white/10 bg-white/5 flex-shrink-0">
              <img
                src={current.avatar}
                alt={current.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-white tracking-wide text-base">
                {current.name}
              </span>
              <span className="text-sm text-neutral-400 font-light">
                {current.role}
              </span>
            </div>
          </div>
        </div> */}
        <div className="mt-8 pt-6">
          <div className="flex items-center gap-4">
            <div
              className="slide-avatar h-14 w-14 overflow-hidden border border-white/10 bg-white/5 flex-shrink-0"
              style={{ borderRadius: "8px" }}
            >
              <img
                src={current.avatar}
                alt={current.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="slide-author flex flex-col">
              <span className="font-semibold text-white tracking-wide text-base">
                {current.name}
              </span>
              <span className="text-sm text-neutral-400 font-light">
                {current.role}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
