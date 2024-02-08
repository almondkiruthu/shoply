"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Pencil } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Product } from "@prisma/client";

interface ProductQuantityFormProps {
  initialData: Product | null;
  productId: string;
}

const formSchema = z.object({
  quantity: z.coerce.number({
    required_error: "Quantity is required",
    invalid_type_error: "Quantity is Required",
  }),
});

const ProductQuantityForm = ({
  initialData,
  productId,
}: ProductQuantityFormProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((current) => !current);

  const { toast } = useToast();

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      quantity: initialData?.quantity || undefined,
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.patch(`/api/products/${productId}`, values);
      toast({
        title: "Product quantity updated successfully",
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
        <h2 className="font-heading text-lg">Quantity</h2>
        <Button onClick={toggleEdit} variant="outline">
          {isEditing ? (
            <>Cancel</>
          ) : (
            <>
              <Pencil className="mr-2 h-4 w-4" />
              Edit product quantity
            </>
          )}
        </Button>
      </div>
      {!isEditing && (
        <p
          className={cn(
            "mt-2 text-base",
            !initialData?.quantity && "italic text-slate-500",
          )}
        >
          {initialData?.quantity !== null && initialData?.quantity! >= 1 ? (
            <>
              {initialData?.quantity}{" "}
              {initialData?.quantity === 1 ? "product" : "products"} in stock
            </>
          ) : (
            <>Out of stock</>
          )}
        </p>
      )}
      {isEditing ? (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="quantity"
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
                  <FormDescription>
                    How many products are in stock? 👀
                  </FormDescription>
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

export default ProductQuantityForm;
