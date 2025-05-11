import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    // Sydney coordinates (you can make this configurable)
    const lat = -33.8688;
    const lon = 151.2093;
    
    // OpenWeatherMap API (you'll need to add your API key to environment variables)
    const apiKey = process.env.OPENWEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    
    const response = await fetch(url, { next: { revalidate: 1800 } }); // Cache for 30 minutes
    const data = await response.json();

    // Format the response
    const weatherInfo = {
      temperature: Math.round(data.main.temp),
      description: data.weather[0].description,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      icon: data.weather[0].icon,
      updatedAt: new Date().toISOString()
    };

    return NextResponse.json(weatherInfo);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch weather data' },
      { status: 500 }
    );
  }
} 