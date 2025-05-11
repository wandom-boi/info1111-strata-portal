import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  try {
    const vercelConfigPath = path.join(process.cwd(), "vercel.json");
    const file = await fs.readFile(vercelConfigPath, "utf-8");
    const config = JSON.parse(file);
    const regions = config.regions || [];
    return NextResponse.json({ regions });
  } catch (e) {
    return NextResponse.json({ regions: [] });
  }
}