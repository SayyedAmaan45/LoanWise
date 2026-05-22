type ApiResponse = {
  success: boolean;
  message: string;
  token?: string;
};

export const loginApi = async (
  formData: {
    email: string;
    password: string;
  }
): Promise<ApiResponse> => {
  try {
    const response = await fetch(
      "/api/auth/login",
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
    console.log("Login Error:", error);

    return {
      success: false,
      message:
        "Something went wrong",
    };
  }
};