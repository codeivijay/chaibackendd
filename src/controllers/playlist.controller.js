import mongoose, { isValidObjectId } from "mongoose";
import { Playlist } from '../models/playlists.models'
import { ApiError } from "../utils/apiError";
import { ApiResponse } from "../utils/apiResponse";
import { asyncHandler } from "../utils/asyncHandler";


const createPlaylist = asyncHandler(async (req, res) => {
    const { name, description} = req.body

    // create playlist
})

const getUserPlaylists = asyncHandler(async (req, res) => {
    const { userId } = req.params

    // get user playlists
})

const addVideoToPlaylist = asyncHandler(async (req, res) => {
    const { playlist, videoId } = req.params
})

const removeVideoFromPlaylist = asyncHandler(async (req, res) => {
    const { playlistId, videoId } = req.params

    // remove video from playlist
})

const updatePlaylist = asyncHandler(async (req, res) => {
    const { playlistId} = req.params
    const { name, description } = req.body
    // update playlist
})
const deletePlalist = asyncHandler(async (req, res) => {
    const { playlistId } = req.params
    // delete Playlist
})


export {
    createPlaylist,
    getUserPlaylists,
    addVideoToPlaylist,
    removeVideoFromPlaylist,
    updatePlaylist,
    deletePlalist
}