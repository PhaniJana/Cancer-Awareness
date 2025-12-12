import React from "react";
export default function Hero() {
return (
<section className="relative w-full h-64 sm:h-96 flex items-center" aria-label="Hero section">
<div
className="absolute inset-0 bg-cover bg-center"
style={{ backgroundImage: "url('https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1600')" }}
/>
<div className="absolute inset-0 bg-black/45" />


<div className="relative max-w-6xl mx-auto px-6 text-center text-white">
<h2 className="text-2xl sm:text-4xl font-bold mb-3">You are not alone.</h2>
<p className="max-w-2xl mx-auto text-sm sm:text-lg">
Resources, community, and support for individuals and families affected by cancer.
</p>
<div className="mt-6 flex justify-center gap-3">
<a href="#support" className="px-4 py-2 rounded-lg bg-white/90 text-purple-700 font-medium shadow-sm hover:opacity-95">Learn More</a>
<a href="#contact" className="px-4 py-2 rounded-lg border border-white/60 text-white font-medium hover:bg-white/10">Contact Us</a>
</div>
</div>
</section>
);
}