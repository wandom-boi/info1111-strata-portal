import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // Get the type of redirect from the URL search params
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');

  switch (type) {
    case 'permanent':
      // 301 Moved Permanently
      // Use when the resource has been permanently moved
      // Browsers will cache this redirect
      return NextResponse.redirect(new URL('/dashboard', request.url), {
        status: 301,
        headers: {
          'Cache-Control': 'public, max-age=31536000', // Cache for 1 year
        },
      });

    case 'temporary':
      // 302 Found (Temporary Redirect)
      // Use when the resource is temporarily moved
      // Browsers won't cache this redirect
      return NextResponse.redirect(new URL('/dashboard', request.url), {
        status: 302,
      });

    case 'see-other':
      // 303 See Other
      // Use after POST requests to redirect to a GET request
      return NextResponse.redirect(new URL('/dashboard', request.url), {
        status: 303,
      });

    case 'not-modified':
      // 304 Not Modified
      // Use when the resource hasn't changed
      return new NextResponse(null, {
        status: 304,
        headers: {
          'ETag': '"123456789"',
          'Last-Modified': new Date().toUTCString(),
        },
      });

    default:
      // 400 Bad Request
      // Use when the request is invalid
      return NextResponse.json(
        { error: 'Invalid redirect type' },
        { status: 400 }
      );
  }
} 