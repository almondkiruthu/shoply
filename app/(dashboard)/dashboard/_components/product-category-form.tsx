"use client";

import { Loader } from "lucide-react";
import { useForm, useWatch } from "react-hook-form";
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
import { Category, Subcategory } from "@prisma/client";

interface ProductCategoryFormProps {
  categories?: Category[];
  subCategories?: Subcategory[];
}

const formSchema = z.object({
  categories: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "You have to select at least one category.",
    }),
  subCategories: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "You have to select at least one sub category.",
    }),
});

const ProductCategoryForm = ({
  categories,
  subCategories,
}: ProductCategoryFormProps) => {
  const womenId = "65bd1f0489d7dfe470c50621";
  const menId = "65bd1f0589d7dfe470c50627";

  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      categories: [menId],
    },
  });

  const watchedCategories = useWatch({
    control: form.control,
    name: "categories",
  });

  const categoryMapping: Record<any, string> = {
    "65bd1f0489d7dfe470c50621": "Women",
    "65bd1f0589d7dfe470c50627": "Men",
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    try {
      console.log(values);
      const selectedCategories = values.categories.map(
        (category) => categoryMapping[category],
      );
      const selectedSubCategories = values.subCategories.map((subCategory) => {
        const matchingSubCategory = subCategories?.find(
          (s) => s.id === subCategory,
        );
        return matchingSubCategory?.name || "";
      });

      toast({
        title: "The category of your product is 👇",
        description: (
          <div className="mt-2 w-[340px] rounded-md bg-primary/10 p-4">
            <p className="font-sans text-sm font-medium text-black">
              Main Categories: {JSON.stringify(selectedCategories, null, 2)}
              Sub Categories: {JSON.stringify(selectedSubCategories, null, 2)}
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
      {categories?.length !== 0 ? (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="categories"
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel className="font-heading text-lg">Sizes</FormLabel>
                  <FormDescription>Select the product category</FormDescription>
                </div>
                {categories?.map((category) => (
                  <FormField
                    key={category.id}
                    control={form.control}
                    name="categories"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={category.id}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(category.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([
                                      ...field.value,
                                      category.id,
                                    ])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== category.id,
                                      ),
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal">
                            {category.name}
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
          {/* Handle subcategories based on the selected main category */}
          {watchedCategories?.includes(menId) && (
            <FormField
              control={form.control}
              name="subCategories"
              render={() => (
                <FormItem>
                  {/* ... (similar structure as the categories loop) */}
                  <div className="mb-4">
                    <FormLabel className="font-heading text-lg">Men</FormLabel>
                    <FormDescription>
                      Select the Men product sub-category
                    </FormDescription>
                  </div>
                  {subCategories
                    ?.filter((subCategory) => subCategory.categoryId === menId)
                    .map((subCategory) => (
                      <FormItem
                        key={subCategory.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={form
                              .watch("subCategories")
                              ?.includes(subCategory.id)}
                            onCheckedChange={(checked) => {
                              form.setValue(
                                "subCategories",
                                checked
                                  ? [
                                      ...form.watch("subCategories"),
                                      subCategory.id,
                                    ]
                                  : form
                                      .watch("subCategories")
                                      ?.filter(
                                        (value) => value !== subCategory.id,
                                      ),
                              );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal">
                          {subCategory.name}
                        </FormLabel>
                      </FormItem>
                    ))}
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          {/* Handle subcategories for Women category */}
          {watchedCategories?.includes(womenId) && (
            <FormField
              control={form.control}
              name="subCategories"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel className="font-heading text-lg">
                      Women
                    </FormLabel>
                    <FormDescription>
                      Select the Women product sub-category
                    </FormDescription>
                  </div>
                  {subCategories
                    ?.filter(
                      (subCategory) => subCategory.categoryId === womenId,
                    )
                    .map((subCategory) => (
                      <FormItem
                        key={subCategory.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={form
                              .watch("subCategories")
                              ?.includes(subCategory.id)}
                            onCheckedChange={(checked) => {
                              form.setValue(
                                "subCategories",
                                checked
                                  ? [
                                      ...form.watch("subCategories"),
                                      subCategory.id,
                                    ]
                                  : form
                                      .watch("subCategories")
                                      ?.filter(
                                        (value) => value !== subCategory.id,
                                      ),
                              );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal">
                          {subCategory.name}
                        </FormLabel>
                      </FormItem>
                    ))}
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

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
