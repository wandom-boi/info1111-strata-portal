import { NextResponse } from 'next/server';

export const runtime = 'edge';

// Simulating real-time building systems data
const buildingSystems = {
  elevators: [
    { id: 'Elevator 1', status: 'Operational', floor: 5, lastMaintenance: '2024-02-15' },
    { id: 'Elevator 2', status: 'Operational', floor: 3, lastMaintenance: '2024-02-15' }
  ],
  security: {
    status: 'Active',
    lastIncident: null,
    activeGuards: 2
  },
  utilities: {
    power: { status: 'Normal', load: '65%' },
    water: { status: 'Normal', pressure: 'Optimal' },
    hvac: { status: 'Operational', temperature: '22°C' }
  },
  parking: {
    totalSpaces: 100,
    availableSpaces: 45,
    reservedSpaces: 10
  }
};

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const system = searchParams.get('system');

    // Add real-time timestamp
    const response = {
      timestamp: new Date().toISOString(),
      systems: system ? { [system]: buildingSystems[system as keyof typeof buildingSystems] } : buildingSystems
    };

    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch building status' },
      { status: 500 }
    );
  }
}

// Webhook endpoint for system updates
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { system, data } = body;

    if (!system || !data) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Update the system data
    if (system in buildingSystems) {
      buildingSystems[system as keyof typeof buildingSystems] = {
        ...buildingSystems[system as keyof typeof buildingSystems],
        ...data,
        lastUpdated: new Date().toISOString()
      };
    }

    return NextResponse.json({
      message: 'System updated successfully',
      system,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update system' },
      { status: 500 }
    );
  }
} 