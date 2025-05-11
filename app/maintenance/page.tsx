"use client";

import Image from "next/image";
import { useState, useRef } from "react";

export default function Maintenance() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowSuccess(false); // Reset success message
  
    const formData = new FormData(e.currentTarget);
    const data = {
      apartment: formData.get('apartment'),
      article: formData.get('article'),
      details: formData.get('details')
    };
  
    try {
      const response = await fetch('/api/maintenance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
  
      const result = await response.json();
  
      if (result.success) {
        setShowSuccess(true);
        formRef.current?.reset();
        setTimeout(() => {
          setShowSuccess(false);
        }, 3000);
      }
    } catch (error) {
      console.error('Error submitting maintenance request:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
                href="/properties"
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
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Maintenance Request</h1>

          <div className="flex justify-end mb-6">
            <a
              href="/maintenance/requests"
              className="rounded-full border border-solid border-blue-500 text-blue-500 transition-colors flex items-center justify-center gap-2 px-6 py-2 font-medium text-sm hover:bg-blue-500 hover:text-white shadow hover:shadow-blue-300"
            >
              View All Requests
            </a>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            {/* Apartment Number */}
            <div className="group">
              <label htmlFor="apartment" className="block text-sm font-medium mb-2">
                Apartment Number
              </label>
              <input
                type="text"
                id="apartment"
                name="apartment"
                required
                className="w-full p-4 rounded-lg border border-solid border-black/[.08] dark:border-white/[.145] transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] focus:shadow-[0_0_15px_rgba(0,0,0,0.2)] dark:focus:shadow-[0_0_15px_rgba(255,255,255,0.2)] focus:outline-none bg-white dark:bg-gray-800"
                placeholder="Enter your apartment number"
              />
            </div>

            {/* Article to Fix */}
            <div className="group">
              <label htmlFor="article" className="block text-sm font-medium mb-2">
                Article to Fix
              </label>
              <input
                type="text"
                id="article"
                name="article"
                required
                className="w-full p-4 rounded-lg border border-solid border-black/[.08] dark:border-white/[.145] transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] focus:shadow-[0_0_15px_rgba(0,0,0,0.2)] dark:focus:shadow-[0_0_15px_rgba(255,255,255,0.2)] focus:outline-none bg-white dark:bg-gray-800"
                placeholder="What needs to be fixed?"
              />
            </div>

            {/* Details */}
            <div className="group">
              <label htmlFor="details" className="block text-sm font-medium mb-2">
                Details
              </label>
              <textarea
                id="details"
                name="details"
                required
                rows={4}
                className="w-full p-4 rounded-lg border border-solid border-black/[.08] dark:border-white/[.145] transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] focus:shadow-[0_0_15px_rgba(0,0,0,0.2)] dark:focus:shadow-[0_0_15px_rgba(255,255,255,0.2)] focus:outline-none bg-white dark:bg-gray-800 resize-none"
                placeholder="Please provide details about the issue..."
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-8 sm:px-10 disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </button>
            </div>

            {/* Success Message */}
            {showSuccess && (
              <div className="text-center text-green-600 dark:text-green-400 font-medium">
                Request sent.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}