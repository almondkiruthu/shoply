import { Metadata } from "next";

import { keywordsList } from "@/config/site";

export function constructMetadata({
  title = "Shoply",
  description = "Originality you wear everyday, shop today!",
  image = "/opengraph-image.png",
  icons = "/favicon.ico",
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
} = {}): Metadata {
  return {
    title: {
      default: title,
      template: "%s - Shoply",
    },
    description,
    keywords: [...keywordsList],
    authors: [
      {
        name: "Almond Kiruthu",
        url: "https://github.com/almondkiruthu",
      },
    ],
    creator: "Almond Kiruthu",
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    icons,
    metadataBase: new URL("https://shoply-red.vercel.app"),
  };
}
