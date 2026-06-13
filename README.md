# MB Aukuris Lithuania

Astro clone of [aukuris.lt](https://aukuris.lt/), deployed to GitHub Pages.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) to preview the site locally.

## Build

```bash
npm run build
npm run preview
```

## GitHub Pages deployment

The site deploys automatically on push to `main` via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

**Live URL:** [https://aukuris.lt](https://aukuris.lt)

### First-time setup

1. Push this repo to GitHub (`stvigamed/aukuris`).
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Under **Custom domain**, enter `aukuris.lt` and enable **Enforce HTTPS** once DNS is verified.
5. Configure DNS at your domain registrar:
   - **A records** pointing to GitHub Pages IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Or a **CNAME** record: `www` → `stvigamed.github.io` (if using `www.aukuris.lt`)
6. After the first workflow run, the site is available at the URL above.

The [`public/CNAME`](public/CNAME) file tells GitHub Pages to serve the site at the custom domain.

## Project structure

```
src/
  layouts/        # HTML shell, global styles, AOS init
  pages/          # Route pages (index.astro)
  components/     # Header, HeroSection, ProductsSection, ContactForm, Footer
  data/           # Product image paths
  styles/         # Global CSS ported from the original site
public/
  assets/         # Images, logos, favicons
  CNAME           # Custom domain for GitHub Pages
  .nojekyll       # Disables Jekyll so _astro/ assets are served
```

## Contact form

The contact form sends submissions to Telegram via the Bot API (same behavior as the original site). The bot token is embedded in client-side code, which is required for static hosting on GitHub Pages.
