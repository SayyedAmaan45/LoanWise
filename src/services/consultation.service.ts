


export const consultationApi=async(formData:any)=>{
    try{
        const response=await fetch("/api/consultation",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },body:JSON.stringify(formData)
        });
        return await response.json()

    }catch (error) {
    console.log(error);

    return {
      success: false,
      message: "Something went wrong",
    };
  }
}