import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/navbar/Navbar";
import { Toaster } from "sonner";
import Footer from "@/components/layout/footer/Footer";

export const metadata: Metadata = {
  title: "LoanWise | Smart Loan Calculator & Consultation",
  description:
    "Calculate EMI, compare loan options, and get expert consultation with LoanWise. Smart tools for home loan, personal loan, car loan and more.",
  keywords: [
    "Loan Calculator",
    "EMI Calculator",
    "Home Loan EMI Calculator",
    "Personal Loan Calculator",
    "Car Loan Calculator",
    "Loan Consultation",
    "LoanWise",
  ],
  authors: [{ name: "LoanWise" }],
  creator: "LoanWise",
  publisher: "LoanWise",
  metadataBase: new URL("https://loanwise.vercel.app"),

  openGraph: {
    title: "LoanWise | Smart Loan Calculator & Consultation",
    description:
      "Calculate EMI, compare loans and get expert consultation with LoanWise.",
    url: "https://loanwise.vercel.app",
    siteName: "LoanWise",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "LoanWise | Smart Loan Calculator & Consultation",
    description:
      "Calculate EMI, compare loans and get expert consultation with LoanWise.",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Toaster richColors position="top-right" />
        <Footer />
      </body>
    </html>
  );
}