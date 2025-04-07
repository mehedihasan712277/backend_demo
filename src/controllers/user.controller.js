import { ApiError } from "../utils/apiError.js";
import asyncHandler from "../utils/asynchandler.js";
import { User } from './../models/user.model.js';

const registerUser = asyncHandler(async (req, res) => {
    const { fullName, email, username, password } = req.body
    //console.log("email: ", email);

    if (
        [fullName, email, username, password].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }

    const existedUser = await User.findOne({
        $or: [{ username }, { email }]
    })

    if (existedUser) {
        throw new ApiError(409, "User with email or username already exists")
    }

})


export { registerUser }