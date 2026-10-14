import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";
import PageIntro from "./PageIntro";
import Services from "./Services";
import TestimonialSlider from "./TestimonialSlider";
import HandyToKnow from "./HandyToKnow";
import Footer from "./Footer";
import Works from "./Works";

// import BrandMarquee from "./BrandMarquee";

import { useLenis } from "lenis/react";

// Register GSAP ScrollTrigger once at module scope
gsap.registerPlugin(ScrollTrigger);

function App() {
  const lenis = useLenis();
  const scrollToContact = () => {
    lenis?.scrollTo("#contact", {
      duration: 1.2,
      easing: (t) =>
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
    });
  };

  const lenisRef = useRef(null);

  useEffect(() => {
    // Connect GSAP ticker to Lenis RAF loop without blocking on mount
    const update = (time) => {
      lenisRef.current?.lenis?.raf(time * 1000);
    };

    gsap.ticker.add(update);
    // gsap.ticker.lagSmoothing(0);
    gsap.ticker.lagSmoothing(500, 33);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis root ref={lenisRef} options={{ autoRaf: false, duration: 1.4 }}>
      {" "}
      {/*duration: 1.3  */}
      <PageIntro scrollToContact={scrollToContact}  />
      <Works />
      <Services scrollToContact={scrollToContact} />
      {/* Temporary spacer so you can test scrolling immediately */}
      {/* <div style={{ height: "200vh", background: "#f0f0f0" }}>
        <h2 className="p-10 text-2xl font-bold text-black">Content below the fold</h2>
      </div> */}
      {/* <div style={{ height: "200vh", background: "#f0f0f0" }}></div> */}
      <TestimonialSlider />
      <HandyToKnow />
      <Footer />
    </ReactLenis>
  );
}

export default App;
