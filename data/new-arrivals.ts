import { db } from "@/lib/db";

export const getNewArrivalsProducts = async () => {
  const newArrivalProducts = await db.product.findMany({
    where: {
      isNewArrival: true,
    },
  });
};
