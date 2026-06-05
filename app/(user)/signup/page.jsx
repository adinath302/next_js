"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [status, setStatus] = useState({ type: "idle", message: "" });

  function handleSubmit(e) {
    e.preventDefault();

    // Independent client-only form (no API/fetch per requirement)
    setStatus({ type: "success", message: "Registration successful" });

    setFormData({
      fullName: "",
      email: "",
      password: "",
    });

    router.push("/")
  }

  return (
    <div className="min-h-[60vh] flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-xl border border-zinc-200 bg-white p-6 shadow-sm"
      >
        <h1 className="text-2xl font-semibold">Create account</h1>
        <p className="mt-1 text-sm text-zinc-600">
          Register with your full name, email and password.
        </p>

        {status.type !== "idle" && (
          <div
            className={
              "mt-4 rounded-lg border px-3 py-2 text-sm " +
              (status.type === "error"
                ? "border-red-200 bg-red-50 text-red-700"
                : "border-emerald-200 bg-emerald-50 text-emerald-700")
            }
            role={status.type === "error" ? "alert" : "status"}
          >
            {status.message}
          </div>
        )}

        <div className="mt-5 space-y-4">
          <div>
            <label className="block text-sm font-medium text-zinc-700">
              Full name
            </label>
            <input
              value={formData.fullName}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, fullName: e.target.value }))
              }
              type="text"
              name="fullName"
              autoComplete="name"
              placeholder="John Doe"
              className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:border-zinc-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700">
              Email address
            </label>
            <input
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              type="email"
              name="email"
              autoComplete="email"
              placeholder="john@example.com"
              className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:border-zinc-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700">
              Password
            </label>
            <input
              value={formData.password}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, password: e.target.value }))
              }
              type="text"
              name="password"
              autoComplete="new-password"
              placeholder="••••••••"
              className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:border-zinc-500 text-black"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 w-full rounded-lg bg-black px-4 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800"
        >
          Create account
        </button>
      </form>
    </div>
  );
}

