import { db } from "@/db";
import { sportsTable } from "@/db/schema";
import { NextRequest, NextResponse } from "next/server";
import z from "zod"; // z
//export const runtime = "nodejs"; // netlify compatible

const SportInsertSchema = z.object({ // z
  title: z.string().min(3, "Title should be at least 3 characters long"), // z
  image: z.string().url("Image must be a valid URL"), // z
  description: z.string() // z
    .max(250, "Description should be less than 250 characters") // z
    .refine((val) => val !== "Sport is not for me", { message: "Life is a sport — give it a few more chances ;)" }), // z
}); // z

// export async function GET() {
//   const sports = await db.select().from(sportsTable);
//   return NextResponse.json(sports);
// }

export async function GET() {
  try {
    const sports = await db.select().from(sportsTable);
    return NextResponse.json(sports);
  } catch (error: unknown) {
 
    const err = error instanceof Error ? error : new Error("Unknown error");

    console.error("❌ GET /api/sports error:", err);

    return NextResponse.json(
      {
        error: "Database fetch failed",
        name: err.name,
        message: err.message,
        stack: err.stack,
      },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try { // z
    const body = await req.json(); // z
    const { title, image, description } = SportInsertSchema.parse(body); // z

    const [sport] = await db
      .insert(sportsTable)
      .values({ title, image, description })
      .returning();

    return NextResponse.json(sport, { status: 201 }); // z
 } catch (error) {
  console.error("POST /api/sports error:", error); 
  if (error instanceof z.ZodError) {
    return NextResponse.json({ error: "Invalid input", details: error.issues }, { status: 400 });
  }
  return NextResponse.json({ error: "Internal server error", details: String(error) }, { status: 500 });
}
}


// Был код такой, перед добавлением валидации zod:

// import { db } from "@/db";
// import { sportsTable } from "@/db/schema";
// import { NextRequest, NextResponse } from "next/server";

// export async function GET() {
//   const sports = await db.select().from(sportsTable);
//   return NextResponse.json(sports);
// }

// export async function POST(req: NextRequest) {
//   const body = await req.json();
//   const { title, image, description } = body;
//   const [sport] = await db
//     .insert(sportsTable)
//     .values({ title, image, description })
//     .returning();

//   return NextResponse.json(sport);
// }