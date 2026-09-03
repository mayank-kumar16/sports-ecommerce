# SportX - Sports E-Commerce Store

SportX is a modern sports e-commerce web application built with React. It allows users to browse sports products, search and filter products, manage their cart and wishlist, and complete a frontend checkout flow.

The project focuses on building a realistic e-commerce experience while demonstrating modern React development practices, state management with Redux Toolkit, API integration, routing, responsive UI, and form handling.

---

## 🚀 Live Demo

[View Live Demo](#)

---

## ✨ Features

### 🏠 Home Page

- Hero section with promotional content
- Benefits section
- Trending products
- Shop by category
- Responsive navigation

### 🛍️ Product Browsing

- Browse sports products
- Product cards with images, prices, ratings, and discounts
- Product details page
- Category-based product browsing

### 🔎 Search

- Search products by name
- Debounced search input
- Search suggestions dropdown
- View all search results
- Case-insensitive product search

### 🎯 Product Filtering & Sorting

- Filter products by category
- Filter products by maximum price
- Sort by:
  - Featured
  - Price: Low to High
  - Price: High to Low
  - Rating

### 🛒 Shopping Cart

- Add products to cart
- Increase product quantity
- Decrease product quantity
- Remove products
- Automatically calculate subtotal
- Calculate shipping
- Free shipping for qualifying orders
- Display cart item count in navbar

### ❤️ Wishlist

- Add products to wishlist
- Remove products from wishlist
- Wishlist item count in navbar

### 💳 Checkout

- Customer information form
- Shipping address form
- Payment method selection
- Credit/debit card fields
- Form validation
- Coupon code support
- `SAVE10` coupon for 10% discount
- Order summary
- Shipping and discount calculation

### ✅ Order Confirmation

- Generate unique order ID
- Display order summary
- Display purchased products
- Display customer information
- Display shipping information
- Display payment method
- Clear cart after successful order
- Continue shopping option

### 📱 Responsive Design

- Desktop navigation
- Mobile navigation
- Responsive product grids
- Responsive cart and checkout layouts
- Mobile-friendly forms

---

## 🧰 Tech Stack

### Frontend

- React
- React Router
- Redux Toolkit
- Tailwind CSS
- React Icons

### API

- DummyJSON Products API

### Development

- Create React App
- JavaScript (ES6+)
- Git & GitHub

---

## 🔄 Application Flow

```text
Home
 │
 ├── Browse Categories
 │       ↓
 │     Shop
 │       ↓
 │   Product Details
 │       ↓
 │    Add to Cart
 │       ↓
 │      Cart
 │       ↓
 │    Checkout
 │       ↓
 │  Place Order
 │       ↓
 │ Order Confirmation
```
