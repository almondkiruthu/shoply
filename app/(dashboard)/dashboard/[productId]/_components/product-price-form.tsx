"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Pencil } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { CreateProduct } from "@/actions/create-product/schema";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Product } from "@prisma/client";

interface ProductPriceFormProps {
  initialData: Product | null;
  productId: string;
}

const formSchema = z.object({
  price: z.coerce.number({
    required_error: "Price is required",
    invalid_type_error: "Price is Required",
  }),
});

const ProductPriceForm = ({
  initialData,
  productId,
}: ProductPriceFormProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((current) => !current);

  const { toast } = useToast();

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      price: initialData?.price || undefined,
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.patch(`/api/products/${productId}`, values);
      toast({
        title: "Product Price updated successfully",
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
    <div className="flex flex-col items-start space-y-2">
      <div className="flex items-center justify-between font-medium md:gap-x-16">
        <h2 className="font-heading text-lg">Price</h2>
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
              Edit product price
            </>
          )}
        </Button>
      </div>
      {!isEditing && (
        <p
          className={cn(
            "mt-2 text-base",
            !initialData?.price && "italic text-slate-500",
          )}
        >
          {initialData?.price ? formatPrice(initialData.price) : "No Price"}
        </p>
      )}
      {isEditing ? (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="number"
                      step={"0.01"}
                      disabled={isSubmitting}
                      placeholder="e.g. '1000'"
                      className="w-full"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Price your product 😊</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-x-2">
              <Button type="submit" disabled={!isValid || isSubmitting}>
                Save
              </Button>
            </div>
          </form>
        </Form>
      ) : null}
    </div>
  );
};

export default ProductPriceForm;
