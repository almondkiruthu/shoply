"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";
import { ImageIcon, Pencil } from "lucide-react";
import { z } from "zod";

import { FileUpload } from "@/components/file-upload";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Product } from "@prisma/client";

interface ProductImageFormProps {
  initialData: Product | null;
  productId: string;
}

const formSchema = z.object({
  imageUrl: z.string().min(1, {
    message: "Image is required",
  }),
});

const ProductImageForm = ({
  initialData,
  productId,
}: ProductImageFormProps) => {
  const { toast } = useToast();

  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((current) => !current);

  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.patch(`/api/products/${productId}`, values);
      toast({
        title: "Product Image updated successfully",
        description: "🎉",
      });
      toggleEdit();
      router.refresh();
    } catch {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "☹️",
      });
    }
  };

  return (
    <>
      <div className="flex items-center justify-between font-medium md:gap-x-16">
        <div className="flex flex-col items-start">
          <h1 className="font-heading text-lg">Product Image</h1>
          <p className="text-sm text-muted-foreground">
            Upload the image of your product 🚀{" "}
          </p>
        </div>
        <Button
          onClick={toggleEdit}
          variant="outline"
          className="border-primary"
        >
          {isEditing ? (
            <>Cancel</>
          ) : (
            <>
              <Pencil className="mr-2 h-4 w-4" />
              Edit product image
            </>
          )}
        </Button>
      </div>
      {!isEditing &&
        (!initialData?.imageUrl ? (
          <div className="flex h-60 w-full items-center justify-center rounded-md bg-slate-100">
            <ImageIcon className="h-10 w-10 text-primary" />
          </div>
        ) : (
          <div
            className="relative top-5 
            mx-auto aspect-video w-[400px] rounded-lg shadow-lg"
          >
            <Image
              alt="Upload"
              fill
              className="rounded-md p-2"
              src={initialData.imageUrl}
            />
          </div>
        ))}
      {isEditing ? (
        <div className="w-full">
          <FileUpload
            endpoint="productImage"
            onChange={(url) => {
              if (url) {
                onSubmit({ imageUrl: url });
              }
            }}
          />
          <div className="mt-4 text-xs text-muted-foreground">
            16:9 aspect ratio recommended
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ProductImageForm;
