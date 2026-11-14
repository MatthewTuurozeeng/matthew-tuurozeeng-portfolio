# Personal Professional Portfolio

## Live Demo
[Matthew Tuurozeeng — Portfolio](https://matthew-tuurozeeng.vercel.app)

## Overview
My personal portfolio website, built to serve as my long-term digital identity as a Computer Science professional. It showcases my projects, experience, community impact, certifications, and CV.

All content lives in typed data files in the codebase, so the site is fast, has no backend to maintain, and deploys as static files.

---

## Features
- Landing page with profile, availability, and highlights
- About page with skills, principles, certifications, education, and work experience
- Projects page with category filters, screenshots, and live demo / source links
- Impact & leadership page with photo galleries
- Full CV view and downloadable résumé
- Contact form that opens WhatsApp with the message pre-filled

---

## Tech Stack
- **React** with **TypeScript** – component-based, type-safe UI
- **Vite** – development server and production build
- **React Router** – client-side routing
- **React Bootstrap** – layout and UI components
- **React Hook Form** – contact form validation
- **Vercel** – hosting and deployment

---

## Project Structure
All of the code lives in **`frontend/`**:

- `src/pages/` holds one component per route: Home, About, Projects, Impact, Contact, and CV.
- `src/components/` contains reusable UI pieces such as the navbar, footer, project cards, timeline, and media viewers.
- `src/data/` stores the portfolio content (profile, projects, impact initiatives, certificates). Updating the site's content means editing these files.
- `src/services/` exposes the content to the pages, and `src/routes/` defines the routes.
- `public/` serves static assets: images, the résumé, and certificate PDFs.

---

## Running Locally
```bash
cd frontend
npm install
npm run dev
```

To create a production build, run `npm run build`; the output goes to `frontend/dist/`.
