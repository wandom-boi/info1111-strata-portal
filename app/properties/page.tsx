"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

type Apartment = {
  number: string;
  floor: number;
  status: string;
};

export default function Properties() {
  // Search state
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<Apartment | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

  // Apartment grid state
  const [apartments, setApartments] = useState<Apartment[]>([]);

  useEffect(() => {
    // Generate all apartments for the grid
    const generated = Array.from({ length: 17 }, (_, floor) =>
      Array.from({ length: 10 }, (_, unit) => ({
        number: `${floor + 1}${String(unit + 1).padStart(2, "0")}`,
        floor: floor + 1,
        status: (Math.random() > 0.8 ? "occupied" : "available") as "occupied" | "available",
      }))
    ).flat();
    setApartments(generated);
  }, []);

  // Search handler
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setNotFound(false);

    const res = await fetch(`/api/properties/search?number=${encodeURIComponent(query)}`);
    const data = await res.json();
    setLoading(false);

    if (data.found) {
      setResult(data.apartment);
    } else {
      setNotFound(true);
    }
  };

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 bg-background border-b border-black/[.08] dark:border-white/[.145] z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Image
              src="/the-strata-portal.png"
              alt="Logo"
              width={200}
              height={40}
              className="h-8 w-auto ml-2"
            />
            <div className="flex items-center space-x-4">
              <a className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm px-4 py-2" href="/dashboard">Home</a>
              <a className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm px-4 py-2" href="/maintenance">Maintenance</a>
              <a className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm px-4 py-2" href="/properties">Properties</a>
              <a className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm px-4 py-2" href="/management">Team</a>
              <a className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm px-4 py-2" href="/documents">Documents</a>
              <a className="rounded-full border border-solid border-white transition-colors flex items-center justify-center bg-black text-white gap-2 hover:bg-[#383838] font-medium text-sm px-4 py-2 ml-4" href="/">Log Out</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-24 px-8 pb-20 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Apartments</h1>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="mb-8 flex gap-2 max-w-lg mx-auto">
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Apartment Number (no database yet, use 1203)"
            className="border rounded px-3 py-2 flex-1"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? "Searching..." : "Search"}
          </button>
        </form>

        {/* Search Result */}
        {result && (
          <div className="p-6 rounded-lg border border-blue-300 bg-blue-50 dark:bg-blue-900 mb-4 max-w-lg mx-auto">
            <div><strong>Apartment Number:</strong> {result.number}</div>
            <div><strong>Floor:</strong> {result.floor}</div>
            <div><strong>Status:</strong> {result.status}</div>
          </div>
        )}
        {notFound && (
          <div className="p-4 rounded bg-red-100 text-red-700 border border-red-300 max-w-lg mx-auto">
            Apartment not found.
          </div>
        )}

        {/* Apartment Grid */}
        <h2 className="text-2xl font-semibold mt-12 mb-4">All Apartments</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {apartments.map((apartment, idx) => (
            <div
              key={apartment.number + idx}
              className={`group relative p-6 rounded-lg border border-solid border-black/[.08] dark:border-white/[.145] transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:scale-[1.02] cursor-pointer ${
                apartment.status === "occupied"
                  ? "bg-gray-100 dark:bg-gray-800"
                  : "bg-white dark:bg-gray-900"
              }`}
            >
              <div className="flex flex-col items-center text-center">
                <h3 className="text-xl font-semibold mb-2">Unit {apartment.number}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Floor {apartment.floor}
                </p>
                <span
                  className={`mt-2 px-3 py-1 rounded-full text-sm ${
                    apartment.status === "occupied"
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                  }`}
                >
                  {apartment.status === "occupied" ? "Occupied" : "Available"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}