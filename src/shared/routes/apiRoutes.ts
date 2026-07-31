export const apiRoutes = Object.freeze({
  polls: {
    createOne: { method: "post", path: "/poll" },
    findById: (id: string) => ({ method: "get", path: `/${id}` }) as const,
  },
} as const);
