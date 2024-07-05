import { asyncHandler } from "../utils/asyncHandler.js"


const registerUser = asyncHandler( async(req, res) => {
    res.status(200).json({
        message: "All is well , I am not Aamir Khan"
    })
})

export {registerUser}

