# FoodieHub — React Final Project

A responsive restaurant discovery and demo ordering app built with React, Vite, React Router DOM, Redux Toolkit, and TheMealDB API.

## Run locally

```bash
npm install
npm run dev
```

## Deploy to Netlify

Push the folder to GitHub, import the repository in Netlify, set build command to `npm run build` and publish directory to `dist`. A `netlify.toml` redirect is included for client-side routing.

## Features

- Home, Menu, Details, Cart, Orders, About, Contact
- Nested route `/menu/specials`
- URL search params for menu search and category filtering
- API fetching with loading/error states and cleanup
- Redux Toolkit cart CRUD with localStorage persistence
- Demo order creation, listing, and deletion (localStorage only)
- Contact form validation via useReducer
- Theme context, custom API hook, useRef focus, responsive CSS

**Disclaimer:** Orders are browser-local demos. No real payments, delivery, or server-side order processing. Food data is fetched from TheMealDB. Menu and detail price figures are demo prices and may differ because they are illustrative.
