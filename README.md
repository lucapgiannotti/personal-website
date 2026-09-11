# Personal site

This is a static HTML/CSS site served directly by GitHub Pages. No server,
Node.js runtime, or GitHub Actions build is needed for deployment.

## Editing styles

Custom styles live in `styles.css`. Tailwind utilities are generated locally
and checked in as `public/utilities.css`, shared by all four HTML pages.
After adding or changing Tailwind classes or `tailwind.config.cjs`, run:

```sh
npm ci
npm run build
```

Include the generated CSS with your changes. On Windows PowerShell, use
`npm.cmd` if execution policy prevents running `npm`.

## Images

Pages load optimized WebP copies of the original photos: a 1920-pixel-wide
banner and a 320-pixel-wide portrait. Originals are retained in `public/`
for future edits but are not requested by the site. The favicon uses the
existing small PNG.

To preview locally, run `python -m http.server 8000` and open
`http://localhost:8000`.
