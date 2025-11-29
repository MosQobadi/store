"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async () => {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    alert(data.error ?? "Login success!");
  };

  return (
    <div className="p-10 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Login</h1>

      <input
        className="border p-2 w-full"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="border p-2 w-full mt-2"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className="bg-blue-600 text-white p-2 mt-4 w-full"
        onClick={submit}
      >
        Login
      </button>
    </div>
  );
}
