# 🛒 Angular Product Showcase

A modern, component-based product showcase built with **Angular** and **Tailwind CSS**, focused on clean UI, reusable components, and interactive user experience.

This project simulates an e-commerce product section with dynamic product cards, category-based interaction, and independent quantity control per item.

---

## ✨ Features

- Reusable **Product Card** component
- Dynamic product rendering using `*ngFor`
- Independent quantity control per product
- Interactive category list with persistent active state
- Hover-based image transitions (main image ↔ hover image)
- Clean separation between UI, state, and behavior
- Tailwind CSS for fast and consistent styling
- Responsive layout optimized for desktop

---

## 🧠 Core Concepts Used

- Component-driven architecture
- State management at component level
- Conditional styling based on state (not pure hover)
- Data-driven UI rendering
- Separation of concerns (logic vs presentation)
- Scalable structure for adding more products or categories

---

## 🧩 How It Works

### Product Cards
Each product is represented as an object containing:
- Name
- Price
- Images (default & hover)
- Badge (e.g. "Gluten Free")
- Quantity (handled independently)

The UI updates reactively based on each product’s own state.

---

### Category Interaction
The category list on the left acts as a **controller**:
- Hovering a category activates it
- The active category remains highlighted
- Only one category can be active at a time
- The active state can later be used to filter or animate products

---

## 🎨 Styling

- Tailwind CSS utility-first approach
- Smooth transitions and hover effects
- Neutral, minimal color palette
- Consistent spacing and typography

---

## 🚀 Tech Stack

- **Angular**
- **TypeScript**
- **Tailwind CSS**
- HTML5 / CSS3

---

## 📦 Future Improvements

- Product filtering by category
- Add-to-cart functionality
- Mobile interaction (click instead of hover)
- Animations based on scroll
- Global state management (signals or store)

---

## 📸 Preview

_(Add screenshots here if you want)_

---

## 📄 License

This project is for educational and portfolio purposes.
