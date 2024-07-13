import {Comment} from '../models/comment.models.js'
import { ApiError } from '../utils/apiError.js'
import { ApiResponse } from '../utils/apiResponse.js'
import { asyncHandler } from '../utils/asyncHandler.js'

const getVideoComments = asyncHandler(async (req, res) => {
    const { videoId } = req.params
    const { page = 1, limit =10 } = req.query
})

const addComment = asyncHandler(async (req, res) => {
    // add a comment to a video
})

const updateComment = asyncHandler(async (req, res) => {
    // update a comment
})

const deleteComment = asyncHandler(async (req, res) => {

})

export {
    getVideoComments,
    addComment,
    updateComment,
    deleteComment
}