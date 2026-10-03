# ShopEase

**ShopEase** is a frontend storefront prototype for browsing everyday products. It is an ongoing learning project developed alongside web development activities. Each activity builds on the previous version by applying new tools and adding or improving features.

The first version was built with React and CSS. For Activity 2, the storefront styling was migrated to Tailwind CSS, and product search and a clear-shopping-bag action were added.

> **Project status:** This is a learning project and visual storefront prototype. It does not connect to a backend, save cart contents after the page is refreshed, process orders, or accept payments.

## Technologies

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES_Modules-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## About the System

ShopEase presents a curated collection of everyday items in a simple online-shopping layout. Visitors can browse products, narrow the collection by category, search for products, and manage a shopping bag during their current visit.

The app is built with React components. The product catalogue is stored in the project as JavaScript data, and React state manages the selected category, search term, and shopping-bag contents in the browser. Tailwind CSS utility classes style the interface, and Vite runs the development server and creates production builds.

## Features

- **Product catalogue:** Shows product images, names, categories, and prices.
- **Category filters:** Browse all products or select a category.
- **Product search:** Search by product name or category. Search and category filtering can be used together.
- **Shopping bag:** Add products, see the total item count, adjust quantities, and remove items.
- **Subtotal:** Calculates the total price of the items currently in the bag.
- **Clear bag:** Remove all items from the shopping bag with one action.
- **Responsive layout:** Adapts the storefront layout for different screen sizes.
- **Component-based structure:** Builds the interface from reusable React components.

Product and hero images are loaded from Unsplash, so those images require an internet connection. Product information is maintained locally in the project.

## Version History & Visuals

This section documents the project’s appearance and main changes across learning activities. Add screenshots of each version to the `screenshots` folder and use the matching relative paths below.

### Version 1 — Activity 1: Initial Storefront

Created the initial ShopEase storefront using React and CSS. This version introduced the product catalogue, category filters, and shopping bag interface.

[Version 1: Initial ShopEase storefront]<img width="1038" alt="Screenshot 2026-10-02 at 2 37 50 PM" src="https://github.com/user-attachments/assets/35f7f223-3f5b-4883-bda9-ccb1d9e07149" /> <img width="1038" alt="Screenshot 2026-10-02 at 2 42 48 PM" src="https://github.com/user-attachments/assets/61c9c118-1942-4123-8d6d-7791d975368b" />

### Version 2 — Activity 2: Tailwind Migration

Migrated the storefront styling from pure CSS to Tailwind CSS. Added product search and a clear-shopping-bag action while retaining the product browsing and cart features.

[Version 2: ShopEase after the Activity 2 updates]<img width="1038" alt="Screenshot 2026-10-03 130548" src="https://github.com/user-attachments/assets/638fe94f-cee5-465c-954f-f48e0177c8dc" /> <img width="1038" alt="Screenshot 2026-10-03 130615" src="https://github.com/user-attachments/assets/784a946f-b5c8-40d9-ba0b-ea2cef3834ec" />



## Requirements

Install [Node.js](https://nodejs.org/) (which includes npm). To check whether they are available in your terminal, run:

```bash
node --version
npm --version
```

### Install Dependencies

Clone the repository, change into the project directory, and install its dependencies:

```bash
git clone https://github.com/coding-chez/shopease.git
cd shopease
npm install
```

### Run the Development Server

```bash
npm run dev
```

Open the local URL printed in the terminal—Vite commonly uses `http://localhost:5173/`.

Stop the server by focusing the terminal and pressing **Ctrl+C**.

