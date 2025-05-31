# UI-008: Responsive Login and Orders Page

## Overview

This UI module delivers two essential, fully responsive pages for a modern web application:

- **Login Page**: A clean, mobile-friendly layout offering social login options.
- **Orders Page**: A static, visually organized table for mock order data presentation.

Both components are designed as **purely presentational** and can be integrated into any authentication or e-commerce flow.

---

## 🔧 Tech Stack

- **Framework**: React (w/ Next.js)
- **Styling**: Tailwind CSS
- **Assets**: Static images (`/loginBg.png`, `/google.png`, `/facebook.png`)

---

## 📁 Components

### 1. `LoginPage.jsx`

- **Purpose**: Renders a login screen UI.
- **Features**:
    - Two social login buttons (Google & Facebook)
    - Responsive split layout with an image and text/form
    - Informational text and contact link

### 2. `OrdersPage.jsx`

- **Purpose**: Displays static order data in a tabular format.
- **Features**:
    - Table headers adapt for mobile (`Order ID` and `Products` hidden on small screens)
    - Clean design using Tailwind spacing and utility classes
    - Mock order data for UI layout validation

---

## 🧪 Usage

These components are intended for **frontend display only** and do not contain authentication logic or dynamic data fetching. You can integrate them into your project by importing and routing as needed:

```jsx
import LoginPage from "@/components/LoginPage";
import OrdersPage from "@/components/OrdersPage";
