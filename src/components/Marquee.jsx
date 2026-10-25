import { site } from "../data/content";

export default function Marquee() {
  const text = [...site.tagline, "FREELANCE", "CREATIVE"];
  const row = (
    <>
      {text.map((t) => (
        <span key={t} className="mx-6 font-display text-[9vw] uppercase leading-none md:text-[5vw]">
          {t} <span className="text-brand-plum">✺</span>
        </span>
      ))}
    </>
  );
  return (
    <div className="marquee overflow-hidden bg-brand-orange py-6 text-white" aria-hidden="true">
      <div className="marquee-track flex w-max whitespace-nowrap">
        {row}
        {row}
      </div>
    </div>
  );
}
