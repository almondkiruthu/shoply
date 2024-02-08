"use client";

import { useRouter } from "next/navigation";
import axios from "axios";
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
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Product } from "@prisma/client";

interface ProductArrivalAndPopularFormProps {
  initialData: Product | null;
  productId: string;
}

const formSchema = z.object({
  isNewArrival: z.boolean().optional(),
  isPopular: z.boolean().optional(),
});

const ProductArrivalAndPopularForm = ({
  initialData,
  productId,
}: ProductArrivalAndPopularFormProps) => {
  const { toast } = useToast();

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      isNewArrival: initialData?.isNewArrival!,
      isPopular: initialData?.isPopular!,
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.patch(`/api/products/${productId}`, values);
      if (values.isNewArrival === true && values.isPopular === true) {
        toast({
          title: "You marked this product as a New Arrival and Popular Item",
          description: "🚀",
        });
      }
      if (values.isNewArrival === false && values.isPopular === false) {
        toast({
          title: "You unmarked this product as a New Arrival and Popular Item ",
          description: "You're sure? 🤔 If yes continue",
        });
      }
      if (values.isPopular === true && values.isNewArrival === false) {
        toast({
          title:
            "You marked this product as a Popular Item and umarked it as New Arrival",
          description: "You're sure? 🤔  If yes continue",
        });
      }
      if (values.isPopular === false && values.isNewArrival === true) {
        toast({
          title:
            "You marked this product as a New Arrival and umarked it as Popular Item",
          description: "You're sure? 🤔  If yes continue",
        });
      }
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
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="isNewArrival"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between gap-x-8 rounded-lg border p-3 shadow-sm">
                <div className="space-y-0.5">
                  <FormLabel className="font-bold">
                    New Arrival Product
                  </FormLabel>
                  <FormDescription>
                    Mark this product as new arrival product
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="isPopular"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between gap-x-8 rounded-lg border p-3 shadow-sm">
                <div className="space-y-0.5">
                  <FormLabel className="font-bold">Popular Item</FormLabel>
                  <FormDescription>
                    Mark this product as Popular Item
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="flex items-center gap-x-2">
            <Button type="submit" disabled={!isValid || isSubmitting}>
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default ProductArrivalAndPopularForm;
