import {
  cookies,
} from "next/headers";

import { redirect } from "next/navigation";

import jwt from "jsonwebtoken";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const cookieStore =
    await cookies();

  const token =
    cookieStore.get("token")?.value;

  // No token
  if (!token) {
    redirect("/login");
  }

  try {

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as {
      role: string;
    };

    // Not admin
    if (
      decoded.role !== "admin"
    ) {
      redirect("/");
    }

  } catch (error) {

    redirect("/login");
  }

  return <>{children}</>;
}