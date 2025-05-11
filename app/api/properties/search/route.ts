import { NextRequest, NextResponse } from "next/server";

// Example: GET /api/apartments/search?number=1203
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const number = searchParams.get("number");

  // Replace with real DB lookup or data source
  if (number === "1203") {
    return NextResponse.json({
      found: true,
      apartment: { number: "1203", floor: 12, status: "occupied" }
    });
  }
  return NextResponse.json({ found: false });
}