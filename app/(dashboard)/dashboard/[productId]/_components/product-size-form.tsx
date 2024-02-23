"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Pencil } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Product } from "@prisma/client";

interface ProductSizeFormProps {
  initialData: Product | null;
  productId: string;
}
const formSchema = z.object({
  sizes: z.array(
    z.string({
      required_error: "You have to add at least one size.",
      invalid_type_error: "Size is Required",
    }),
  ),
});

const ProductSizeForm = ({ initialData, productId }: ProductSizeFormProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((current) => !current);

  const { toast } = useToast();

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      sizes: initialData?.sizes.map((size) => size) || [],
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      console.log(values);

      await axios.patch(`/api/products/${productId}`, values);
      toast({
        title: "The sizes of your product are 👇",
        description: (
          <div className="mt-2 w-[340px] rounded-md bg-primary/10 p-4">
            <p className="font-sans text-sm font-medium text-black">
              {JSON.stringify(
                values.sizes.map((size) => size),
                null,
                2,
              )}
            </p>
          </div>
        ),
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
      <div className="flex items-center justify-between font-medium md:gap-x-32">
        <h2 className="font-heading text-lg">Product Sizes</h2>
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
              Edit product sizes
            </>
          )}
        </Button>
      </div>
      {!isEditing && (
        <div>
          {initialData?.sizes.length! <= 0 && initialData?.sizes[0] === "" ? (
            <p className="italic text-slate-500">
              No sizes selected for this product!
            </p>
          ) : (
            <ul className="flex items-center gap-x-4">
              {initialData?.sizes.map((size, index) => (
                <li
                  key={index}
                  className={cn(
                    buttonVariants({
                      size: "sm",
                      variant: "outline",
                    }),
                    "rounded-full border-dashed border-primary p-2 text-sm shadow-lg",
                  )}
                >
                  {size}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
      {isEditing && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="sizes"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="e.g. 'S', 'M' 'L' 'XL'"
                      className="w-full"
                      {...field}
                      onChange={(e) => {
                        const sizesArray = e.target.value
                          .split(",")
                          .map((size) => size.trim());
                        field.onChange(sizesArray);
                      }}
                      value={
                        Array.isArray(field.value)
                          ? field.value.join(", ")
                          : field.value
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={!isValid || isSubmitting}>
              Submit
            </Button>
          </form>
        </Form>
      )}
    </>
  );
};

export default ProductSizeForm;
