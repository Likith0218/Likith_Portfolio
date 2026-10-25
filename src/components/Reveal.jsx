import { m } from "framer-motion";

// Reusable scroll-reveal wrapper. Wrap anything in <Reveal> to fade/slide it in.
export default function Reveal({ children, delay = 0, y = 40, className = "" }) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </m.div>
  );
}
