import { createClient } from "@sanity/client";

function getSanityConfig() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
  const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-06-01";

  if (!projectId || !dataset) {
    throw new Error("Missing Sanity project configuration. Please set NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET environment variables.");
  }

  return { projectId, dataset, apiVersion };
}

const config = getSanityConfig();

export const sanityClient = createClient({
  projectId: config.projectId,
  dataset: config.dataset,
  apiVersion: config.apiVersion,
  useCdn: true,
});

export const sanityPreviewClient = createClient({
  projectId: config.projectId,
  dataset: config.dataset,
  apiVersion: config.apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  perspective: "previewDrafts",
  ignoreBrowserTokenWarning: true,
});
