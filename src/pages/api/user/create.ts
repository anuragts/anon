import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/db/client";

type Data = {
  email: string;
  name: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { email, name }: Data = await req.body;

    console.log(email, name);
        
  try {
    const newUser = await prisma.user.create({
      data: {
        email,
        name,
      },
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json("Something went wrong");
  }
};

export default handler;