import { NextResponse, NextRequest } from "next/server";
import connectDB from "@/libs/db";
import Calculation from "@/models/Calculation";

export async function POST(req: NextRequest) {
    try {
        await connectDB()

        const body = await req.json();

        const calculation = await Calculation.create(body);
        return NextResponse.json({
            success: true,
            calculation
        })


    } catch (errors) {
        NextResponse.json({
            success: false,
            message: 'Internal Server Error'
        }, { status: 500 })
    }
}