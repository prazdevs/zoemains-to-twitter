import { NextApiRequest, NextApiResponse } from "next";

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  if (_req.method != "POST") res.status(405).send("Only POST allowed.");
  console.log("received request");
  console.log(_req.body);
  res.status(200).send("ok");
};

export default handler;
