import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { documentInternationalization } from "@sanity/document-internationalization";

import { schemaTypes } from "./sanity/schemaTypes";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

if (!projectId || !dataset) {
  throw new Error("Missing Sanity project configuration.");
}

export default defineConfig({
  name: "wesleytome",
  title: "Wesley Tomé Blog",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [
    structureTool(),
    visionTool(),
    documentInternationalization({
      supportedLanguages: [
        { id: "pt-BR", title: "Português (BR)" },
        { id: "en", title: "English" },
      ],
      schemaTypes: ["post"],
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});
