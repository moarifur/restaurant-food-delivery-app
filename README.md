# 🛒 UI-007: Implement Cart UI and Quantity Logic

This component (`CartPage.jsx`) is part of a **Restaurant Food Delivery App** built with **Next.js** and **Tailwind CSS**. It implements the cart interface where users can view their selected food items, check pricing details, and proceed to checkout.

---

## 📄 File Location

`D:\portfolio-projects\restaurant-food-delivery-app\src\app\cart\page.jsx`

---

## ✅ Features Implemented

- **Product Listing UI**  
  Displays a list of selected cart items with images, names, sizes, and prices.

- **Responsive Layout**  
  Fully responsive using Tailwind’s utility classes:
    - `flex-col` for mobile
    - `lg:flex-row` for desktop

- **Price Breakdown Panel**  
  A summary section including:
    - Subtotal with item count
    - Service cost
    - Delivery cost
    - Total cost (incl. VAT)

- **Checkout CTA Button**  
  A call-to-action button for users to proceed with checkout.

- **Visual Feedback Elements**
    - Each product shows an **"X"** icon to simulate item removal (interactive logic to be added).

---

## 🧱 Component Structure

```jsx
<CartPage />
├── Products Container (left side on desktop)
│   ├── Image (product photo)
│   ├── Product Info (name, size)
│   └── Price + Remove Icon
│
└── Payment Summary Container (right side on desktop)
    ├── Subtotal
    ├── Service Cost
    ├── Delivery Cost
    ├── Divider
    ├── Total Price
    └── Checkout Button
