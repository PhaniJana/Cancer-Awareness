# Cancer Awareness & Support Web App

A simple, responsive **React + Tailwind CSS** website built to promote cancer awareness and provide community support. The project includes a landing hero section, informational content, and a working contact form powered by **Web3Forms** (no backend required).

---

## 🚀 Features

### ✔️ Modern UI with React + Tailwind

Clean, responsive, mobile-friendly interface.

### ✔️ Component-Based Architecture

All UI sections are built as reusable components.

### ✔️ Fully Working Contact Form (No Backend Required)

Uses **Web3Forms API** to receive form submissions directly to your email.

### ✔️ Easy Setup

Just clone, install, and run.

---

## 📁 Project Structure

```
src/
 ├── App.jsx
 ├── index.js
 ├── components/
 │     ├── Header.jsx
 │     ├── Hero.jsx
 │     ├── Card.jsx
 │     └── ContactForm.jsx
 ├── assets/   (optional)
 └── styles/   (Tailwind config)
```

---

## 🔧 Installation & Setup

### 1️⃣ Clone the repository

```
git clone <your-repo-url>
cd cancer-awareness-support
```

### 2️⃣ Install dependencies

```
npm install
```

### 3️⃣ Install Tailwind CSS (if not already configured)

Follow the Tailwind setup guide: [https://tailwindcss.com/docs/guides/vite](https://tailwindcss.com/docs/guides/vite)

---

## 📨 Web3Forms Setup (Contact Form)

### Step 1: Get an Access Key

Go to **[https://web3forms.com/](https://web3forms.com/)** → Sign up → Copy your *Access Key*.

### Step 2: Add your key

You may set it in `.env`:

```
REACT_APP_WEB3FORMS_KEY=your_access_key_here
```

Or replace directly inside `ContactForm.jsx`:

```js
const ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";
```

### Step 3: That's it!

Submitted messages will now be delivered to your email.

---

## ▶️ Run the App

```
npm run dev
```

Visit: `http://localhost:5173/` (Vite default)

---

## 🧩 Components Overview

### **Header.jsx**

Contains navigation links and brand title.

### **Hero.jsx**

Landing section with banner image, hero text, and call-to-action buttons.

### **Card.jsx**

Reusable component used for listing support options (Donate, Volunteer, etc.).

### **ContactForm.jsx**

React Hook Form + Web3Forms submission handler.

---

## 🤝 Contributing

Pull requests are welcome! Suggestions, improvements, and bug reports are appreciated.

---

## 📄 License

This project is open-source and free to use for educational or non-commercial purposes.

---

## 💜 Acknowledgements

* React
* Tailwind CSS
* Web3Forms API
* Unsplash (for copyright-free banner image)

---


