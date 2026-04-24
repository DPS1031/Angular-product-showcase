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

<img width="1904" height="838" alt="image" src="https://github.com/user-attachments/assets/7f130360-62b0-46ec-a61f-8da430a59d89" />

<img width="1899" height="712" alt="image" src="https://github.com/user-attachments/assets/027d4d35-be30-4bf1-81ca-dd57aadc213d" />

<img width="1902" height="807" alt="image" src="https://github.com/user-attachments/assets/8ffadbac-2cc4-455e-b278-1b46460ba841" />

<img width="1883" height="840" alt="image" src="https://github.com/user-attachments/assets/d8850e4d-4187-49f8-becf-9f92dc18d791" />

<img width="1899" height="855" alt="image" src="https://github.com/user-attachments/assets/f79e2b1c-844c-4e0d-9e8c-c52ec1914820" />

<img width="1882" height="845" alt="image" src="https://github.com/user-attachments/assets/fd4be133-4683-4fba-b757-7b27ea3b8430" />

<img width="1870" height="920" alt="image" src="https://github.com/user-attachments/assets/4044c43a-3bfa-4c1a-97de-e99ee199a3e2" />

## 📄 License

This project is for educational and portfolio purposes.
