// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "DBCPay",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Getting Started",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Introduction", slug: "guides/introduction" },
            { label: "Installation", slug: "guides/installation" },
          ],
        },
        {
          label: "Components",
          // autogenerate: { directory: "reference" },
          items: [
            {
              label: "Avatar",
              slug: "reference/avatar",
            },
            {
              label: "Badge",
              slug: "reference/badge",
            },
            {
              label: "Button",
              slug: "reference/button",
            },
            {
              label: "Checkbox",
              slug: "reference/checkbox",
            },
            {
              label: "Input",
              slug: "reference/input",
            },
            {
              label: "Radio",
              slug: "reference/radio",
            },
            {
              label: "Switch",
              slug: "reference/switch",
            },
            {
              label: "Tooltip",
              slug: "reference/tooltip",
            },
          ],
        },
      ],
      customCss: ["./src/tailwind.css"],
    }),
    tailwind({ applyBaseStyles: false }),
    react(),
  ],
});
