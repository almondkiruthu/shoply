import { z } from "zod";

import { ActionState } from "@/lib/create-safe-action";
import { Product } from "@prisma/client";

import { CreateProduct } from "./schema";

export type InputType = z.infer<typeof CreateProduct>;
export type ReturnType = ActionState<InputType, Product>;
