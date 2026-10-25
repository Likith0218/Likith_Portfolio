import { site } from "../data/content";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <footer id="contact" className="bg-brand-orange px-[5.6vw] pb-10 pt-24 text-white">
      <Reveal>
        <p className="text-2xl uppercase">Have a project?</p>
        <a
          href={`mailto:${site.email}`}
          className="mt-2 block font-display text-[13vw] uppercase leading-[0.95] transition-colors hover:text-brand-plum md:text-[9vw]"
        >
          Let’s talk →
        </a>
        <p className="mt-4 text-3xl">{site.email}</p>
      </Reveal>
      <div className="mt-16 flex flex-wrap justify-between gap-4 border-t border-white/40 pt-6 text-xl uppercase">
        <div className="flex gap-6">
          {site.socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="hover:underline">
              {s.label}
            </a>
          ))}
        </div>
        <span>© {new Date().getFullYear()} {site.name}</span>
      </div>
    </footer>
  );
}
