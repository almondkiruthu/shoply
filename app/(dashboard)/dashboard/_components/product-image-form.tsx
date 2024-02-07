"use client";

import { z } from "zod";

import { FileUpload } from "@/components/file-upload";
import { useToast } from "@/hooks/use-toast";

interface ProductImageFormProps {}

const formSchema = z.object({
  imageUrl: z.string().min(1, {
    message: "Image is required",
  }),
});

const ProductImageForm = () => {
  const { toast } = useToast();
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      console.log(values);

      toast({
        title: "Product Image added 😊",
        description: "awesome!",
      });
    } catch {
      toast({ variant: "destructive", title: "Something went wrong ☹️" });
    }
  };

  return (
    <>
      <div className="flex flex-col items-start">
        <h1 className="font-heading text-lg">Product Image</h1>
        <p className="text-sm text-muted-foreground">
          Upload the image of your product 🚀{" "}
        </p>
      </div>
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
    </>
  );
};

export default ProductImageForm;
