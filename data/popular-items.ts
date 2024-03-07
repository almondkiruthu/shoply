import { db } from "@/lib/db";

export const getPopularProducts = async () => {
  const popularProducts = await db.product.findMany({
    where: {
      isPopular: true,
    },
  });

  return popularProducts;
};
