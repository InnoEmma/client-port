
import shape5 from "../extra/shape5.svg";
import { useState, useRef, useEffect, useCallback } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ArrowLeft, ArrowRight } from "lucide-react";

import prox from "../extra/prox.jpg";
import mop from "../extra/mop.png";
import noface from "../extra/noface.jpg";

gsap.registerPlugin(useGSAP, SplitText);

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Joan not only handled the day-to-day admin, but she was also incredibly smart about our operational workflows. As a result, my business is not just organized, but she truly protects my time. Everything was picked up instantly, communication was concise, and I could finally focus on growth. Highly recommended",
    name: "Health care operation partener",
    role: "Private Hospital Network",
    avatar: noface,
  },
  {
    id: 2,
    quote:
      "We have been working together for over a year now. Joan anticipates what I need before I even ask, and she completely overhauled our backend operations without missing a beat. She filters the noise so I can focus entirely on growth. With Joan handling the day-to-day, I know everything is in good hands.",
    name: "P. A",
    role: "Founder, ProXchange",
    avatar: prox,
  },
  {
    id: 3,
    quote:
      "Joan works professionally and with an eye for detail. You notice the passion for the work: she doesn't just think about how a task gets done, but also about why it matters to the business. That commitment sets her apart from the rest",
    name: "VA Team Leader",
    role: "Mopel technology",
    avatar: mop,
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [fontsReady, setFontsReady] = useState(false);

  const containerRef = useRef(null);
  const quoteRef = useRef(null);
  const splitRef = useRef(null);
  const linesRef = useRef([]);
  const isAnimating = useRef(true);
  const autoPlayRef = useRef(null);
  const shapeRef = useRef(null);

  const total = TESTIMONIALS.length;
  const current = TESTIMONIALS[currentIndex];

  useEffect(() => {
    let alive = true;
    const done = () => alive && setFontsReady(true);
    if (document.fonts?.ready) document.fonts.ready.then(done);
    else done();
    return () => {
      alive = false;
    };
  }, []);

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
        duration: 0.35,
        ease: "expo.in",
        stagger: { each: 0.045, from: dir > 0 ? "start" : "end" },
      })
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

  useGSAP(() => {
    if (!shapeRef.current) return;
    gsap.to(shapeRef.current, {
      xPercent: -25,
      duration: 70,
      ease: "none",
      repeat: -1,
    });
  }, []);

  const handleNext = useCallback(() => requestChange(1), [requestChange]);
  const handlePrev = useCallback(() => requestChange(-1), [requestChange]);

  useEffect(() => {
    if (!fontsReady) return;
    autoPlayRef.current = setTimeout(() => {
      handleNext();
    }, 4000);
    return () => clearTimeout(autoPlayRef.current);
  }, [currentIndex, fontsReady, handleNext]);

  useGSAP(
    () => {
      if (!fontsReady || !quoteRef.current) return;
      isAnimating.current = true;

      const split = SplitText.create(quoteRef.current, {
        type: "lines",
        linesClass: "st-line",
      });

      splitRef.current = split;

      split.lines.forEach((line) => {
        const mask = document.createElement("span");
        mask.className = "st-mask";
        line.parentNode.insertBefore(mask, line);
        mask.appendChild(line);
      });

      linesRef.current = split.lines;

      const tl = gsap.timeline({
        defaults: { ease: "expo.out" },
        onComplete: () => {
          isAnimating.current = false;
        },
      });

      tl.fromTo(
        ".slide-counter-digit",
        { y: direction * 14, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.35 },
        0,
      )
        .fromTo(
          split.lines,
          { yPercent: direction * 115 },
          {
            yPercent: 0,
            duration: 0.65,
            stagger: {
              each: 0.08,
              from: direction > 0 ? "start" : "end",
            },
          },
          0.05,
        )
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
        splitRef.current = null;
        linesRef.current = [];
      };
    },
    { dependencies: [currentIndex, fontsReady], scope: containerRef },
  );

  return (
    <div className="overflow-hidden relative min-h-screen w-full flex items-center justify-center p-4 md:p-10 select-none">
      <style>{`
      .st-mask {
        display: block;
        overflow: hidden;
        padding-bottom: 0.16em;
        margin-bottom: -0.16em;
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
        ref={shapeRef}
        className="absolute top-1/2 -translate-y-1/2 left-0 flex w-max"
      >
        {[0, 1, 2, 3].map((i) => (
          <img
            key={i}
            src={shape5}
            alt=""
            draggable={false}
            className="block shrink-0 h-[40vh] w-auto"
          />
        ))}
      </div>

      {/* Main purple card */}
      <div
        ref={containerRef}
        className="overflow-hidden relative w-full max-w-[1020px] min-h-[600px] md:min-h-[680px] flex flex-col justify-start rounded-[36px] bg-[#140018] text-white py-16 px-8 md:py-20 md:px-14"
      >
        {/* Top navigation row */}
        <div className="flex items-center justify-between md:justify-start gap-10 md:gap-14 mb-12 md:mb-16">
          {/* DESKTOP ARROWS: Hidden on mobile (hidden md:flex) */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={handlePrev}
              aria-label="Previous Testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/20 text-white/80 transition-colors hover:border-white/70 hover:text-white active:scale-95 cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4 stroke-[1.5]" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/20 text-white/80 transition-colors hover:border-white/70 hover:text-white active:scale-95 cursor-pointer"
            >
              <ArrowRight className="h-4 w-4 stroke-[1.5]" />
            </button>
          </div>

          <div className="flex items-center gap-6 text-[15px] font-normal tracking-wide">
            <div className="flex items-center text-white/50">
              <span className="slide-counter-digit font-semibold text-white/90">
                {currentIndex + 1}
              </span>
              <span className="mx-1.5 text-white/35">/</span>
              <span className="text-white/35">{total}</span>
            </div>
            <span className="text-white/45 text-[18px] md:text-[20px]">
              What customers say
            </span>
          </div>
        </div>

        {/* Indented Content: Quote + Author right below it */}
        <div className="pl-0 md:pl-[144px]">
          {/* Quote */}
          <div className="overflow-hidden">
            <p
              key={currentIndex}
              ref={quoteRef}
              className="text-[25px] sm:text-[28px] md:text-[34px] leading-[1.3] font-semibold text-neutral-100 tracking-[-0.03em] whitespace-pre-line max-w-[760px]"
              style={{ visibility: fontsReady ? "visible" : "hidden" }}
            >
              {current.quote}
            </p>
          </div>

          {/* Author Details + Mobile Arrows */}
          <div className="mt-8 md:mt-10 flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="slide-avatar h-14 w-14 rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 flex-shrink-0">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="slide-author flex flex-col justify-center">
                <span className="text-[17px] font-semibold text-white tracking-tight leading-tight">
                  {current.name}
                </span>
                <span className="text-[17px] font-semibold text-white/50 leading-normal">
                  {current.role}
                </span>
              </div>
            </div>

            {/* MOBILE ARROWS: Hidden on desktop, shown at bottom on mobile (flex md:hidden) */}
            <div className="flex md:hidden items-center gap-2 mt-2">
              <button
                onClick={handlePrev}
                aria-label="Previous Testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/20 text-white/80 transition-colors hover:border-white/70 hover:text-white active:scale-95 cursor-pointer"
              >
                <ArrowLeft className="h-4 w-4 stroke-[1.5]" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/20 text-white/80 transition-colors hover:border-white/70 hover:text-white active:scale-95 cursor-pointer"
              >
                <ArrowRight className="h-4 w-4 stroke-[1.5]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
