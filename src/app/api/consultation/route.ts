import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/libs/db";
import Consultation from "@/models/Consultation";


export async function POST(req:NextRequest){
    try{
        await connectDB()

        const body =await req.json();

        const {fullName,email,mobileNumber,loanType,message,loanAmount}=body;

        if(!fullName || !email || !mobileNumber ||!loanType){
            return NextResponse.json({
                success:false,
                message:"Please fill the required fields"
            },{status:400})
        }

        const consultation=await Consultation.create({
            fullName,email,mobileNumber,loanType,loanAmount,message
        })

        return NextResponse.json({
            success:true,
            message:"Consultation submitted successfully",
            consultation
        },{status:200})
        

    }catch(errors){
        console.log('errors', errors)
        NextResponse.json({
            success:false,
            message:"Internal server error"
        },{status:500})
    }
}