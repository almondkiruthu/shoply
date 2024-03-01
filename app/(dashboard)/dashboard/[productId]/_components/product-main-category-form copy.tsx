"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Pencil } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Combobox } from "@/components/ui/combobox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Product } from "@prisma/client";

interface ProductMainCategoryFormProps {
  initialData: Product | null;
  productId: string;
  options: { label: string; value: string }[];
}

const subCategorySchema = z.object({
  mainCategory: z.string().min(1),
});

const ProductMainCategoryForm = ({
  initialData,
  productId,
  options,
}: ProductMainCategoryFormProps) => {
  const { toast } = useToast();

  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((current) => !current);

  const router = useRouter();

  const form = useForm<z.infer<typeof subCategorySchema>>({
    resolver: zodResolver(subCategorySchema),
    defaultValues: {
      mainCategory: initialData?.mainCategory || "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof subCategorySchema>) => {
    try {
      await axios.patch(`/api/products/${productId}`, values);
      toast({
        title: "Product category updated successfully",
        description: "😊",
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

  const selectedOption = options.find(
    (option) => option.value === initialData?.mainCategory,
  );

  return (
    <div className="mt-6 bg-white">
      <div className="flex items-center justify-between font-medium md:gap-x-16">
        <h2 className="font-heading text-base font-[700]">
          Product Main Category
        </h2>
        <Button onClick={toggleEdit} variant="ghost">
          {isEditing ? (
            <>Cancel</>
          ) : (
            <>
              <Pencil className="mr-2 h-4 w-4" />
              Edit product Main category
            </>
          )}
        </Button>
      </div>
      {!isEditing && (
        <p
          className={cn(
            "mt-2 text-sm",
            !initialData?.mainCategory && "italic text-slate-500",
          )}
        >
          {selectedOption?.label || "No category"}
        </p>
      )}
      {isEditing && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-4 space-y-4"
          >
            <FormField
              control={form.control}
              name="mainCategory"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Combobox options={options} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-x-2">
              <Button disabled={!isValid || isSubmitting} type="submit">
                Save
              </Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  );
};

export default ProductMainCategoryForm;
