
import styles from "./dashboard.module.css";
import {
  cookies,
} from "next/headers";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken";
import DashboardShell from "@/components/dashboard/dashboardShell/DashboardShell";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const cookieStore =
    await cookies();

  const token =
    cookieStore.get("token")?.value;

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

    if (
      decoded.role !== "admin"
    ) {
      redirect("/");
    }

  } catch {
    redirect("/login");
  }

 return (
  <DashboardShell>
    {children}
  </DashboardShell>
);
}