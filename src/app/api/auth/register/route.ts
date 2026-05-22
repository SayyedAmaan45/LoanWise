import connectDB from "@/libs/db";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();

    const { fullName, email, password } = body;

    // VALIDATION
    if (!fullName || !email || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill all required fields",
        },
        { status: 400 }
      );
    }

    // CHECK USER
    const userExist = await User.findOne({
      email,
    });

    if (userExist) {
      return NextResponse.json(
        {
          success: false,
          message: "User already exists",
        },
        { status: 409 }
      );
    }

    // HASH PASSWORD
    const hashedPassword =
      await bcrypt.hash(password, 10);

    // CREATE USER
    await User.create({
      name:fullName,
      email,
      password: hashedPassword,
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "User registered successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}