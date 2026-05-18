import { NextResponse } from "next/server";
import connectDB from "@/libs/db";


export async function GET(){
    try{
        await connectDB()

        return NextResponse.json({
            success:true,
            message:'MongoDB Connected SuccessFully'
        })

    }catch (error){
        console.log('error', error)
        return NextResponse.json({
            success:false,
            error
        })
    }
}