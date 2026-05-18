import mongoose, { Schema } from "mongoose";

const CalculationSchema  = new Schema({
    loanType: {
        type: String, required: true
    },
    currencyType: { type: String, required: true },
    loanAmount: {
        type: Number,
        required: true,
    },
    interestRate: {
        type: Number,
        required: true,
    },
    loanTenure: {
        type: Number,
        required: true,
    },
    monthlyEmi: {
        type: Number,
        required: true,
    },
    totalInterest: {
        type: Number,
        required: true,
    },
    totalPayment: {
        type: Number,
        required: true,
    },

}, {
    timestamps: true,
},)

export default mongoose.models.Calculation  || 
mongoose.model("Calculation",CalculationSchema)