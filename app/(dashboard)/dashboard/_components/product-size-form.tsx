"use client";

import { Loader } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
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
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Size } from "@prisma/client";

interface ProductSizeFormProps {
  sizes: Size[];
}
const formSchema = z.object({
  sizes: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one size.",
  }),
});

const ProductSizeForm = ({ sizes }: ProductSizeFormProps) => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      sizes: [
        "65bcc2c1a81db48713497bfe",
        "65bcc2c1a81db48713497bff",
        "65bcc2c1a81db48713497c00",
      ],
    },
  });

  const sizeMapping: Record<any, string> = {
    "65bcc2c1a81db48713497bfe": "Small",
    "65bcc2c1a81db48713497bff": "Medium",
    "65bcc2c1a81db48713497c00": "Large",
    "65bcc2c1a81db48713497c01": "Extra Large",
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    try {
      console.log(values);
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
      {sizes.length !== 0 ? (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="sizes"
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel className="font-heading text-lg">Sizes</FormLabel>
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
                                return checked
                                  ? field.onChange([...field.value, size.id])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== size.id,
                                      ),
                                    );
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
      ) : (
        <>
          <div>
            <h2 className="font-heading text-xl">Sizes</h2>
            <Skeleton className="mt-2 w-[340px] rounded-md bg-primary/50 p-4">
              <Loader className="mx-auto  my-auto h-10 w-10  animate-spin" />
            </Skeleton>
          </div>
        </>
      )}
    </Form>
  );
};

export default ProductSizeForm;
