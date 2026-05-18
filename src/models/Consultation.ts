import mongoose, { Schema } from "mongoose";

const ConsultationSchema = new Schema(
    {
        fullName: {
            type: String,
            required: true,
        },

        email: {
            type: String,
            required: true,
        },

        mobileNumber: {
            type: String,
            required: true,
        },

        loanType: {
            type: String,
            required: true,
        },

        loanAmount: {
            type: String,
        },

        message: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

export default
    mongoose.models.Consultation ||
    mongoose.model(
        "Consultation",
        ConsultationSchema
    );