import {
  NextRequest,
  NextResponse,
} from "next/server";

import { verifyToken } from "@/libs/jwt";

export async function GET(
  req: NextRequest
) {
  try {
    const token =
      req.cookies.get("token")
        ?.value;

    // No token
    if (!token) {
      return NextResponse.json(
        {
          success: false,
          message: "Not authenticated",
        },
        { status: 401 }
      );
    }

    // Verify JWT
    const decoded =
      verifyToken(token);

    // Invalid token
    if (!decoded) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid token",
        },
        { status: 401 }
      );
    }

    // Success
    return NextResponse.json(
      {
        success: true,
        user: decoded,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Internal Server Error",
      },
      { status: 500 }
    );
  }
}