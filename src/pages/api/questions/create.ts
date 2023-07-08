import type { NextApiRequest,NextApiResponse } from "next";
import { prisma } from "@/db/client";

type Data = {
    question: string;
    userId: string;
}

export default async (req:NextApiRequest,res:NextApiResponse) => {

    const {question,userId}:Data = req.body;

    try {
        const newQuestion = await prisma.questions.create({
            data: {
                question,
                userId
            }
        });
        res.status(200).json("Question created successfull");
    } catch (error) {
        res.status(500).json("Something went wrong");
    }

}
