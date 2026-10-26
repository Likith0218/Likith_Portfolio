import { useMemo, useState } from "react";
import { m } from "framer-motion";
import { projects } from "../data/content";
import Reveal from "./Reveal";

const bg = {
  orange: "bg-brand-orange text-white",
  blue: "bg-brand-blue text-brand-plum",
  indigo: "bg-brand-indigo text-white",
  plum: "bg-brand-plum text-white",
};

export default function Work() {
  const cats = useMemo(() => ["All", ...new Set(projects.map((p) => p.category))], []);
  const [active, setActive] = useState("All");
  const shown = projects.filter((p) => active === "All" || p.category === active);

  return (
    <section id="work" className="bg-brand-cream px-[5.6vw] py-24 text-brand-plum">
      <Reveal>
        <h2 className="font-display text-[14vw] uppercase leading-none md:text-[8vw]">Selected work</h2>
      </Reveal>

      <div className="mt-8 flex flex-wrap gap-3">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`rounded-full border-2 border-brand-plum px-5 py-1 text-xl uppercase transition-colors ${active === c ? "bg-brand-plum text-white" : "hover:bg-brand-plum/10"
              }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((p, i) => {
          const Tag = p.link ? "a" : "div";
          return (
            <m.div
              key={p.title + active}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, rotate: -0.6 }}
            >
              <Tag
                {...(p.link ? { href: p.link, target: "_blank", rel: "noreferrer" } : {})}
                className={`group relative block aspect-[4/3] overflow-hidden rounded-3xl p-6 ${bg[p.color] ?? bg.blue}`}
              >
                {p.image && (
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex justify-between text-xl uppercase">
                    <span>{p.category}</span>
                    <span>{p.year}</span>
                  </div>
                  <div className="flex items-end justify-between">
                    <h3 className="font-display text-4xl uppercase leading-none md:text-5xl pb-12">{p.title}</h3>
                    <span className="text-4xl transition-transform duration-300 group-hover:-rotate-45 pb-12">→</span>
                  </div>
                </div>
              </Tag>
            </m.div>
          );
        })}
      </div>
    </section>
  );
}
