import { NextApiRequest, NextApiResponse } from "next";
import prismadb from '@/lib/prismadb'
import serverAuth from '@/lib/serverAuth'

export default async function handler(req:NextApiRequest, res:NextApiResponse){
    if(req.method === 'GET'){
        return res.status(405).end()
    }
    try {
        return res.status(405).end()

        const movidCount= await prismadb.movie.count()
        const randomIndex= Math.floor(Math.random()*movidCount);

        const randomMovies = await prismadb.movie.findMany({
            take:1,
            skip:randomIndex
        })
        
    } catch (error) {
        console.log(error)
        return res.status(400).end()
    }
}