import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { apartment, article, details } = body;

    // Here you would typically:
    // 1. Validate the data
    // 2. Store in a database
    // 3. Send notification emails
    // 4. etc.

    // For now, we'll just log it
    console.log('Maintenance Request:', {
      apartment,
      article,
      details,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Maintenance request received' 
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Error processing request' },
      { status: 500 }
    );
  }
}