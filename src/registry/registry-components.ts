import { type Registry } from "./schema";

export const ui: Registry = [
  {
    name: "p-button",
    type: "registry:ui",
    registryDependencies: ["button"],
    files: [
      {
        path: "ui/p-button/p-button.tsx",
        type: "registry:ui",
      },
    ],
  },
];
