import { NextApiRequest, NextApiResponse } from "next";

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  res
    .status(200)
    .json({
      apis: {
        twitter: { url: "/twitter", body: { tweet: "tweet content here" } },
      },
    });
};

export default handler;
