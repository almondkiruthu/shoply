import { z } from "zod";

export const CreateProduct = z.object({
  name: z
    .string({
      required_error: "Name is Required",
      invalid_type_error: "Name is Required",
    })
    .min(2, {
      message: "Name is too short",
    }),
});
