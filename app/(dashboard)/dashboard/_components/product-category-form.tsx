"use client";

import { Loader } from "lucide-react";
import { useForm, useWatch } from "react-hook-form";
import { string, z } from "zod";

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
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Category, Subcategory } from "@prisma/client";

interface ProductCategoryFormProps {
  subCategories?: Subcategory[];
}

const subCategorySchema = z.object({
  id: z.string(),
  name: z.string(),
  categoryId: z.string(),
});

const formSchema = z.object({
  subCategories: z
    .array(string())
    .refine((value) => value.some((item) => item), {
      message: "You have to select at least one category.",
    }),
});

const ProductCategoryForm = ({ subCategories }: ProductCategoryFormProps) => {
  const womenId = "65bd1f0489d7dfe470c50621";
  const menId = "65bd1f0589d7dfe470c50627";

  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subCategories: [],
    },
  });

  const categoryMapping: Record<any, string> = {
    "65bd1f0489d7dfe470c50621": "Women",
    "65bd1f0589d7dfe470c50627": "Men",
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    try {
      console.log(values);
      toast({
        title: "Product category updated successfully",
        description:"😊"
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
      {subCategories?.length !== 0 ? (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="subCategories"
            render={() => (
              <FormItem>
                <div className="flex items-center justify-center gap-x-4">
                  <div className="flex flex-col space-y-2">
                    <div className="mb-4">
                      <FormLabel className="font-heading text-lg">
                        Men Categories
                      </FormLabel>
                      <FormDescription>
                        Select the product category
                      </FormDescription>
                    </div>
                    {subCategories
                      ?.filter(
                        (subCategory) => subCategory.categoryId === menId,
                      )
                      .map((subCategory: Subcategory) => (
                        <FormField
                          key={subCategory.id}
                          control={form.control}
                          name="subCategories"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={subCategory.id}
                                className="flex flex-row items-start space-x-3 space-y-0"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(
                                      subCategory.id,
                                    )}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([
                                            ...field.value,
                                            subCategory.id,
                                          ])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) =>
                                                value !== subCategory.id,
                                            ),
                                          );
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="text-sm font-normal">
                                  {subCategory.name}
                                </FormLabel>
                              </FormItem>
                            );
                          }}
                        />
                      ))}
                  </div>
                  <div className="flex flex-col">
                    <Separator
                      orientation="vertical"
                      className="mr-2 h-36 border bg-black"
                    />
                  </div>
                  <div className="flex-col space-y-2">
                    <div className="mb-4 mt-[1.1rem]">
                      <FormLabel className="font-heading text-lg">
                        Women Categories
                      </FormLabel>
                      <FormDescription>
                        Select the product category
                      </FormDescription>
                    </div>
                    {subCategories
                      ?.filter(
                        (subCategory) => subCategory.categoryId === womenId,
                      )
                      .map((subCategory) => (
                        <FormField
                          key={subCategory.id}
                          control={form.control}
                          name="subCategories"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={subCategory.id}
                                className="flex flex-row items-start space-x-3 space-y-0"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(
                                      subCategory.id,
                                    )}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([
                                            ...field.value,
                                            subCategory.id,
                                          ])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) =>
                                                value !== subCategory.id,
                                            ),
                                          );
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="text-sm font-normal">
                                  {subCategory.name}
                                </FormLabel>
                              </FormItem>
                            );
                          }}
                        />
                      ))}
                  </div>
                </div>

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

export default ProductCategoryForm;
