
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// ✅ Dynamically import React Quill (avoids SSR issues in Next.js)
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";


type S = {
  _id?: string;
  name: string;
  slug: string;
  description: string;
  seoTitle?: string;
  seoDescription?: string;
};

export default function ServicesAdmin() {
  const [items, setItems] = useState<S[]>([]);
  const [form, setForm] = useState<S>({
    _id: "",
    name: "",
    slug: "",
    description: "",
    seoTitle: "",
    seoDescription: "",
  });

  async function load() {
    const d = await fetch("/api/services").then((r) => r.json());
    setItems(d.items || []);
  }

  useEffect(() => {
    load();
  }, []);

  async function add(e: React.FormEvent) {
    e.preventDefault();

    const payload = { ...form };
    
    const method = form._id ? "PUT" : "POST";  // ✅ choose method
    const url = form._id ? `/api/services/${form._id}` : "/api/services";
    if (!payload._id) delete payload._id; // ✅ fix: don't send empty _id

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setForm({
      _id: "",
      name: "",
      slug: "",
      description: "",
      seoTitle: "",
      seoDescription: "",
    });

    await load();
  }

  async function del(id?: string) {
    if (!id) return;
    await fetch(`/api/services/${id}`, { method: "DELETE" });
    await load();
  }

  // ✅ loads selected service into form for editing
function edit(service: S) {
  console.log(service)
  setForm({
    _id: service._id || "",
    name: service.name || "",
    slug: service.slug || "",
    description: service.description || "",
    seoTitle: service.seoTitle || "",
    seoDescription: service.seoDescription || "",
  });
}

  return (
    <div>
      <h2 className="text-2xl font-semibold">Service Areas (SEO)</h2>

      {/* Form */}
      <form onSubmit={add} className="card mt-4 space-y-3">
        <input
          placeholder="Name (e.g., Windshield Replacement in Hyderabad)"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          className="input text-white"
        />
        <input
          placeholder="Slug (windshield-replacement-hyderabad)"
          value={form.slug}
          onChange={(e) => setForm({ ...form, slug: e.target.value })}
          required
          className="input text-white"
        />
        {/* <textarea
          placeholder="HTML Description (supports basic HTML)"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          required
          className="input text-white "
        /> */}
        {/* ✅ Rich Text Editor instead of textarea */}
        <ReactQuill
          theme="snow"
          value={form.description}
          onChange={(val) => setForm({ ...form, description: val })}
          className="bg-white rounded text-black"
        />
        <input
          placeholder="SEO Title"
          value={form.seoTitle || ""}
          onChange={(e) => setForm({ ...form, seoTitle: e.target.value })}
          className="input text-white"
        />
        <input
          placeholder="SEO Description"
          value={form.seoDescription || ""}
          onChange={(e) => setForm({ ...form, seoDescription: e.target.value })}
          className="input text-white"
        />
        <button className="btn btn-primary w-full">
          {form._id ? "Update Service Page" : "Add Service Page"}
        </button>
      </form>

      {/* Existing Service Pages */}
      <div className="mt-6">
        {items.map((s) => (
          <div key={s._id} className="card mb-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold">{s.name}</div>
                <Link
                  className="text-sm text-brand underline"
                  href={`/services/${s.slug}`}
                  target="_blank"
                >
                  /services/{s.slug}
                </Link>
              </div>
               <div className="flex gap-2">
                <button
                  onClick={() => edit(s)}
                  className="btn btn-sm bg-yellow-500 text-white"
                >
                  Edit
                </button>
                <button
                  onClick={() => del(s?._id)}
                  className="btn btn-sm bg-red-500 text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
        {!items.length && (
          <p className="text-gray-500">No service pages yet.</p>
        )}
      </div>
    </div>
  );
}
