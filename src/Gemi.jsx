// Importing your local SVG assets (these import as URL strings)
import Asana from "../extra/Asana.svg";
import ClickUp from "../extra/ClickUp.svg";
import Chatgpt from "../extra/Chatgpt.svg";
import Calendly from "../extra/Calendly.svg";
import Notion from "../extra/Notion.svg";
import Slack from "../extra/Slack.svg";

// Map the imported URLs to your brand data
const BRAND_LOGOS = [
  { name: "ClickUp", src: ClickUp },
  { name: "Notion", src: Notion },
  { name: "Slack", src: Slack },
  { name: "Asana", src: Asana },
  { name: "Calendly", src: Calendly },
  { name: "ChatGPT", src: Chatgpt },
];

export default function Gemi({ speed = "48s", bgColor = "#0a030f" }) {
  // Two identical halves — the track translates exactly -50% for a seamless loop.
  const track = [...BRAND_LOGOS, ...BRAND_LOGOS];

  return (
    <section
      className="relative w-full overflow-hidden py-14 sm:py-20"
      style={{ backgroundColor: bgColor }}
      aria-label="Integrations"
    >
      <style>{`
        @keyframes gemi-marquee {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(-50%, 0, 0); }
        }
        .gemi-track {
          animation: gemi-marquee var(--gemi-speed, 48s) linear infinite;
          will-change: transform;
          backface-visibility: hidden;
        }
  
        @media (prefers-reduced-motion: reduce) {
          .gemi-track {
            animation: none;
            flex-wrap: wrap;
            justify-content: center;
            width: 100%;
          }
          .gemi-viewport {
            -webkit-mask-image: none;
            mask-image: none;
          }
        }
      `}</style>
      {/* .gemi-viewport:hover .gemi-track,
        .gemi-viewport:focus-within .gemi-track {
          animation-play-state: paused;
        } */}

      <div
        className="gemi-viewport relative overflow-hidden"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, #000 14%, #000 86%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, #000 14%, #000 86%, transparent 100%)",
        }}
      >
        <div
          className="gemi-track flex w-max"
          style={{ "--gemi-speed": speed }}
        >
          {track.map((brand, i) => {
            const isClone = i >= BRAND_LOGOS.length;
            return (
              <div
                key={`${brand.name}-${i}`}
                aria-hidden={isClone || undefined}
                className="group flex shrink-0 items-center gap-3 px-7 sm:px-12"
              >
                {/* 
                  We use an <img> tag here because the SVG imports are URL strings.
                  The `brightness-0 invert` classes turn any SVG (black, colored, etc.) 
                  into pure white. The `opacity-40` makes it dim, and it transitions 
                  to `opacity-100` on hover.
                */}
                <img
                  src={brand.src}
                  alt={`${brand.name} logo`}
                  className="h-5 w-5 shrink-0 object-contain opacity-40 brightness-0 invert transition-opacity duration-500 ease-out group-hover:opacity-100 sm:h-[45px] sm:w-[45px]"
                />
                <span className="whitespace-nowrap text-[12px] font-medium uppercase tracking-[0.18em] text-white/35 transition-colors duration-500 ease-out group-hover:text-white/90 sm:text-[13px]">
                  {brand.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
