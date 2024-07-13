import mongoose, { isValidObjectId } from "mongoose";
import { Tweet } from '../models/tweet.models.js'
import { User } from "../models/user.models.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";


const createTweet = asyncHandler( async (req, res) => {

})

const getUserTweets = asyncHandler( async (req, res) => {
    
})

const updateTweet = asyncHandler( async (req, res) => {
    
})

const deleteTweet = asyncHandler( async (req, res) => {

})


export {
    createTweet,
    getUserTweets,
    updateTweet,
    deleteTweet
}