# Ricardo Campos - Portfolio & CV

A static HTML resume website with dual-language support (English and Brazilian Portuguese) and a YAML-based CV generator.

# Live page

Please see it here: https://rmcampos.github.io/portfolio-and-cv/

## Overview

This repository contains:
- **Web Resume**: A responsive, single-page resume website built with Bootstrap 4.5.3
- **CV Generator**: Docker-based PDF generation using [RenderCV](https://github.com/rendercv/rendercv)
- **Certificates**: Professional certifications and course completions

## Project Structure

```
/
├── index.html              # English version
├── index-br.html           # Brazilian Portuguese version
├── css/
│   └── styles.css          # Bootstrap 4.5.3 + custom styles
├── js/
│   └── scripts.js          # Smooth scrolling, scrollspy
├── assets/
│   ├── img/
│   │   ├── favicon.ico
│   │   └── profile.jpg     # Profile photo
│   └── certificates/       # PDF certificates
├── cv_generator/
│   ├── commands.md         # Docker commands for CV generation
│   ├── Ricardo_Campos_CV.yaml  # CV data source
│   └── photo.jpg           # CV photo
└── README.md
```

## Features

- **Responsive Design**: Mobile-first with collapsible navigation
- **Dual Language**: English (`index.html`) and Portuguese (`index-br.html`)
- **Smooth Scrolling**: jQuery-powered anchor navigation
- **Print Ready**: CSS optimized for PDF generation via browser print
- **CV Generation**: YAML-based CV with Docker-rendered PDF output

## Technologies

- **Frontend**: HTML5, CSS3, Bootstrap 4.5.3, jQuery
- **Icons**: Font Awesome 5.15.1
- **Fonts**: Saira Extra Condensed, Muli (Google Fonts)
- **CV**: RenderCV (YAML to PDF via Docker)

## Quick Start

### View Locally

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js
npx serve .

# Then open http://localhost:8000
```

### Generate CV PDF

```bash
cd cv_generator

# Render CV to PDF
docker run --user "$(id -u):$(id -g)" \
  -v "$PWD":/work \
  -v /tmp/rendercv-cache:/root/.cache \
  -w /work \
  ghcr.io/rendercv/rendercv:latest render "Ricardo_Campos_CV.yaml"
```

See `cv_generator/commands.md` for more details.

## Content Updates

### Update Resume

1. Edit `index.html` for English content
2. Edit `index-br.html` for Portuguese content
3. Keep both files synchronized for consistency

### Update CV

1. Edit `cv_generator/Ricardo_Campos_CV.yaml`
2. Run the Docker render command above
3. The generated PDF will be in `cv_generator/rendercv_output/`

### Update Profile Photo

Replace both files:
- `assets/img/profile.jpg` (for website)
- `cv_generator/photo.jpg` (for CV PDF)

## Sections

- **Summary/About**: Professional introduction
- **Experience**: Work history with technologies used
- **Education**: Academic background
- **Skills**: Technical competencies (Frontend, Backend, DevOps, etc.)
- **Interests**: Personal interests
- **Awards/Certifications**: Professional certifications

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is based on the [Start Bootstrap Resume](https://github.com/StartBootstrap/startbootstrap-resume) theme.

## Contact

- **Email**: ricardompcampos@gmail.com
- **LinkedIn**: [ricardompcampos](https://www.linkedin.com/in/ricardompcampos/)
- **GitHub**: [RMCampos](https://github.com/rmcampos)
