import {
  NextRequest,
  NextResponse,
} from "next/server";

import jwt from "jsonwebtoken";

export function middleware(
  req: NextRequest
) {
  const token =
    req.cookies.get("token")?.value;

  // No token → redirect to login
  if (!token) {
    return NextResponse.redirect(
      new URL("/login", req.url)
    );
  }

  try {
    // Verify token
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as {
      role: string;
    };

    // If NOT admin → redirect home
    if (decoded.role !== "admin") {
      return NextResponse.redirect(
        new URL("/", req.url)
      );
    }

    // Admin allowed
    return NextResponse.next();
  } catch (error) {
    // Invalid token
    return NextResponse.redirect(
      new URL("/login", req.url)
    );
  }
}

export const config = {
  matcher: ["/dashboard/:path*"],
};