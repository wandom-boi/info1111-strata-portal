import { NextResponse } from 'next/server';

// Simulating a database with an array
let announcements: any[] = [];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.title || !body.content || !body.priority) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create new announcement
    const newAnnouncement = {
      id: Date.now().toString(),
      title: body.title,
      content: body.content,
      priority: body.priority,
      createdAt: new Date().toISOString(),
      expiresAt: body.expiresAt || null,
      isActive: true
    };

    announcements.push(newAnnouncement);

    return NextResponse.json(newAnnouncement, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const priority = searchParams.get('priority');
  const active = searchParams.get('active');

  let filteredAnnouncements = announcements;

  if (priority) {
    filteredAnnouncements = filteredAnnouncements.filter(ann => ann.priority === priority);
  }

  if (active === 'true') {
    const now = new Date();
    filteredAnnouncements = filteredAnnouncements.filter(ann => 
      ann.isActive && (!ann.expiresAt || new Date(ann.expiresAt) > now)
    );
  }

  // Sort by creation date, newest first
  filteredAnnouncements.sort((a, b) => 
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return NextResponse.json(filteredAnnouncements);
} 