import connectDB from "@/libs/db"
import Calculation from "@/models/Calculation";
import Consultation from "@/models/Consultation";
import User from "@/models/User";
import { NextResponse } from "next/server";


export async function GET(){
    try{
        await connectDB();
        const users=await User.countDocuments();
        const calculations=await Calculation.countDocuments();
        const consultations=await Consultation.countDocuments();

        return NextResponse.json({
            success:true,
      stats: {
        users,
        calculations,
        consultations,
        revenue: 18500,
      },
    });

    }catch(error){
        console.log('error', error)
        return NextResponse.json({
            success:false,

        },{status:500})
    }
}