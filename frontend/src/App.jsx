import React from "react";
import Headers from "./components/Headers";
import Hero from "./components/Hero";
import Card from "./components/Card";
import ContactForm from "./components/ContactForm";



export default function App() {
return (
<div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
<Headers />
<Hero />


<main className="max-w-6xl mx-auto px-6 py-12 w-full flex-1">
<section id="support" className="mb-10">
<h3 className="text-2xl font-semibold text-purple-700 mb-4">How You Can Help</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
<Card title="Volunteer" desc="Join local volunteer teams to support patients." />
<Card title="Donate" desc="Help fund patient assistance programs." />
<Card title="Advocate" desc="Spread awareness & support education." />
</div>
</section>


<ContactForm />


<footer className="mt-12 text-center text-sm text-gray-600">
<p>© {new Date().getFullYear()} Cancer Awareness & Support — All rights reserved.</p>
</footer>
</main>
</div>
);
}