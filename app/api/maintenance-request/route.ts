import { NextResponse } from 'next/server';

// Simulating a database with an array
let maintenanceRequests: any[] = [];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.unitNumber || !body.description || !body.priority) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create new maintenance request
    const newRequest = {
      id: Date.now().toString(),
      unitNumber: body.unitNumber,
      description: body.description,
      priority: body.priority,
      status: 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    maintenanceRequests.push(newRequest);

    return NextResponse.json(newRequest, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const unitNumber = searchParams.get('unitNumber');
  const status = searchParams.get('status');

  let filteredRequests = maintenanceRequests;

  if (unitNumber) {
    filteredRequests = filteredRequests.filter(req => req.unitNumber === unitNumber);
  }

  if (status) {
    filteredRequests = filteredRequests.filter(req => req.status === status);
  }

  return NextResponse.json(filteredRequests);
} 