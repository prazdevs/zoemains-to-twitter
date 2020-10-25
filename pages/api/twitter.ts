import { NextApiRequest, NextApiResponse } from "next";
import Twitter from "twitter";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method != "POST") {
    return res.status(405).send("Only POST allowed.");
  }

  if (req.query.apiKey !== process.env.API_KEY) {
    return res.status(401).send("You need a valid API key.");
  }

  if (!req.body.tweet) {
    return res.status(400).send("Cannot tweet empty message.");
  }

  const twitterClient = new Twitter({
    access_token_key: process.env.T_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.T_ACCESS_TOKEN_SECRET,
    consumer_key: process.env.T_CONSUMER_KEY,
    consumer_secret: process.env.T_CONSUMER_SECRET,
  });

  try {
    await twitterClient.post("statuses/update", { status: req.body.tweet });
  } catch (error) {
    return res.status(503).send("Could not post to twitter.");
  }

  return res.status(200).json({ tweet: req.body.tweet });
};

export default handler;
