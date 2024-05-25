import { db } from "@/lib/db";

export const getAllProducts = async ({ query }: { query?: string }) => {
  try {
    let products = db.product.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    if (query) {
      products = db.product.findMany({
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
  } catch (error) {
    throw new Error(
      "Something went wrong☹️ on our end or we don't have such a product",
    );
  }
};

export const getProductsCount = async () => {
  const products = await getAllProducts({});
  return products.length;
};
