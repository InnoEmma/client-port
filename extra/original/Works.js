import asa from "../extra/asa.mp4";
import Click from "../extra/Click.mp4";
import radom from "../extra/radom.jfif";
import me from '../extra/me.jfif'

function LoopingVideo({ speed = 1.5, src, className = "" }) {
  return (
    <video
      className={`w-full h-full object-contain rounded-2xl ${className}`}
      src={src}
      autoPlay
      loop
      muted
      playsInline
      onLoadedMetadata={(e) => {
        e.currentTarget.playbackRate = speed;
        e.currentTarget.defaultPlaybackRate = speed;
      }}
    />
  );
}

function Works() {
  return (
    <div className="w-full">
      <div className="max-w-full mx-auto px-6 md:px-6 my-24 md:my-40">
        <div>
          <h2 className="text-midnight text-[38px] md:text-[44px] font-semibold leading-tight">
            Selected Works
          </h2>
          <p className="font-medium text-[18px] md:text-[20px] leading-7 text-plum-gray flex flex-col mt-6">
            <span>Processes from positioning to launch, from hospitality</span>
            <span>to tech. Brand strategy, identity, and websites.</span>
          </p>
        </div>

        {/* Asymmetrical Staggered Grid */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-16 md:gap-y-28 items-start">
          {/* Card 1: Left - Narrower & Taller (5 cols, pushed down for staggered start) */}
          <div className="md:col-span-5 md:mt-20 group cursor-pointer">
            <div className="w-full aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-100 shadow-sm">
              <img
                src={me}
                alt="Product management"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-5 space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[14px]  font-semibold  border-gray-500 border text-neutral-600 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span>
                Product Management
              </span>
              <h3 className="text-xl md:text-2xl font-semibold text-midnight leading-snug">
                End-to-end ops + product support during a major launch
              </h3>
            </div>
          </div>

          {/* Card 2: Right - Wider & Fatter (7 cols, starts right at top) */}
          <div className="md:col-span-7 group cursor-pointer">
            <div className="relative w-full aspect-video overflow-hidden rounded-2xl bg-neutral-900 shadow-sm">
              <LoopingVideo
                src={Click}
                speed={1.2}
                className="transition-transform duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute bottom-3 right-3 z-10 h-9 w-35 rounded bg-white/75 backdrop-blur-sm" />
            </div>

            <div className="mt-5 space-y-2">
              <span className="inline-flex items-center rounded-full gap-1.5 px-3 py-1 text-[14px]  font-semibold  border-gray-500 border text-neutral-600">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span>
                Operation Management
              </span>
              <h3 className="text-xl md:text-2xl font-semibold text-midnight leading-snug">
                Streamlined workflows, managed cross-functional teams, and drove
                operational efficiency at Mopel Technology
              </h3>
            </div>
          </div>

          {/* Card 3: Left - Flips to Wider (7 cols) */}

          <div className="md:col-span-7 group cursor-pointer">
            <div className="w-full aspect-video overflow-hidden rounded-2xl bg-neutral-900 shadow-sm">
              <LoopingVideo
                src={asa}
                speed={1.7}
                className="transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-5 space-y-2">
              <span className="inline-flex items-center rounded-full gap-1.5 px-3 py-1 text-[14px]  font-semibold  border-gray-500 border text-neutral-600">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span>
                Virtual assistance
              </span>
              <h3 className="text-xl md:text-2xl font-semibold text-midnight leading-snug">
                Resolved customer inquiries, tracked transactions, and supported
                seamless remote operations at Proxchange
              </h3>
            </div>
          </div>

          {/* Card 4: Right - raised to the marked + position */}
          <div className="md:col-span-5 md:-mt-74 group cursor-pointer">
            <div className="w-full aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-100 shadow-sm">
              <img
                src={radom}
                alt="Certifications"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gray-100/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
            <div className="mt-5 space-y-2">
              <span className="inline-flex items-center rounded-full gap-1.5 px-3 py-1 text-[14px]  font-semibold  border-gray-500 border text-neutral-600">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span>
                Certifications
              </span>
              <h3 className="text-xl md:text-2xl font-semibold text-midnight leading-snug">
                My certifications &amp; credentials
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;