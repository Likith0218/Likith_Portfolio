# Likith — Portfolio Website

React + Vite + Tailwind + Framer Motion. Tiny, fast, easy to edit.

## Run
    npm install
    npm run dev        # local preview
    npm run build      # production build -> /dist (deploy to Vercel)

## Update content (99% of the time)
Open `src/data/content.js` — change name, email, links, services, projects.
- Add a project = add one line to `projects`.
- Filter buttons in "Selected work" are created automatically from categories.
- Project images: drop compressed `.webp` files in `public/work/` and set `image: "/work/name.webp"`.

## Change look
- Colours and fonts: top of `src/index.css` (`@theme`).
- Each section = one file in `src/components/`. Add/remove/reorder sections in `src/App.jsx`.
- Reusable scroll animation: wrap anything in `<Reveal>`.

## Keeping it light
- Uses Framer Motion's `LazyMotion` (small bundle), CSS-only marquee.
- No images/videos by default. Use `.webp`, under ~150 KB each. Images are lazy-loaded.
- Animations are turned off for people who set "reduce motion".
