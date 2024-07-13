import { Video } from '../models/video.models.js'
import {apiError} from '../utils/apiError.js'
import {apiResponse} from '../utils/apiResponse.js'
import {asyncHandler} from '../utils/asyncHandler.js'
import {uploadOnCloudinary} from '../utils/cloudinary.js'


const getAllVideos = asyncHandler(async(req, res) => {
    const { page = 1, limit = 10, query, sortBy, sortType, userId} = req.query
})

const publishAVideo = asyncHandler(async(req, res) => {
    const{ title, description } = req.body
})

const  VideoById = asyncHandler(async(req, res) => {
    const { videoId } = req.params
})

const updateVideo = asyncHandler(async(req, res) => {
    const { videoId } = req.params
})

const deleteVideo = asyncHandler(async (req, res) => {
    const { videoId } = req.params
})

const tooglePublishStatus = asyncHandler(async (req, res) => {
    const { videoId } = req.params
})

export {
    getAllVideos,
    publishAVideo,
    VideoById,
    updateVideo,
    deleteVideo,
    tooglePublishStatus
}