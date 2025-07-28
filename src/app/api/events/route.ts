import { db } from "@/db";
import { eventsTable } from "@/db/schema";
import { eq } from 'drizzle-orm';
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const events = await db.select().from(eventsTable);
  return NextResponse.json(events);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, description } = body;
  const [events] = await db
    .insert(eventsTable)
    .values({ name, description })
    .returning();

  return NextResponse.json(events);
}
export async function DELETE(req: Request) {
  const body = await req.json();
  const id = Number(body.id);

  const deleted = await db.delete(eventsTable).where(eq(eventsTable.id, id)).returning();
  return NextResponse.json(deleted);
}

// or via path:

// import { db } from '@/db'; 
// import { eventsTable } from '@/db/schema';
// import { eq } from 'drizzle-orm';
// import { NextResponse } from 'next/server';

// export async function DELETE(req: Request, { params }: { params: { id: string } }) {
//   const id = Number(params.id);
//   const deleted = await db
//     .delete(eventsTable)
//     .where(eq(eventsTable.id, id))
//     .returning();

//   return NextResponse.json(deleted);
// }