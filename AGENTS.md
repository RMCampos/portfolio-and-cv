# AGENTS.md - Portfolio & CV Repository

## Overview

This is a **static HTML resume/portfolio website** with dual-language support (English and Brazilian Portuguese). It includes a web-based resume and a CV generator using RenderCV.

## Project Structure

```
/
├── index.html              # English version (main entry point)
├── index-br.html           # Brazilian Portuguese version
├── css/
│   └── styles.css          # Bootstrap 4.5.3 + custom resume theme (single file)
├── js/
│   └── scripts.js          # jQuery-based smooth scrolling + scrollspy
├── assets/
│   ├── img/
│   │   ├── favicon.ico
│   │   └── profile.jpg     # Resume photo (shown in navbar)
│   └── certificates/       # PDF certificates (not referenced in HTML)
├── cv_generator/
│   ├── commands.md         # Docker commands for RenderCV
│   ├── Ricardo_Campos_CV.yaml  # CV source data (YAML format)
│   └── photo.jpg           # CV photo (separate from website photo)
```

## Key Technologies

- **Bootstrap 4.5.3** - CSS framework (bundled in `styles.css`)
- **jQuery** - Loaded from CDN via Font Awesome script
- **Font Awesome 5.15.1** - Icons (loaded from CDN)
- **Google Fonts** - Saira Extra Condensed, Muli
- **RenderCV** - YAML-to-PDF CV generator (Docker-based)

## Dual Language Support

The site maintains two parallel HTML files:
- `index.html` - English content, links to `/index-br.html` for Portuguese
- `index-br.html` - Portuguese content, links to `/` for English

**Important**: Changes to structure, styling, or content should typically be mirrored in both files. The navigation sections differ slightly between versions (e.g., different section IDs: `#summary` vs `#about`).

## CSS Architecture

`css/styles.css` is a monolithic file containing:
1. Bootstrap 4.5.3 source (lines 1-41 contains Bootstrap variables/overrides)
2. Custom resume theme styles

**Primary color**: `#00b894` (teal/green) - set as `--primary` CSS variable
**Font families**: Saira Extra Condensed (headings), Muli (body)

## Navigation Structure

Both pages use a fixed side navbar (`#sideNav`) with smooth scrolling to sections:

- `#summary` / `#about` - About/personal info
- `#experience` - Work history
- `#education` - Education
- `#skills` - Skills
- `#interests` - Interests
- `#awards` - Certifications

The navbar collapses on mobile (`navbar-collapse`).

## JavaScript Behavior

`js/scripts.js` implements:
- **Smooth scrolling** - jQuery easing animation (1s duration) for anchor links with class `js-scroll-trigger`
- **Mobile menu collapse** - Closes navbar when scroll link clicked
- **Scrollspy** - Activates navbar items based on scroll position (targets `#sideNav`)

## CV Generator (RenderCV)

Location: `cv_generator/`

Uses [RenderCV](https://github.com/rendercv/rendercv) to generate PDF CV from YAML.

### Commands (from `commands.md`)

```bash
# Create new CV file (not needed - file exists)
docker run --user "$(id -u):$(id -g)" \
  -v "$PWD":/work \
  -w /work \
  ghcr.io/rendercv/rendercv:latest new "Ricardo Campos"

# Render YAML to PDF
docker run --user "$(id -u):$(id -g)" \
  -v "$PWD":/work \
  -v /tmp/rendercv-cache:/root/.cache \
  -w /work \
  ghcr.io/rendercv/rendercv:latest render "Ricardo_Campos_CV.yaml"

# If permissions issues, fix with:
chmod 777 "$PWD"
```

The rendered PDF is hosted externally at `ricardocampos.blog` - the HTML links to these PDFs, they are not stored in this repo.

## Editing Guidelines

### Content Updates

1. **Resume content**: Edit `index.html` (English) and `index-br.html` (Portuguese) in parallel
2. **CV content**: Edit `cv_generator/Ricardo_Campos_CV.yaml`, then re-render with Docker

### HTML Structure Pattern

Each section follows this pattern:
```html
<section class="resume-section" id="section-id">
  <div class="resume-section-content">
    <h2 class="mb-5">Section Title</h2>
    <!-- Content here -->
  </div>
</section>
<hr class="m-0" />
```

### Experience Entry Pattern

```html
<div class="d-flex flex-column flex-md-row justify-content-between mb-5">
  <div class="flex-grow-1">
    <h3 class="mb-0">Job Title</h3>
    <div class="subheading mb-3">
      <a href="company-url">Company</a>, Location
    </div>
    <p>Description...</p>
    <ul class="fa-ul mb-0">
      <li><span class="fa-li"><i class="fas fa-check"></i></span>Skill/Technology</li>
    </ul>
  </div>
  <div class="flex-shrink-0"><span class="text-primary">Date Range</span></div>
</div>
```

## No Build Process

This is a **static site with no build step**. To preview:

```bash
# Simple HTTP server
python3 -m http.server 8000
# or
npx serve .
```

Then open http://localhost:8000

## Image Assets

- `assets/img/profile.jpg` - Used in website navbar (appears as circular avatar)
- `cv_generator/photo.jpg` - Used in PDF CV (may be different from website photo)
- Update both when changing profile photo

## Adding Certificates

Certificates in `certificates/` folder are not currently displayed on the website. To add them:
1. Add PDF to `certificates/`
2. Update the `#awards` section in both HTML files with a link

## External Dependencies (CDNs)

- Font Awesome: `https://use.fontawesome.com/releases/v5.15.1/js/all.js`
- Google Fonts: Saira Extra Condensed, Muli

These are loaded in `<head>` of both HTML files. If updating versions, update both files.

## Common Tasks

| Task | How |
|------|-----|
| Update job experience | Edit both HTML files, section `#experience` |
| Update CV | Edit `cv_generator/Ricardo_Campos_CV.yaml`, run Docker render command |
| Change profile photo | Update `assets/img/profile.jpg` and `cv_generator/photo.jpg` |
| Update skills | Edit `#skills` section in both HTML files |
| Add certificate | Add PDF to `certificates/`, update `#awards` sections |

## Git Notes

Repository contains large binary files (PDFs, images). The `cv_generator/` output (PDFs) should NOT be committed - the rendered PDFs are hosted externally.
