import { z } from "zod";

export const calculationSchema = z.object({
    loanType: z.string(),
    currencyType: z.string(),
    loanAmount: z.number(),
    interestRate: z.number(),
    loanTenure: z.number(),
    monthlyEmi: z.number(),
    totalInterest: z.number(),
    totalPayment: z.number(),
});