"use client";

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

interface ProductArrivialAndPopularFormProps {}

const formSchema = z.object({
  isNewArrivial: z.boolean().optional(),
  isPopular: z.boolean().default(false).optional(),
});

const ProductArrivialAndPopularForm = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      isNewArrivial: true,
      isPopular: false,
    },
  });
  const { isSubmitting, isValid } = form.formState;
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      console.log(values);
      if (values.isNewArrivial === true && values.isPopular === true) {
        toast({
          title: "You marked this product as a New Arrivial and Popular Item",
          description: "🚀",
        });
      }
      if (values.isNewArrivial === false && values.isPopular === false) {
        toast({
          title: "You unmarked this product as a New Arrival and Popular Item ",
          description: "You're sure? 🤔 If yes continue",
        });
      }
      if (values.isPopular === true && values.isNewArrivial === false) {
        toast({
          title:
            "You marked this product as a Popular Item and umarked it as New Arrival",
          description: "You're sure? 🤔  If yes continue",
        });
      }
      if (values.isPopular === false && values.isNewArrivial === true) {
        toast({
          title:
            "You marked this product as a New Arrival and umarked it as Popular Item",
          description: "You're sure? 🤔  If yes continue",
        });
      }
    } catch {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "☹️",
      });
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="isNewArrivial"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between gap-x-8 rounded-lg border p-3 shadow-sm">
              <div className="space-y-0.5">
                <FormLabel className="font-medium">
                  New Arrivial Product
                </FormLabel>
                <FormDescription>
                  Mark this product as new arrivial product
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
                <FormLabel className="font-medium">Popular Item</FormLabel>
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
  );
};

export default ProductArrivialAndPopularForm;
