import { NextResponse } from "next/server";

import { db } from "@/lib/db";

export async function PATCH(
  req: Request,
  { params }: { params: { productId: string } },
) {
  try {
    const { productId } = params;
    const values = await req.json();

    const course = await db.product.update({
      where: {
        id: productId,
      },
      data: {
        ...values,
      },
    });

    return NextResponse.json(course);
  } catch (error) {
    console.log("[PRODUCT_ID]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
