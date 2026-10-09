# craftandcode.be

Website of Craft and Code, built with [Astro](https://astro.build) and Tailwind CSS v4.
The output is plain static HTML, deployed to GitHub Pages.

## Development

Requires Node.js 22.12 or newer.

```bash
npm install
npm run dev       # local dev server on http://localhost:4321
npm run build     # static build in dist/
npm run preview   # serve the build locally
```

## Structure

```
public/                             Copied as-is (CNAME, llms.txt)
src/
  content.config.ts                 Schema for the region pages
  content/regions/*.md              One file per region page
  data/site.ts                      Shared content: services, FAQ, work area, contact
  data/schema.ts                    JSON-LD helpers
  layouts/Base.astro                <head>, consent, GTM, header, footer
  components/                       Header and contact/footer
  pages/index.astro                 Homepage
  pages/webdeveloper-[region].astro Region page template
  styles/global.css                 Tailwind import and brand theme
```

## Region pages

Each Markdown file in `src/content/regions/` becomes `/webdeveloper-<file-name>/`.
`mechelen.md` is an example and stays a draft.

To publish a region:

1. Copy `mechelen.md`, rename it (e.g. `lier.md`) and write content specific to that city.
2. Set `draft: false`.
3. The page is built and added to the sitemap, and the matching city chip in the
   "Werkgebied" section on the homepage becomes a link automatically.

Pages that only swap the city name are treated as doorway pages by Google.
Only publish a region once it has real, city-specific content.

## Deployment

`.github/workflows/deploy.yml` builds and deploys on every push to `main`.
In the repository settings, set Pages > Build and deployment > Source to **GitHub Actions**.
