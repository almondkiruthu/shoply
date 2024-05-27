import { MetadataRoute } from "next";

import { db } from "@/lib/db";

export default async function robots(): Promise<MetadataRoute.Robots> {
  // Fetch all products from the database
  const products = await db.product.findMany({});

  // Map through the products to create disallow rules for each product
  const productDisallowRules = products.map(
    (product) => `/dashboard/${product.id}`,
  );

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/dashboard", ...productDisallowRules],
      },
    ],
    sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
  };
}
