import { m } from "framer-motion";
import { site } from "../data/content";

const links = [
  ["Services", "#services"],
  ["Work", "#work"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

export default function Nav() {
  return (
    <m.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-[5.6vw] py-5 text-white mix-blend-difference"
    >
      <a href="#top" className="font-display text-xl tracking-wide">{site.name.toUpperCase()}</a>
      <ul className="flex gap-5 text-lg uppercase md:gap-8">
        {links.map(([label, href]) => (
          <li key={href}>
            <a href={href} className="relative after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all hover:after:w-full">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </m.nav>
  );
}
