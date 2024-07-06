import { asyncHandler } from "../utils/asyncHandler.js"


const registerUser = asyncHandler( async(req, res) => {
    // get user details from frontend
    // validation - not empty
    // check if user already exists: username, email
    // check for images, check for avtar
    // upload them to cloudinary, avtar
    // create user object - creation entry in db
    // remove password and refresh token field from response
    // check for user creation 
    // if user created return response if not return error

    const {fullname, email, username, password} = req.body
    console.log("email", email)
    console.log("password", password)
})

export {registerUser}

// take usernamename, email, password, profile photo(optional), first save in the database, 2. give message saved to the user, 

