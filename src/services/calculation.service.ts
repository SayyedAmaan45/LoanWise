import { CalcultaionData } from "@/types/calcultation.type";

export const saveCalculation = async (data: CalcultaionData) => {
    try {
        const response = await fetch("/api/calculation", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        return await response.json()

    } catch (errors) {
        console.log('errors', errors)
        return {
            success: false
        }
    }

}