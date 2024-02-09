"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Pencil } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button, buttonVariants } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { sizeMapping } from "@/config/size-form";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Product, Size } from "@prisma/client";

interface ProductSizeFormProps {
  initialData:
    | (Product & {
        sizes: Size[];
      })
    | null;
  productId: string;
  sizes: Size[];
}
const formSchema = z.object({
  sizes: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one size.",
  }),
});

const ProductSizeForm = ({
  initialData,
  productId,
  sizes,
}: ProductSizeFormProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((current) => !current);

  const { toast } = useToast();

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      sizes: initialData?.sizes.map((size) => size.id) || [],
    },
  });

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
                values.sizes.map((size) => sizeMapping[size]),
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
          {initialData?.sizes.length! > 0 ? (
            <ul className="flex items-center gap-x-4">
              {initialData?.sizes.map((size) => (
                <li
                  key={size.id}
                  className={cn(
                    buttonVariants({
                      size: "sm",
                      variant: "outline",
                    }),
                    "rounded-full border-dashed border-primary p-2 text-sm shadow-lg",
                  )}
                >
                  {size.name}
                </li>
              ))}
            </ul>
          ) : (
            <p className="italic text-slate-500">
              No sizes selected for this product!
            </p>
          )}
        </div>
      )}
      {isEditing && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="sizes"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormDescription>
                      Select the sizes available for your product
                    </FormDescription>
                  </div>
                  {sizes.map((size) => (
                    <FormField
                      key={size.id}
                      control={form.control}
                      name="sizes"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={size.id}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(size.id)}
                                onCheckedChange={(checked) => {
                                  const updatedSizes = checked
                                    ? [...field.value, size.id]
                                    : field.value.filter(
                                        (value) => value !== size.id,
                                      );
                                  field.onChange(updatedSizes);
                                }}
                              />
                            </FormControl>
                            <FormLabel className="text-sm font-normal">
                              {size.name}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      )}
    </>
  );
};

export default ProductSizeForm;
