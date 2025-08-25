import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../../../sanity";

type ResponseData = {
  success: boolean;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  try {
    const { name, contact, resume, refereeCompany, currentCompany, jobId } =
      req.body;

    const doc = {
      _type: "referralRequest",
      name,
      contact,
      resume,
      refereeCompany,
      currentCompany,
      jobId,
    };

    await sanityClient.create(doc);

    return res.status(200).json({ success: true, message: "Referral saved to Sanity!" });
  } catch (error: any) {
    return res
      .status(500)
      .json({ success: false, message: error.message || "Something went wrong" });
  }
}
