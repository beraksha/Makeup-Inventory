# Makeup Inventory

A web app for keeping track of the makeup and skincare products on your shelf. I built it because a long list of products is easy to lose track of, especially which ones are close to expiring.

You can add, edit and delete products, each with a brand, type, status (new, in use or finished) and expiry date. Category tabs split the shelf into Makeup and Skincare, a search box finds products by name, brand or type, and you can sort by name, expiry date or when you added the product. Products that have expired, or expire within 30 days, get a clear badge. Everything is saved in the browser with localStorage, so there is no account or backend.

I built it with React and Vite and styled it with SCSS: variables, partials, a mixin for breakpoints and a map that sets each category's accent color. The code is split into small components (filter bar, product card, product form) and a custom useLocalStorage hook. The layout is responsive from phone to desktop, the form uses a native `<dialog>` element so keyboard focus and Escape work properly, and every button and field has an accessible label.

## Features

- Add, edit and delete products
- Category tabs (All, Makeup, Skincare), search and sorting
- Expiry warnings for products that have expired or expire within 30 days
- Responsive layout, keyboard-accessible, with a native `<dialog>` form
- Data is saved in your browser with `localStorage`, so there is no backend or account.

## Run it locally

```bash
npm install
npm run dev
```

Build for production with `npm run build`; the output goes to `dist/` and can be deployed to Vercel, Netlify or GitHub Pages.

## Structure

```
src/
  App.jsx                     -> state, filtering and sorting
  components/                 -> FilterBar, ProductCard, ProductForm
  hooks/useLocalStorage.js
  data/sampleProducts.js      -> starter data
  styles.css
```

## Tech

React 18, Vite, plain CSS.

## Ideas for later

Product photos, a backend (Firebase or Supabase) for syncing across devices, CSV export.