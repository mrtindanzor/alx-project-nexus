export type GetUnions<T> = {
  [P in keyof T & string]: NonNullable<T[P]> extends Record<string, unknown>
    ? P | `${P}.${GetUnions<NonNullable<T[P]>>}`
    : P;
}[keyof T & string];

export type PathValue<T, Path> =
  T extends Record<string, unknown>
    ? Path extends `${infer Head}.${infer Tail}`
      ? Head extends keyof T
        ? NonNullable<T[Head]> extends Record<string, unknown>
          ? PathValue<NonNullable<T[Head]>, Tail>
          : never
        : never
      : Path extends keyof T
        ? T[Path]
        : never
    : never;
