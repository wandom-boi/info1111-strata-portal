"use client";

import Image from "next/image";
import { useState } from "react";

export default function Property() {
  // Generate apartment data
  const apartments = Array.from({ length: 17 }, (_, floor) => 
    Array.from({ length: 10 }, (_, unit) => ({
      id: `${floor + 1}${String(unit + 1).padStart(2, '0')}`,
      number: `${floor + 1}${String(unit + 1).padStart(2, '0')}`,
      floor: floor + 1,
      unit: unit + 1,
      status: Math.random() > 0.8 ? 'occupied' : 'available' // Random status for demo
    }))
  ).flat();

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Fixed Navigation Bar */}
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
            <a
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm px-4 py-2"
                href="/dashboard"
              >
                Home
              </a>
              <a
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm px-4 py-2"
                href="/maintenance"
              >
                Maintenance
              </a>
              <a
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm px-4 py-2"
                href="/property"
              >
                Properties
              </a>
              <a
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm px-4 py-2"
                href="/management"
              >
                Team
              </a>
              <a
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm px-4 py-2"
                href="/documents"
              >
                Documents
              </a>
              <a
                className="rounded-full border border-solid border-white transition-colors flex items-center justify-center bg-black text-white gap-2 hover:bg-[#383838] font-medium text-sm px-4 py-2 ml-4"
                href="/"
              >
                Log Out
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-24 px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Building Apartments</h1>

          {/* Floor Navigation */}
          <div className="flex justify-center mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {Array.from({ length: 17 }, (_, i) => (
                <button
                  key={i + 1}
                  className="px-4 py-2 rounded-full border border-solid border-black/[.08] dark:border-white/[.145] hover:bg-foreground hover:text-background transition-colors"
                >
                  Floor {i + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Apartment Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {apartments.map((apartment) => (
              <div
                key={apartment.id}
                className={`group relative p-6 rounded-lg border border-solid border-black/[.08] dark:border-white/[.145] transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:scale-[1.02] cursor-pointer ${
                  apartment.status === 'occupied' ? 'bg-gray-100 dark:bg-gray-800' : 'bg-white dark:bg-gray-900'
                }`}
              >
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-xl font-semibold mb-2">Unit {apartment.number}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Floor {apartment.floor}
                  </p>
                  <span className={`mt-2 px-3 py-1 rounded-full text-sm ${
                    apartment.status === 'occupied' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                  }`}>
                    {apartment.status === 'occupied' ? 'Occupied' : 'Available'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}