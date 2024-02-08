"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
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

interface ProductNameFormProps {}

const ProductNameForm = ({}: ProductNameFormProps) => {
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<z.infer<typeof CreateProduct>>({
    resolver: zodResolver(CreateProduct),
    defaultValues: {
      name: "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof CreateProduct>) => {
    try {
      const response = await axios.post("/api/products", values);
      router.push(`/dashboard/${response.data.id}`);
      toast({
        title: "Product name created successfully",
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
      <h2 className="font-heading text-xl">Product Name</h2>
      <p className="text-sm text-slate-600">
        What would you like to name your product? Don&apos;t worry, you can
        change this later.
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    disabled={isSubmitting}
                    placeholder="e.g. 'Sleeveless T-shirt'"
                    className="w-full"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center gap-x-2">
            <Link href="/">
              <Button type="button" variant="ghost">
                Cancel
              </Button>
            </Link>
            <Button type="submit" disabled={!isValid || isSubmitting}>
              Continue
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ProductNameForm;
