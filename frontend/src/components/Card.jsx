import React from "react";
export default function Card({ title, desc }) {
return (
<div className="bg-white p-5 rounded-lg shadow-sm h-full flex flex-col">
<h4 className="font-semibold text-lg mb-2 text-purple-700">{title}</h4>
<p className="text-gray-700 flex-1">{desc}</p>
<div className="mt-4">
<button className="px-3 py-1 rounded-md border border-purple-600 text-purple-600 text-sm hover:bg-purple-50">
Learn more
</button>
</div>
</div>
);
}