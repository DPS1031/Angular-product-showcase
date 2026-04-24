# 🛒 Angular Product Showcase

[![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)

A modern, component-driven product showcase built with **Angular** and **Tailwind CSS**, demonstrating reusable component architecture, reactive state management, and polished UI interactions — all without a backend or external dependencies.

> 👤 **Author:** [David Pedroza Sánchez](https://www.linkedin.com/in/david-pedroza-sanchez-9525b0346)

---

## 📸 Screenshots

<img width="1904" alt="Product catalog view" src="https://github.com/user-attachments/assets/7f130360-62b0-46ec-a61f-8da430a59d89" />
<br><br>
<img width="1899" alt="Category filter interaction" src="https://github.com/user-attachments/assets/027d4d35-be30-4bf1-81ca-dd57aadc213d" />
<br><br>
<img width="1902" alt="Product card hover state" src="https://github.com/user-attachments/assets/8ffadbac-2cc4-455e-b278-1b46460ba841" />
<br><br>
<img width="1883" alt="Quantity control per product" src="https://github.com/user-attachments/assets/d8850e4d-4187-49f8-becf-9f92dc18d791" />
<br><br>
<img width="1899" alt="Active category state" src="https://github.com/user-attachments/assets/f79e2b1c-844c-4e0d-9e8c-c52ec1914820" />
<br><br>
<img width="1882" alt="Product badge display" src="https://github.com/user-attachments/assets/fd4be133-4683-4fba-b757-7b27ea3b8430" />
<br><br>
<img width="1870" alt="Full layout overview" src="https://github.com/user-attachments/assets/4044c43a-3bfa-4c1a-97de-e99ee199a3e2" />

---

## ✨ Features

- **Reusable Product Card component** — fully self-contained with its own state
- **Independent quantity control** per product — no shared state, no side effects
- **Hover-to-state image transitions** — main image swaps to hover image on interaction, persisting the active state beyond pure CSS hover
- **Category filter sidebar** — single active selection with persistent highlight
- **Data-driven rendering** — all products rendered dynamically from a typed data array via `*ngFor`
- **Product badges** — contextual labels (e.g. "Gluten Free") rendered conditionally per product
- **Smooth transitions** — CSS transitions on hover effects and state changes throughout the UI
- **Clean separation of concerns** — logic, template, and styles kept strictly independent

---

## 🧠 Angular Concepts Demonstrated

| Concept | Where Applied |
|---------|--------------|
| Standalone Components | All components use `standalone: true` |
| `*ngFor` directive | Dynamic product card rendering |
| `[ngClass]` binding | Conditional active state styling |
| `(click)` & `(mouseenter)` events | Category and card interactions |
| Component-level state | Quantity and hover state per product |
| Input data modeling | Typed product interface with TypeScript |
| Separation of concerns | Logic in `.ts`, presentation in `.html`, styles in `.css` |

---

## 🧩 How It Works

### Product Cards

Each product is modeled as a TypeScript object containing:

```typescript
{
  name: string;
  price: number;
  image: string;
  hoverImage: string;
  badge?: string;
  quantity: number;
}
```

Every card manages its own quantity and hover state independently — incrementing or decrementing one product has zero impact on the others.

### Category Sidebar

The category list on the left acts as a visual controller:

- Clicking or hovering a category sets it as active
- Only one category is active at a time
- Active state is driven by component data, not pure CSS — making it extensible for future filtering logic

### Image Transitions

The hover image swap is state-driven (not CSS-only), which means the active image persists on touch devices and can be extended to work with programmatic triggers.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js 18+](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)

```bash
npm install -g @angular/cli
```

### Installation

```bash
# Clone the repository
git clone https://github.com/DPS1031/Angular-product-showcase.git
cd Angular-product-showcase

# Install dependencies
npm install

# Start development server
ng serve
```

Open [http://localhost:4200](http://localhost:4200) in your browser.

---

## 📂 Project Structure

```
src/
├── app/
│   ├── components/
│   │   └── product-card/       # Reusable product card component
│   ├── models/                  # TypeScript interfaces
│   ├── app.component.ts         # Root component with product data
│   └── app.component.html       # Main layout with category sidebar
├── assets/
└── styles.css
```

---

## 🎨 Styling Approach

Built entirely with **Tailwind CSS** utility classes:

- Utility-first approach — no custom CSS files beyond base styles
- Smooth `transition-all` on interactive elements
- Neutral, minimal color palette keeping focus on the product imagery
- Consistent spacing via Tailwind's spacing scale
- Responsive-ready structure (desktop-optimized layout)

---

## 🚀 Tech Stack

| Technology | Purpose |
|-----------|---------|
| Angular 18 | Component framework |
| TypeScript | Type-safe JavaScript |
| Tailwind CSS | Utility-first styling |
| HTML5 | Semantic markup |

---

## 📄 License

This project is open source and available for educational and portfolio purposes.

---

<p align="center">
  Built with ❤️ by <a href="https://www.linkedin.com/in/david-pedroza-sanchez-9525b0346">David Pedroza Sánchez</a>
</p>
