import { services } from "../data/content";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="services" className="bg-brand-blue px-[5.6vw] pb-24 pt-10 text-brand-plum">
      <Reveal>
        <h2 className="font-display text-[14vw] uppercase leading-none md:text-[8vw]">What I do</h2>
      </Reveal>
      <ul className="mt-10 border-t border-brand-plum/30">
        {services.map((s, i) => (
          <li key={s.title} className="group border-b border-brand-plum/30">
            <Reveal delay={i * 0.05} y={24}>
              <div className="flex flex-col gap-2 py-6 transition-all duration-500 md:flex-row md:items-baseline md:gap-10 md:group-hover:pl-6">
                <span className="font-body text-2xl opacity-60">0{i + 1}</span>
                <h3 className="font-display text-4xl uppercase transition-colors group-hover:text-brand-orange md:w-1/2 md:text-6xl">
                  {s.title}
                </h3>
                <p className="max-w-md text-xl md:text-2xl">{s.desc}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
