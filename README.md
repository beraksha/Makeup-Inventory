# Makeup Inventory

A React app for keeping track of makeup and skincare products. Filter by category, search by name, brand or type, sort by name, expiry date or when you added the product, and see which products are expired or about to expire.

Data is saved in your browser with `localStorage`, so there is no backend or account.

## Features

- Add, edit and delete products
- Category tabs (All, Makeup, Skincare), search and sorting
- Expiry warnings for products that have expired or expire within 30 days
- Responsive layout, keyboard-accessible, with a native `<dialog>` form

## Run it locally

```bash
npm install
npm run dev
```

Build for production with `npm run build`; the output goes to `dist/` and can be deployed to Vercel, Netlify or GitHub Pages.

## Structure

```
src/
  App.jsx                 state, filtering and sorting
  components/             FilterBar, ProductCard, ProductForm
  hooks/useLocalStorage.js
  data/sampleProducts.js  starter data
  styles.css
```

## Tech

React 18, Vite, plain CSS.

## Ideas for later

Product photos, a backend (Firebase or Supabase) for syncing across devices, CSV export.
