# MB Aukuris Lithuania

React clone of [aukuris.lt](https://aukuris.lt/), built with Vite and deployed to GitHub Pages.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to preview the site locally.

## Build

```bash
npm run build
npm run preview
```

## GitHub Pages deployment

The site deploys automatically on push to `main` or `master` via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

**Live URL:** [https://vborisok.github.io/](https://vborisok.github.io/)

### First-time setup

1. Push this repo to GitHub (`vborisok/vborisok.github.io`).
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. After the first workflow run, the site is available at the URL above.

### Switching to a custom domain later

To use `aukuris.lt` instead, add `public/CNAME` with `aukuris.lt`, set `base: '/'` in `vite.config.js`, and configure DNS in GitHub Pages settings.

## Project structure

```
src/
  components/     # Header, HeroSection, ProductsSection, ContactForm, Footer
  data/           # Product image paths
  styles/         # Global CSS ported from the original site
public/
  assets/         # Images, logos, favicons
```

## Contact form

The contact form sends submissions to Telegram via the Bot API (same behavior as the original site). The bot token is embedded in client-side code, which is required for static hosting on GitHub Pages.
