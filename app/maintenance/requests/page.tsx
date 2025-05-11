"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

type Request = {
  id: number;
  apartment: string;
  article: string;
  details: string;
  date: string;
};

export default function MaintenanceRequestsList() {
  const [requests, setRequests] = useState<Request[]>([]);

  useEffect(() => {
    fetch("/api/maintenance/list")
      .then(res => res.json())
      .then(data => setRequests(data.requests));
  }, []);

  return (
     
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] pt-24 px-8 pb-20 max-w-3xl mx-auto">
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
      <h1 className="text-3xl font-bold mb-8 text-center">All Maintenance Requests</h1>
      <ul>
        {requests.length === 0 && (
          <li className="text-gray-500 text-center">No requests found.</li>
        )}
        {requests.map(req => (
          <li
            key={req.id}
            className="mb-4 p-4 border rounded-lg shadow hover:shadow-blue-200 transition-shadow"
          >
            <div><strong>Apartment:</strong> {req.apartment}</div>
            <div><strong>Article:</strong> {req.article}</div>
            <div><strong>Details:</strong> {req.details}</div>
            <div><strong>Date:</strong> {req.date}</div>
          </li>
        ))}
      </ul>
      <div className="flex justify-center mt-8">
        <a
          href="/maintenance"
          className="rounded-full border border-solid border-blue-500 text-blue-500 transition-colors flex items-center justify-center gap-2 px-6 py-2 font-medium text-sm hover:bg-blue-500 hover:text-white shadow hover:shadow-blue-300"
        >
          Back to Maintenance Form
        </a>
      </div>
    </div>
  );
}