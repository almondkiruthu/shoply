"use client";

import Link from "next/link";
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
import { zodResolver } from "@hookform/resolvers/zod";

interface ProductPriceFormProps {}

const formSchema = z.object({
  price: z.coerce.number({
    required_error: "Price is required",
    invalid_type_error: "Price is Required",
  }),
});

const ProductPriceForm = ({}: ProductPriceFormProps) => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      price: 0,
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      console.log(values);
      toast({
        title: "Product price added successfully",
        description: "🎉",
      });
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
      {/* <h2 className="font-heading text-lg">Product Price</h2> */}
      {/* <p className="text-sm text-slate-600">
      
      </p> */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-heading text-lg">Price</FormLabel>
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
                  Price your product 😊 Don&apos;t worry, you can change this
                  later.
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
    </div>
  );
};

export default ProductPriceForm;
