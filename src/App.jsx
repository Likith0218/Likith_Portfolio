import { LazyMotion, domAnimation } from "framer-motion";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Marquee from "./components/Marquee";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";

// To add/remove a section: add/remove a line below + create a component.
// All text, projects and links live in src/data/content.js
export default function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Marquee />
        <Work />
        <About />
        <Contact />
      </main>
    </LazyMotion>
  );
}
