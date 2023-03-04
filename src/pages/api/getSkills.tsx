// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { Skill } from "types.ds";
import { sanityClient } from "../../../sanity";

export const query = groq`
*[_type == "skills"] 
`;
type Data = {
    skills: Skill[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const skills: Skill[] = await sanityClient.fetch(query);
  res.status(200).json({ skills });
}
