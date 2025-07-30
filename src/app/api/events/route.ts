import { db } from "@/db";
import { eventsTable } from "@/db/schema";
import { eq } from 'drizzle-orm';
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";
import { de } from "zod/locales";

import { authOptions } from '@/lib/authOptions';



const EventInsertSchema = z.object({
  name: z.string().min(3, "Minimal length is 3"),
  description: z.string().max(250, "Description should be less then 250")

// zod refine

                          .refine(
                                   (val) => {
                                     if (val === "Java is the best language") {
                                      return false;
                                     }
                                    return true;
                                     },
                          { message: "You should learn other languages" }
                          ),

});




export async function GET() {
  const events = await db.select().from(eventsTable);
  return NextResponse.json(events);
}

export async function POST(req: NextRequest) {

try {

const session = await getServerSession(authOptions);

if (!session) {
  return NextResponse.json(
    { error: "Unauthorized" },
    { status: 401 }
  ); 
}

// 401 - Unauthorized
// 403 - Forbidden
// 404 - Not found
// 500 - Internal server error
// 200 - OK
// 201 - Created
// 400 - Bad request


  const body = await req.json();


  const { name, description } = EventInsertSchema.parse(body);
  const [events] = await db
    .insert(eventsTable)
    .values({ name, description })
    .returning();

  return NextResponse.json(events,{status: 201});

 } catch (error) {
console.error("ERROR:", error);
 if (error instanceof z.ZodError) 
{
      return NextResponse.json(
        { error: "Invalid input", details: error.issues },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );

  }
}


export async function DELETE(req: Request) {
  const body = await req.json();
  const id = Number(body.id);

  const deleted = await db.delete(eventsTable).where(eq(eventsTable.id, id)).returning();
  return NextResponse.json(deleted,{status:200}); 
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


// версия учителя 

// import { db } from "@/db";
// import { eventsTable } from "@/db/schema";
// import { NextRequest, NextResponse } from "next/server";
// import z from "zod";

// const EventInsertSchema = z.object({
//   name: z.string().min(3, "Minimal length is 3"),
//   description: z.string().max(250, "Description should be less then 250"),
// });

// export async function GET() {
//   const events = await db.select().from(eventsTable);
//   return NextResponse.json(events);
// }

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();
//     const newEvent = EventInsertSchema.parse(body);
//     const [event] = await db.insert(eventsTable).values(newEvent).returning();
//     return NextResponse.json(event, { status: 201 });
//   } catch (error) {
//     if (error instanceof z.ZodError) {
//       return NextResponse.json(
//         { error: "Invalid input", details: error.issues },
//         { status: 400 }
//       );
//     }
//     return NextResponse.json(
//       { error: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }