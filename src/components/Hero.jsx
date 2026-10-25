import { useRef } from "react";
import { m, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { site } from "../data/content";

const letters = "Portfolio".split("");
const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  // t goes 0 -> 1 while the folder grows to fill the screen
  const t = useTransform(scrollYProgress, [0, 0.7], [0, 1], { clamp: true });
  const folderTop = useTransform(t, (v) => `calc(${46.7 * (1 - v)}vh - ${6.3 * v}vw)`);
  const folderLeft = useTransform(t, (v) => `${5.6 * (1 - v)}vw`);
  const titleY = useTransform(scrollYProgress, [0, 0.6], ["0vh", "-25vh"]);
  const fade = useTransform(scrollYProgress, [0.25, 0.6], [1, 0]);

  const parallax = reduce ? {} : { y: titleY, opacity: fade };
  const folderStyle = reduce ? {} : { top: folderTop, left: folderLeft };

  return (
    <header id="top" ref={ref} className={`relative bg-brand-orange ${reduce ? "h-screen" : "h-[220vh]"}`}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Giant title */}
        <m.h1
          style={parallax}
          aria-label="Portfolio"
          className="absolute left-[5.6vw] top-[13vh] flex font-display text-[24vw] leading-[0.95] tracking-[-0.02em] text-white md:text-[15.5vw]"
        >
          {letters.map((l, i) => (
            <span key={i} aria-hidden="true" className="inline-block overflow-hidden pb-[0.04em]">
              <m.span
                className="inline-block"
                initial={{ y: "110%", rotate: 8 }}
                animate={{ y: 0, rotate: 0 }}
                transition={{ duration: 0.9, delay: 0.15 + i * 0.06, ease }}
              >
                {l}
              </m.span>
            </span>
          ))}
        </m.h1>

        {/* Right-side labels */}
        <m.div
          style={parallax}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease }}
          className="absolute right-[5.6vw] top-[26vh] text-right font-body text-[5vw] uppercase leading-[1.05] text-white md:top-[22vh] md:text-[2.4vw]"
        >
          {site.tagline.map((line) => (
            <div key={line}>{line}</div>
          ))}
        </m.div>

        {/* The folder */}
        <m.div
          style={folderStyle}
          className="absolute bottom-0 right-0 top-[46.7vh] left-[5.6vw]"
        >
          <m.div
            className="absolute inset-0"
            initial={{ y: "60%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease }}
          >
            <svg
              className="absolute left-0 top-0 block h-[6.3vw] w-full"
              viewBox="0 0 1359 90"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M480 4H744Q760 4 772 15L846 89H500Z" fill="#7b87df" />
              <path d="M0 90V38Q0 0 38 0H466Q480 0 492 10L560 76Q572 89 590 89H1359V90Z" fill="#a0c3f8" />
            </svg>
            <div className="absolute inset-x-0 bottom-0 top-[6.2vw] bg-brand-blue" />

            <p className="absolute bottom-[5vh] right-[5.6vw] font-body text-[3.4vw] uppercase text-brand-plum md:text-[1.5vw]">
              {site.footerLine}
            </p>
            <div className="bob absolute bottom-[5vh] left-[4vw] font-body text-lg uppercase text-brand-plum">
              Scroll ↓
            </div>
          </m.div>
        </m.div>
      </div>
    </header>
  );
}
