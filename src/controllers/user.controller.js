import asyncHandler from "../utils/asynchandler.js";

const registerUser = asyncHandler(async (req, res) => {
    const { fullName, email, username, password } = req.body
    //console.log("email: ", email);

    if (
        [fullName, email, username, password].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }

})


export { registerUser }