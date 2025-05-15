import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    
    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const emailableApiKey = process.env.EMAILABLE_API_KEY;
    if (!emailableApiKey) {
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const response = await fetch(
      `https://api.emailable.com/v1/verify?email=${encodeURIComponent(email)}&api_key=${emailableApiKey}`
    );
    
    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to verify email' }, { status: response.status });
    }

    const data = await response.json();
    
    if (data.state === 'deliverable' || data.state === 'risky') {
      return NextResponse.json({ isValid: true, message: 'Email verified successfully' });
    } else {
      return NextResponse.json({ isValid: false, message: 'Invalid or undeliverable email' }, { status: 400 });
    }
  } catch (error) {
    console.error('Email verification error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}