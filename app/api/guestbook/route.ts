import { NextRequest, NextResponse } from 'next/server';

// This will store guestbook entries
// In production, you'll connect this to Supabase or Firebase
let guestbookEntries: Array<{
  id: string;
  message: string;
  timestamp: string;
  approved: boolean;
}> = [];

// GET - Fetch approved guestbook entries
export async function GET() {
  try {
    // Filter only approved messages
    const approvedEntries = guestbookEntries
      .filter(entry => entry.approved)
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
      .slice(0, 10); // Return latest 10 messages

    return NextResponse.json({
      success: true,
      entries: approvedEntries,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch entries' },
      { status: 500 }
    );
  }
}

// POST - Submit new guestbook entry
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message } = body;

    // Validation
    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Message is required' },
        { status: 400 }
      );
    }

    if (message.length < 3) {
      return NextResponse.json(
        { success: false, error: 'Message is too short' },
        { status: 400 }
      );
    }

    if (message.length > 500) {
      return NextResponse.json(
        { success: false, error: 'Message is too long (max 500 characters)' },
        { status: 400 }
      );
    }

    // Create new entry
    const newEntry = {
      id: Date.now().toString(),
      message: message.trim(),
      timestamp: new Date().toISOString(),
      approved: true, // Auto-approve for now (you can change this to false for manual moderation)
    };

    guestbookEntries.push(newEntry);

    return NextResponse.json({
      success: true,
      message: 'Entry submitted successfully',
      entry: newEntry,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to submit entry' },
      { status: 500 }
    );
  }
}
