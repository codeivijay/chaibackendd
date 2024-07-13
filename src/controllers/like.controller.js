import mongoose , { isValidObjectId } from "mongoose"
import { Like } from '../models/like.models.js'
import { ApiError } from "../utils/apiError.js"
import { ApiResponse } from "../utils/apiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"


const toggleVideoLike = asyncHandler(async (req, res) => {
    const { videoId } = req.params
    // toggle like on video
})

const toggleCommentLike = asyncHandler(async (req, res) => {
    const { commentId } = req.params
    // toggle like on comment
})

const toggleTweetLike = asyncHandler(async (req, res) => {
    const { tweetId } = req.params
    // toggle like on tweet
})

const getLikedVideos = asyncHandler(async (req, res) => {
    // get all liked videos
})


export {
    toggleVideoLike,
    toggleCommentLike,
    toggleTweetLike,
    getLikedVideos
}