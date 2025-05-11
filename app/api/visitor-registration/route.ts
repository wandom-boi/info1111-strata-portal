import { NextResponse } from 'next/server';

// Simulating a database with an array
let visitorRegistrations: any[] = [];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.visitorName || !body.unitNumber || !body.visitDate || !body.hostName) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate visit date is in the future
    const visitDate = new Date(body.visitDate);
    if (visitDate < new Date()) {
      return NextResponse.json(
        { error: 'Visit date must be in the future' },
        { status: 400 }
      );
    }

    // Create new visitor registration
    const newRegistration = {
      id: Date.now().toString(),
      visitorName: body.visitorName,
      unitNumber: body.unitNumber,
      visitDate: body.visitDate,
      hostName: body.hostName,
      status: 'pending',
      createdAt: new Date().toISOString(),
      notes: body.notes || '',
      expectedDuration: body.expectedDuration || '2 hours'
    };

    visitorRegistrations.push(newRegistration);

    return NextResponse.json(newRegistration, { status: 201 });
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
  const date = searchParams.get('date');
  const status = searchParams.get('status');

  let filteredRegistrations = visitorRegistrations;

  if (unitNumber) {
    filteredRegistrations = filteredRegistrations.filter(reg => reg.unitNumber === unitNumber);
  }

  if (date) {
    const searchDate = new Date(date).toDateString();
    filteredRegistrations = filteredRegistrations.filter(reg => 
      new Date(reg.visitDate).toDateString() === searchDate
    );
  }

  if (status) {
    filteredRegistrations = filteredRegistrations.filter(reg => reg.status === status);
  }

  // Sort by visit date
  filteredRegistrations.sort((a, b) => 
    new Date(a.visitDate).getTime() - new Date(b.visitDate).getTime()
  );

  return NextResponse.json(filteredRegistrations);
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const registration = visitorRegistrations.find(reg => reg.id === id);
    if (!registration) {
      return NextResponse.json(
        { error: 'Registration not found' },
        { status: 404 }
      );
    }

    registration.status = status;
    registration.updatedAt = new Date().toISOString();

    return NextResponse.json(registration);
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  }
} 