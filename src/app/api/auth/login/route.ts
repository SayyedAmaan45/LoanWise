import connectDB from "@/libs/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import { generateToken } from "@/libs/jwt";

export async function POST(
  req: NextRequest
) {
  try {
    await connectDB();

    const body = await req.json();

    const { email, password } = body;

    // Validation
    if (!email || !password) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Please fill all required fields",
        },
        { status: 400 }
      );
    }

    // Check User
    const userExist = await User.findOne({
      email,
    });

    if (!userExist) {
      return NextResponse.json(
        {
          success: false,
          message:
            "User not found. Please register first.",
        },
        { status: 404 }
      );
    }

    // Compare Password
    const compare = await bcrypt.compare(
      password,
      userExist.password
    );

    if (!compare) {
      return NextResponse.json(
        {
          success: false,
          message: "Incorrect password",
        },
        { status: 400 }
      );
    }

    const token = generateToken({
  id: userExist._id,
  email: userExist.email,
  role: userExist.role,
});

const response = NextResponse.json(
  {
    success: true,
    message: "Login successful",

    user: {
      id: userExist._id,
      name: userExist.name,
      email: userExist.email,
      role: userExist.role,
    },

    token,
  },
  { status: 200 }
);

response.cookies.set("token", token, {
  httpOnly: true,
  secure:
    process.env.NODE_ENV ===
    "production",
  sameSite: "strict",
  maxAge:
    60 * 60 * 24 * 7,
  path: "/",
});

return response;
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