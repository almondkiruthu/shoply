import { revalidatePath } from "next/cache";

import { createSafeAction } from "@/lib/create-safe-action";
import { db } from "@/lib/db";

import { CreateProduct } from "./schema";
import { InputType, ReturnType } from "./type";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { name } = data;

  let product;

  try {
    product = await db.product.create({
      data: {
        name,
      },
    });
  } catch (error) {
    return {
      error: "Failed to Create Product",
    };
  }

  revalidatePath("/dashboard");
  return { data: product };
};

export const createProduct = createSafeAction(CreateProduct, handler);
