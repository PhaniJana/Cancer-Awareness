import React from "react";

export default function Headers() {
return (
<header className="bg-gradient-to-r from-purple-700 via-purple-600 to-pink-600 text-white">
<div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
<h1 className="text-xl sm:text-2xl font-semibold">Cancer Awareness & Support</h1>
<nav className="hidden sm:flex gap-6">
<a href="#about" className="hover:underline">About</a>
<a href="#support" className="hover:underline">Support</a>
<a href="#contact" className="hover:underline">Contact</a>
</nav>
</div>
</header>
);
}