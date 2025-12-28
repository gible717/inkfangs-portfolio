# Guestbook Setup Guide

Your guestbook is currently functional with in-memory storage. This means messages will work during development but will be reset when the server restarts.

## Current Status ✅

- ✅ Guestbook UI is complete
- ✅ API routes are functional (`/api/guestbook`)
- ✅ Form submission works
- ✅ Messages display in real-time
- ✅ Character limit (500 chars)
- ✅ Validation and error handling

## What Works Now (Development Mode)

Messages are stored in memory and will persist during your dev session. Perfect for testing!

---

## Option 1: Upgrade to Supabase (Recommended for Production)

### Why Supabase?
- ✅ Free tier (up to 500MB database, 50,000 monthly active users)
- ✅ Real-time updates
- ✅ PostgreSQL database
- ✅ No credit card required
- ✅ Easy to set up

### Setup Steps:

#### 1. Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Click "Start your project"
3. Create a new project (choose a name, password, region)
4. Wait for setup to complete (~2 minutes)

#### 2. Create Guestbook Table

In your Supabase dashboard, go to **SQL Editor** and run:

```sql
CREATE TABLE guestbook (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  message TEXT NOT NULL,
  timestamp TIMESTAMPTZ DEFAULT NOW(),
  approved BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add index for faster queries
CREATE INDEX idx_guestbook_timestamp ON guestbook(timestamp DESC);

-- Enable Row Level Security (optional but recommended)
ALTER TABLE guestbook ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read approved messages
CREATE POLICY "Allow public read access"
  ON guestbook FOR SELECT
  USING (approved = true);

-- Optional: Allow inserts (if you want anonymous submissions)
CREATE POLICY "Allow public insert"
  ON guestbook FOR INSERT
  WITH CHECK (true);
```

#### 3. Get Your API Credentials

1. Go to **Settings** > **API**
2. Copy your **Project URL** and **anon public** key

#### 4. Install Supabase Client

```bash
npm install @supabase/supabase-js
```

#### 5. Add Environment Variables

Create `.env.local` in your project root:

```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url-here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

#### 6. Create Supabase Client

Create `lib/supabase.ts`:

```typescript
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

#### 7. Update API Route

Replace `app/api/guestbook/route.ts` with:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// GET - Fetch approved guestbook entries
export async function GET() {
  try {
    const { data, error } = await supabase
      .from('guestbook')
      .select('*')
      .eq('approved', true)
      .order('timestamp', { ascending: false })
      .limit(10);

    if (error) throw error;

    return NextResponse.json({
      success: true,
      entries: data,
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

    // Insert into Supabase
    const { data, error } = await supabase
      .from('guestbook')
      .insert([
        {
          message: message.trim(),
          approved: true, // Set to false if you want manual moderation
        },
      ])
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({
      success: true,
      message: 'Entry submitted successfully',
      entry: data,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to submit entry' },
      { status: 500 }
    );
  }
}
```

---

## Option 2: Use Vercel KV (Alternative)

If you're deploying on Vercel, you can use Vercel KV (Redis):

### Setup:

1. Install Vercel KV:
   ```bash
   npm install @vercel/kv
   ```

2. Enable KV in your Vercel project dashboard

3. Use in API route:
   ```typescript
   import { kv } from '@vercel/kv';

   // Store messages
   await kv.lpush('guestbook', JSON.stringify(entry));

   // Retrieve messages
   const entries = await kv.lrange('guestbook', 0, 9);
   ```

---

## Option 3: Keep In-Memory (Development Only)

The current setup works great for:
- ✅ Local development
- ✅ Testing the UI/UX
- ✅ Demonstrating the feature

**Limitation:** Messages reset when server restarts

---

## Moderation Features (Optional)

If you want to manually approve messages:

1. Set `approved: false` by default in POST endpoint
2. Create admin dashboard at `/admin/guestbook`
3. Add approval/rejection buttons
4. Only show `approved: true` messages publicly

---

## Security Considerations

✅ **Already Implemented:**
- Character limit (500 chars)
- Input validation
- Trim whitespace
- Type checking

🔒 **Additional Options:**
- Rate limiting (prevent spam)
- Profanity filter
- reCAPTCHA v3 (invisible)
- IP-based throttling

---

## Next Steps

1. **For Development:** Current setup works fine! Test it out.
2. **For Production:** Choose Supabase (easiest) or Vercel KV
3. **Deploy:** Push to Vercel, add environment variables
4. **Test:** Submit messages and verify they persist

---

## Need Help?

- Supabase Docs: https://supabase.com/docs
- Vercel KV Docs: https://vercel.com/docs/storage/vercel-kv

Your guestbook is ready to go! 🚀
