import { NextResponse } from 'next/server';

// For demonstration, we'll use a static array.
// In a real app, you would fetch this from a database.
const mockRequests = [
  {
    id: 1,
    apartment: "1203",
    article: "Air Conditioner",
    details: "Not cooling properly.",
    date: "2024-06-01"
  },
  {
    id: 2,
    apartment: "503",
    article: "Window",
    details: "Cracked glass pane.",
    date: "2024-06-02"
  }
];

export async function GET() {
  // In a real app, fetch from DB here
  return NextResponse.json({ requests: mockRequests });
}