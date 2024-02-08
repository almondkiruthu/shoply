import { NextResponse } from "next/server";

import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { name } = await req.json();

    const course = await db.product.create({
      data: {
        name,
      },
    });

    return NextResponse.json(course);
  } catch (error) {
    console.log("[PRODUCT CREATION]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
