import { NextResponse } from "next/server";

import { db } from "@/lib/db";

export async function PATCH(
  req: Request,
  { params }: { params: { productId: string } },
) {
  try {
    const { productId } = params;
    const values = await req.json();

    // Check if sizes are provided in the request
    if ("sizes" in values && Array.isArray(values.sizes)) {
      const sizes = values.sizes.map((sizeId: string) => ({ id: sizeId }));

      // Find the product by ID including all the current sizes
      const existingProduct = await db.product.findUnique({
        where: { id: productId },
        include: { sizes: true },
      });

      // Disconnect existing sizes from the product
      await db.product.update({
        where: { id: productId },
        data: {
          sizes: {
            disconnect: existingProduct?.sizes.map((size) => ({ id: size.id })),
          },
        },
      });

      // Connect new sizes to the product
      await db.product.update({
        where: { id: productId },
        data: {
          sizes: {
            connect: sizes.map((size: { id: string }) => ({ id: size.id })),
          },
        },
      });
    }

    // Update other fields if needed
    const updatedProduct = await db.product.update({
      where: { id: productId },
      data: {
        ...(values && { ...values, sizes: undefined }), // Exclude sizes from other updates
      },
    });

    return NextResponse.json(updatedProduct);
  } catch (error) {
    console.log("[PRODUCT_ID]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
