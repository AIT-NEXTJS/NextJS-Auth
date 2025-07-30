import { NextResponse } from 'next/server';
import dns from 'dns/promises';

export async function GET() {
  try {
    const ip = await dns.lookup('db.entteuzzzdefbtknqipy.supabase.co');
    return NextResponse.json({ success: true, ip });
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : 'Unknown DNS error';
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
