import express from "express";
import * as BlogController from "../controllers/blog.controller";

const router = express.Router();

router.get("/", BlogController.getBlogs);
router.get("/:blogId", BlogController.getBlog);
router.post("/find/blogs", BlogController.getBlogsByUsername);
router.post("/", BlogController.createBlog);
router.patch("/:blogId", BlogController.updateBlog);
router.delete("/:blogId", BlogController.deleteBlog);

export default router;
