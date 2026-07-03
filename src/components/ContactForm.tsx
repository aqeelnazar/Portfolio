'use client';

import { FormEvent, useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-sky-500"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-sky-500"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-sky-500"
        />
      </div>

      <button
        type="submit"
        className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
      >
        Send Message
      </button>

      {submitted ? (
        <p className="text-sm font-medium text-emerald-600">Thank you. Your message has been received.</p>
      ) : null}
    </form>
  );
}
