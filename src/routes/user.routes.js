import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1 // numeric number for eg 2, 3, 4
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser)

export default router