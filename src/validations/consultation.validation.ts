import { z } from "zod";

export const consultationSchema = z.object({
    fullName: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    mobileNumber: z.string().min(10, "Phone number must be 10 digits"),
    loanType: z.string().min(1, "Please select loan type"),
    loanAmount: z.string().optional(),
    message: z.string().optional(),
})