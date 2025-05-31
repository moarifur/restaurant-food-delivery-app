# UI-006: Design Product List and Single Product Pages

This update implements a visually engaging **Product List Page** and a dynamic **Single Product Page** using **Next.js App Router**, **React**, and **Tailwind CSS** for a restaurant food delivery app.

---

## 📁 File Structure Overview

| Page | Path | Description |
|------|------|-------------|
| 🧾 Product List Page | `src/app/menu/page.jsx` | Lists all available pizza products |
| 🍕 Single Product Page | `src/app/product/[id]/page.jsx` | Shows detailed view for a selected pizza |
| 💸 Price Component | `src/components/Price.jsx` | Interactive price calculator for single product page |

---

## 🚀 Features Implemented

### ✅ Product List Page (`/menu`)

- **Responsive Grid Layout**: Auto-adjusts for mobile, tablet, and desktop.
- **Image Display**: Product images rendered using Next.js `Image` component for optimization.
- **Client-side Routing**: Clicking a product leads to its `/product/[id]` page via `Link`.
- **Hover Interactions**:
    - Displays **price** by default.
    - Reveals an **Add to Cart** button on hover.
- **Tailwind CSS Styling**: Modern, utility-first design system.

### ✅ Single Product Page (`/product/[id]`)

- **Optimized Image & Layout**: Full-width image display with adaptive sizing.
- **Dynamic Price Calculation**:
    - Selectable **size options** (Small, Medium, Large).
    - Adjustable **quantity** (min 1, max 9).
    - Live-updated total price based on selections.
- **Interactive UI**: Built using React hooks (`useState`, `useEffect`).

---

## 🔧 Components

### 🧩 `Price.jsx`

A reusable price calculator component that:

- Accepts:
    - `price`: base price.
    - `options`: size-based price variations.
    - `id`: product identifier.
- Handles:
    - **Live price update** on size or quantity change.
    - **Add to Cart** button placeholder.

---

## 🖼️ UI Preview (Visual Description)

| Page | Layout |
|------|--------|
| **Product List** | Grid of 2-3 columns, each product in a colored card with image, title, price/add button toggle. |
| **Single Product** | Split screen: image on one side, title/description/price controls on the other. Responsive layout for mobile and desktop. |

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14+ App Router](https://nextjs.org/docs/app)
- **Language**: React (JavaScript)
- **Styling**: Tailwind CSS
- **Image Optimization**: `next/image`
- **Routing**: Dynamic routing with `[id]` folders

---

## 🧪 Test Instructions

1. **Run the development server:**

   ```bash
   npm run dev
