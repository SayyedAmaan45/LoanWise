type ApiResponse = {
  success: boolean;
  message: string;
  token?: string;
};



export const registerApi = async (
  formData: {
    fullName: string;
    email: string;
    password: string;
  }
): Promise<ApiResponse> => {
  try {
    const response = await fetch(
      "/api/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    return await response.json();
  } catch (error) {
    console.log(
      "Register Error:",
      error
    );

    return {
      success: false,
      message:
        "Something went wrong",
    };
  }
};