# Mohamed Tarek Portfolio

A personal portfolio website built with React, Vite, Tailwind CSS v4, and React Router.

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4 (`@tailwindcss/vite`)
- React Router DOM 7
- ESLint 9

## Project Structure

```text
src/
  components/
    Navbar.jsx
    Footer.jsx
    Layout.jsx
  pages/
    Home.jsx
  App.jsx
  main.jsx
  index.css
public/
  imagesea(...).jpg/.png
  WhatsApp Image ...jpeg
```

## Routing and Layout

- `src/main.jsx` uses `BrowserRouter` + nested routes.
- `Layout.jsx` wraps all pages with:
  - `Navbar` (top, responsive with mobile menu)
  - `Outlet` (page content)
  - `Footer` (copyright line)
- `App.jsx` renders the `Home` page.

## Home Page Sections

`src/pages/Home.jsx` currently includes:

1. Hero section with profile image and intro text.
2. About/Portfolio split section with responsive image block.
3. Services cards section.
4. Skills/timeline section with animated progress bars.
5. Latest portfolio gallery slider (prev/next buttons).

## Animations

- Scroll reveal animation via `IntersectionObserver` in `Home.jsx`.
- Progress bars and tooltips animate when their section enters viewport.
- Additional custom keyframes in `src/index.css` (`float`, `animate-float`).

## Assets

- All portfolio images are served from `public/`.
- Main profile image:
  - `/WhatsApp Image 2026-03-16 at 10.18.50 PM.jpeg`

## Available Scripts

From project root:

- `npm run dev` - start development server
- `npm run build` - create production build
- `npm run preview` - preview production build
- `npm run lint` - run ESLint

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm run dev
   ```

## Notes

- Styling is primarily Tailwind utility classes inside JSX.
- `src/App.css` is currently empty.
