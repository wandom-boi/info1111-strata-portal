import { NextResponse } from 'next/server';

export async function GET() {
  // Get the server's region from Vercel's environment
  const region = process.env.VERCEL_REGION || 'unknown';
  
  return NextResponse.json({
    region: region,
    message: `This request was handled by a server in ${region}`,
    timestamp: new Date().toISOString(),
    environment: process.env.NEXT_PUBLIC_APP_ENV
  });
} 