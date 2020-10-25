import { NextApiRequest, NextApiResponse } from "next";

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  if (_req.method != "POST") res.status(405).send("Only POST allowed.");
  console.log("received request");
  console.log(_req.body);
  res.statusCode = 200;
  res.json(_req.body);
};

export default handler;
