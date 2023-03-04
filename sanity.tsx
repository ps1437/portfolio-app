// client.ts
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!!;
const apiVersion= '2023-03-01';

export const config = {
  projectId,
  dataset,
  apiVersion,
  useCdn: false // `false` if you want to ensure fresh data
};

export const sanityClient = createClient(config);


export const urlFor = (source:any) => imageUrlBuilder(sanityClient).image(source); // <-----------
