"use client";
import "./home.css";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-2xl md:text-4xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
        Watch Out This Space
      </h1>
      <p className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-amber-400 via-rose-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
        Cooking...
      </p>
    </div>
  );
}
