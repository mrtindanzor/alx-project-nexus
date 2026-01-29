import z, { type ZodType } from "zod";

export const zodErrorFilter = <Schema extends ZodType, T>(
  schema: Schema,
  data: T,
) => {
  const parsed = schema.safeParse(data);

  if (!parsed.success) {
    const errors = z.flattenError(parsed.error).fieldErrors;

    const error =
      (Object.values(errors).flat().filter(Boolean)[0] ?? "") ||
      "Something went wrong";

    return [null as T, error as string] as const;
  }

  return [parsed.data as T, null] as const;
};
