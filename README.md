# 🍽️ Restaurant Food Delivery App

A fully responsive, modern restaurant food ordering web application. This project follows Lama Dev’s YouTube series and is structured in sprints to transition from frontend UI design to full-stack implementation using modern technologies.

---

## 🚧 Sprint 1: UI Development Sprint

### 🏷️ Sprint Name
**Sprint-01-UI-Design**

### 📋 Sprint Description
This sprint focuses solely on **UI development** using **Next.js 15 (App Router)** and **Tailwind CSS**. It follows the design and implementation as shown in the YouTube tutorial by **Lama Dev**, with no backend logic or database integration at this stage.

> 📌 Goal: Deliver a complete, responsive frontend for future backend integration.

---

### 🎯 Sprint Goals

- ✅ Set up Next.js 15 with Tailwind CSS
- ✅ Complete all UI screens based on the tutorial
- ✅ Ensure full mobile responsiveness and layout integrity
- ✅ Implement reusable components
- ✅ Establish a solid UI foundation for upcoming full-stack features

---

### 🛠 Tech Stack for Sprint 1

- [Next.js 15 (App Router)](https://nextjs.org/)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Tailwind CSS](https://tailwindcss.com/)

---

## 📚 Included Stories (from EPIC-UI-DESIGN)

| Story ID | Title                                        | Est. Time  |
|----------|----------------------------------------------|------------|
| UI-001   | Setup Next.js project with Tailwind CSS      | 1 hour     |
| UI-002   | Create layout and navigation (Navbar/Footer) | 1 hour     |
| UI-003   | Build homepage with hero slider              | 2 hours    |
| UI-004   | Create featured product section              | 1 hour     |
| UI-005   | Add offers and categories section            | 1 hour     |
| UI-006   | Design product list and single product pages | 2 hours    |
| UI-007   | Implement cart UI with quantity logic        | 2 hours    |
| UI-008   | Build login and orders page UI               | 2 hours    |

---

## 📂 Final Folder Structure Sprint-01-UI-Design

```Tree view
restaurant-food-delivery-app/
├── app/                        # App Router pages and layouts
│   ├── layout.jsx              # Global layout (Navbar, Footer, etc.)
│   ├── page.jsx                # Homepage
│   ├── globals.css            # Tailwind's global styles
│   ├── menu/
│   │   ├── page.jsx            # Menu page (categories overview)
│   │   └── [category]/         
│   │       └── page.jsx        # Category-specific products (dynamic route)
│   ├── product/
│   │   └── [id]/               
│   │       └── page.jsx        # Single product page (dynamic route)
│   ├── cart/
│   │   └── page.jsx            # Cart UI (with quantity logic)
│   ├── login/
│   │   └── page.jsx            # Login page UI only
│   └── orders/
│       └── page.jsx            # Orders page UI only
│
├── components/                # Reusable UI components
│   ├── ui/
│   │   ├── Button.jsx          # Generic Button component
│   │   └── Input.jsx           # Generic Input component (if any)
│   ├── layout/
│   │   ├── Navbar.jsx          # Responsive Navbar with menu
│   │   ├── Footer.jsx          # Footer component
│   │   └── Notification.jsx    # Optional: Toast or alert banner
│   ├── home/
│   │   ├── Slider.jsx          # Hero image slider
│   │   ├── Featured.jsx        # Featured product section
│   │   ├── Offer.jsx           # Offer + category banners section
│   ├── menu/
│   │   └── CategoryCard.jsx    # Card for each food category
│   ├── product/
│   │   └── ProductCard.jsx     # Product card in grid list
│   └── cart/
│       └── CartItem.jsx        # Single item in cart
│
├── constants/
│   └── data.js                 # Static arrays: menu, categories, products
│
├── public/
│   ├── logo.png                # App logo
│   ├── slider/                 # Hero slider images
│   ├── categories/            # Category images
│   ├── products/              # Product images
│   └── temporary/             # Temporary UI assets (optional)
│
├── .gitignore
├── next.config.js
├── postcss.config.js
├── tailwind.config.js
├── package.json
└── README.md
```

## ✅ Completed Tasks Summary

### `UI-001`: Setup Project
- Initialized with `create-next-app@latest`
- Added Tailwind CSS
- Enabled App Router
- Applied path aliasing `@` → `src/`
- Cleaned boilerplate and updated metadata

### `UI-002`: Layout & Navigation
- Built responsive Navbar and Footer
- Included login/orders buttons and mobile menu
- Integrated shared layout into `app/layout.js`

### `UI-003`: Homepage with Hero Slider
- Client-side slider using dynamic text and images
- Auto-slide every 4 seconds
- Optimized for all screen sizes

### `UI-004`: Featured Product Section
- Implemented a `Featured` component
- Highlighted key products on homepage

### `UI-005`: Offers and Categories
- Menu page with visually rich category sections
- Category-based navigation to dynamic pages

### `UI-006`: Product Pages
- Product list page with responsive cards
- Single product detail view with image, info, and interaction

### `UI-007`: Cart UI
- Implemented cart sidebar with quantity logic (static for now)
- Styled for usability across devices

### `UI-008`: Login & Orders Page
- Basic UI layouts with placeholders for future auth and order logic

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/moarifur/restaurant-food-delivery-app.git

# Navigate into the directory
cd restaurant-food-delivery-app

# Install dependencies
npm install

# Run the development server
npm run dev

```

## 👨‍💻 AuthorAdd commentMore actions

Built by "Mohammad Arifur Rahman" inspired by [Lama Dev](https://www.youtube.com/@LamaDev)

### ✅ `LICENSE` (MIT License)

```txt
MIT License

Copyright (c) 2025 Mohammad Arifur Rahman

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the “Software”), to deal
in the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```