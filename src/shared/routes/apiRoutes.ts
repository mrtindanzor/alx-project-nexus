export const apiRoutes = Object.freeze({
  polls: {
    createOne: { method: "post", path: "/poll" },
    findById: (id: string) =>
      ({ method: "get", path: `/polls/${id}` }) as const,
  },
} as const);
