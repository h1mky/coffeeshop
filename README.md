# ☕ Coffee Shop SPA

A single-page application for a coffee e-commerce store, built with React + Redux Toolkit + TypeScript.

## 🔧 Tech Stack

- React 19 (with support for Server Components)
- Redux Toolkit + createAsyncThunk
- React Router DOM
- TypeScript
- CSS (Bootstrap + custom styles)
- REST API (requests via a custom HTTP hook)

## 📄 Features

- **Main Page** — includes banners and "Our Coffee" section.
- **Coffee Catalog** — displays coffee cards, with search and country filter (Brazil, Kenya, Columbia).
- **Dynamic Coffee Page** — a detail page for each coffee product, loaded by ID.
- **Async Data Loading** — using `createAsyncThunk` from Redux Toolkit.
- **Redux Filters** — filter and search state managed in the Redux store.
- **Helmet** — manages meta tags and dynamic titles (partially limited by React 19).

## 📈 In Progress

- 🔐 **Admin Panel** — for adding/removing/editing coffee items.
- 🛒 Cart and checkout flow
- 🧪 Component and Redux unit testing

## ▶️ Getting Started

```bash
npm install
npm run dev
```
>### If you want to see the :
>- [Template](https://www.figma.com/file/Iu4Lul87WvzdM5CXFwE4qtZ6/Coffee-shop?node-id=0%3A1&t=6azX4JyP11ZMPbsy-0)
>- [Deploy](https://coffeeshop-vu2y.vercel.app/)
