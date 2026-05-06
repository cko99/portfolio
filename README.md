# Luqman Latif — GIS Portfolio

**Personal portfolio website for a Geomatic Engineer & GIS Analyst.**
Built with pure HTML, CSS, and JavaScript. No frameworks, no dependencies.

---

## Tech Stack

| Layer      | Technology                         |
|------------|------------------------------------|
| Markup     | HTML5 (semantic)                   |
| Styling    | CSS3 (custom properties, grid, flex) |
| Scripting  | Vanilla JavaScript (ES6+)          |
| Fonts      | Syne + Space Mono (Google Fonts)   |
| Maps       | Google Maps Embed API              |

---

## Project Structure

```
luqman-portfolio/
│
├── index.html          # Main entry point (modular, semantic HTML)
├── style.css           # All styles — organized by section
├── script.js           # Navigation, animations, form logic
├── README.md
│
├── images/
│   ├── profile/        # luqman-profile.jpg
│   ├── outputs/        # spatial-analysis.jpg, hotspot-density.jpg,
│   │                   # critical-zone.jpg, dashboard.jpg, terrain-3d.jpg
│   ├── projects/       # fire-hotspot.jpg, crime-dashboard.jpg,
│   │                   # spatial-database.jpg, critical-zone.jpg,
│   │                   # weather-transport.jpg
│   ├── logos/          # qgis.png, arcgis.png, postgis.png,
│   │                   # postgresql.png, python.png, streamlit.png,
│   │                   # autocad.png, gee.png
│   ├── certificates/   # python-cert.jpg, sql-cert.jpg, gis-cert.jpg,
│   │                   # dataviz-cert.jpg, postgis-cert.jpg,
│   │                   # remote-sensing-cert.jpg
│   └── ui/             # hero-heatmap.jpg
│
└── assets/
    ├── cv/             # luqman-latif-cv.pdf
    └── docs/           # Any supporting documents
```

---

## Adding Your Images

All image paths use **local references** — no external placeholder services.

1. Drop your images into the correct `/images/` subfolder
2. Use the exact filenames listed in the structure above
3. If an image is missing, the UI degrades gracefully (element hidden or emoji fallback)

**Recommended formats:** `.jpg` for photos, `.png` for logos (with transparency)

---

## Local Development

No build step needed. Just open the file directly:

```bash
# Option 1 — Direct browser open
open index.html

# Option 2 — Local dev server (recommended to avoid CORS on fonts)
npx serve .
# or
python -m http.server 8080
```

---

## Deployment — GitHub Pages

```bash
# 1. Create a new GitHub repo named: luqman-portfolio

# 2. Push all files
git init
git add .
git commit -m "Initial portfolio release"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/luqman-portfolio.git
git push -u origin main

# 3. Enable GitHub Pages
# Repo Settings → Pages → Source: Deploy from branch → Branch: main / root
```

Your portfolio will be live at:
`https://YOUR_USERNAME.github.io/luqman-portfolio/`

---

## Customization Checklist

- [ ] Replace `luqman@email.com` with your real email in `index.html`
- [ ] Replace `+60 11-XXXX XXXX` with your real phone number
- [ ] Update GitHub / LinkedIn / Fiverr URLs in the sidebar socials
- [ ] Add `luqman-latif-cv.pdf` to `assets/cv/`
- [ ] Add profile photo to `images/profile/luqman-profile.jpg`
- [ ] Add project screenshots to `images/projects/`
- [ ] Add certificate images to `images/certificates/`
- [ ] Add tool logos to `images/logos/`
- [ ] Update Google Maps embed with your actual location if needed

---

## Design System

| Token           | Value              | Usage                      |
|-----------------|--------------------|----------------------------|
| `--bg`          | `#0b0f19`          | Page background            |
| `--surface`     | `#111a26`          | Cards, sidebar             |
| `--accent`      | `#a3b18a`          | Primary accent (green)     |
| `--orange`      | `#dda15e`          | Secondary accent (orange)  |
| `--text`        | `#6e7f94`          | Body text                  |
| `--text-heading`| `#cdd5e0`          | Headings                   |

All design tokens are in the `:root` block at the top of `style.css`.

---

## Pages

| Page     | ID             | Description                                 |
|----------|----------------|---------------------------------------------|
| Home     | `page-home`    | Hero map + key outputs + project highlights |
| About    | `page-about`   | Bio + services + workflow pipeline          |
| Projects | `page-projects`| All project cards with tech stack           |
| Skills   | `page-skills`  | Animated skill bars + certificates          |
| Tools    | `page-tools`   | Tool/software grid with logos               |
| Contact  | `page-contact` | Contact form + map embed + social links     |

---

## License

MIT — free to use and modify for personal and commercial projects.
