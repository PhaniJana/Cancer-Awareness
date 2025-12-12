// src/components/ContactForm.jsx
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  
  const [result, setResult] = useState(null);

  const ACCESS_KEY = 'ad8ef4ff-8d23-414b-bb27-12e90f5a6572'

  
  async function onSubmit(formData) {
    setResult(null);

    try {
      const payload = {
        ...formData,
        access_key: ACCESS_KEY,
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const json = await res.json();

      if (json.success) {
        setResult({ ok: true, message: json.message || "Message sent!" });
        reset();
      } else {
      
        setResult({ ok: false, message: json.message || "Submission failed." });
      }
    } catch (err) {
      setResult({ ok: false, message: err.message || "Network error" });
    }
  }

  return (
    <section id="contact" className="mb-10">
      <h3 className="text-2xl font-semibold text-purple-700 mb-4">Contact Us</h3>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-lg shadow-sm p-6 max-w-2xl"
        noValidate
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              {...register("name", { required: "Name is required" })}
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-300"
              placeholder="Your name"
            />
            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
              })}
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-300"
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            rows="5"
            {...register("message", { required: "Message is required", minLength: { value: 10, message: "Message must be at least 10 characters" } })}
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-300"
            placeholder="How can we help?"
          />
          {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>}
        </div>

        <div className="mt-4 flex items-center gap-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`inline-flex items-center px-4 py-2 rounded-md text-white font-medium shadow-sm ${
              isSubmitting ? "bg-purple-400 cursor-wait" : "bg-purple-600 hover:bg-purple-700"
            }`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {result && result.ok && <span className="text-green-600 font-medium">{result.message}</span>}
          {result && !result.ok && <span className="text-red-600 font-medium">{result.message}</span>}
        </div>

        <p className="mt-3 text-xs text-gray-500">
          By sending this message you agree that the information will be used to respond to your request.
        </p>
      </form>
    </section>
  );
}
