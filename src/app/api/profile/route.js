import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

export async function POST(req) {
  const { auth_user_id, ...profileData } = await req.json();

  try {
    const { data, error } = await supabase
      .from('users')
      .update(profileData)
      .eq('auth_user_id', auth_user_id)
      .single();

    if (error) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function GET(req) {
  return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}
