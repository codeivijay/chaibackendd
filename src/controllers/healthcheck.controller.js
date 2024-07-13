import { ApiError } from "../utils/apiError";
import { ApiResponse } from "../utils/apiResponse";
import { asyncHandler } from "../utils/asyncHandler";

const healthcheck = asyncHandler(async (req, res) => {
    // build a healthcheck response that simply returns the OK status as json with a message
})


export {
    healthcheck
}