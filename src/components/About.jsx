import { m } from "framer-motion";
import { site, why } from "../data/content";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="bg-brand-plum px-[5.6vw] py-24 text-white">
      <div className="grid items-center gap-12 md:grid-cols-[1fr_1.4fr]">
        {site.photo && (
          <m.img
            src={site.photo}
            alt={site.name}
            loading="lazy"
            decoding="async"
            initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
            whileHover={{ rotate: 0, scale: 1.03 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="aspect-[4/5] w-full max-w-md rounded-3xl border-4 border-brand-blue object-cover"
          />
        )}
        <div>
          <Reveal>
            <h2 className="font-display text-[14vw] uppercase leading-none md:text-[6vw]">Why work with me</h2>
          </Reveal>
          <div className="mt-8 grid gap-4">
            {why.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.1}>
                <div className="rounded-3xl border border-white/25 p-6 transition-colors hover:bg-white/10">
                  <h3 className="font-display text-2xl uppercase">
                    <span className="text-brand-orange">0{i + 1}</span> {w.title}
                  </h3>
                  <p className="mt-1 text-xl text-white/80">{w.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
