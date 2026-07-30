export const routes = Object.freeze({
  home: "/",
  create: "/create",
  vote: (id: string) => `/vote/${id}` as const,
  result: (id: string) => `/poll/${id}`,
} as const);
