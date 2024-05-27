import { notFound } from "next/navigation";

import { db } from "@/lib/db";

export const getAllProducts = async ({ query }: { query?: string }) => {
  let products = await db.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  if (query) {
    products = await db.product.findMany({
      where: {
        OR: [
          { name: { contains: query, mode: "insensitive" } },
          { mainCategory: { contains: query, mode: "insensitive" } },
        ],
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  return products;
};

export const getProductsCount = async () => {
  const products = await getAllProducts({});
  return products.length;
};
