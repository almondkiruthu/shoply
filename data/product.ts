import { db } from "@/lib/db";

export const getAllProducts = async () => {
  const products = await db.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return products;
};
