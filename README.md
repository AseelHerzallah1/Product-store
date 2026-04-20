# 🛒 Product Store

A full-stack MERN product management app where you can create, view, update, and delete products — with a clean UI, dark/light mode, and live toast notifications.

🌐 **Live Demo:** [https://product-store-qzbn.onrender.com/](https://product-store-qzbn.onrender.com/)

---

## ✨ Features

- 📦 View all products in a responsive grid
- ➕ Add new products with name, price, and image URL
- ✏️ Edit existing products via a modal dialog
- 🗑️ Delete products with instant UI update
- 🌙 Dark / Light mode toggle
- 🔔 Toast notifications for all actions
- 📱 Fully responsive layout

---

## 🧰 Tech Stack

### Frontend
- ⚛️ React 19
- 🎨 Chakra UI v3
- 🐻 Zustand (state management)
- 🔀 React Router v6
- ⚡ Vite

### Backend
- 🟢 Node.js + Express v5
- 🍃 MongoDB + Mongoose
- 🔐 dotenv

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB Atlas account (or local MongoDB)

### Installation

```bash
# Clone the repo
git clone https://github.com/your-username/product-store.git
cd product-store

# Install backend dependencies
npm install

# Install frontend dependencies
cd frontend
npm install
cd ..
```

### Environment Variables

Create a `.env` file in the root directory:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### Running in Development

```bash
# Terminal 1 — Backend
npm run dev

# Terminal 2 — Frontend
cd frontend
npm run dev
```

### Running in Production

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
product_store/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── product.controller.js
│   ├── models/
│   │   └── Product.js
│   ├── routes/
│   │   └── product.route.js
│   └── server.js
├── frontend/
│   └── src/
│       ├── components/
│       │   ├── Navbar.jsx
│       │   ├── ProductCard.jsx
│       │   └── ui/
│       ├── pages/
│       │   ├── HomePage.jsx
│       │   └── CreatePage.jsx
│       └── store/
│           └── product.js
├── .env
└── package.json
```

---

## 📄 License

MIT
