import { RequestHandler } from "express";
import BlogModel from "../models/blog.model";
import createHttpError from "http-errors";
import mongoose from "mongoose";

export const getBlogs: RequestHandler = async (req, res, next) => {
  try {
    //throw Error("Test Error");
    const blogs = await BlogModel.find().exec();
    res.status(200).json(blogs);
  } catch (error) {
    next(error);
  }
};

interface getBlogsByUsernameBody {
  username?: string;
}

export const getBlogsByUsername: RequestHandler<
  unknown,
  unknown,
  getBlogsByUsernameBody,
  unknown
> = async (req, res, next) => {
  const username = req.body.username;

  try {
    if (!username) {
      throw createHttpError(400, "Parameters missing");
    }

    //throw Error("Test Error");
    const blogs = await BlogModel.find({ author: username }).exec();
    res.status(200).json(blogs);
  } catch (error) {
    next(error);
  }
};

export const getBlog: RequestHandler = async (req, res, next) => {
  const blogId = req.params.blogId;

  try {
    //checking fot the validity of the blogId
    if (!mongoose.isValidObjectId(blogId)) {
      throw createHttpError(400, "Invalid blog Id");
    }

    const blog = await BlogModel.findById(blogId).exec();

    //handling errors of the object not found in the database
    if (!blog) {
      throw createHttpError(404, "Blog not found");
    }

    res.status(200).json(blog);
  } catch (error) {
    next(error);
  }
};

interface CreateBlogBody {
  title?: string; // marked as optional since the value can be undefine before handling the errors
  content?: string; // if this is optional use content? instead of content
  author?: string;
  imageUrl?: string;
}

export const createBlog: RequestHandler<
  unknown,
  unknown,
  CreateBlogBody,
  unknown
> = async (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  const author = req.body.author;
  const imageUrl = req.body.imageUrl;

  try {
    if (!title) {
      throw createHttpError(400, "Blog must have a title");
    }

    if (!content) {
      throw createHttpError(400, "Blog must have a content");
    }

    if (!author) {
      throw createHttpError(400, "Blog must have an author");
    }

    if (!imageUrl) {
      throw createHttpError(400, "Blog must have an image URL");
    }

    const newBlog = await BlogModel.create({
      title: title,
      content: content,
      author: author,
      imageUrl: imageUrl,
    });

    res.status(201).json(newBlog);
  } catch (error) {
    next(error);
  }
};

interface UpdateBlogParams {
  blogId: string;
}

interface UpdateBlogBody {
  title?: string;
  content?: string;
  author?: string;
  imageUrl?: string;
}

export const updateBlog: RequestHandler<
  UpdateBlogParams,
  unknown,
  UpdateBlogBody,
  unknown
> = async (req, res, next) => {
  const blogId = req.params.blogId;
  const newTitle = req.body.title;
  const newContent = req.body.content;
  const newImageUrl = req.body.imageUrl;

  try {
    //checking fot the validity of the blogId
    if (!mongoose.isValidObjectId(blogId)) {
      throw createHttpError(400, "Invalid blog Id");
    }

    if (!newTitle) {
      throw createHttpError(400, "Blog must have a title");
    }

    if (!newContent) {
      throw createHttpError(400, "Blog must have a content");
    }

    if (!newImageUrl) {
      throw createHttpError(400, "Blog must have an image URL");
    }

    const blog = await BlogModel.findById(blogId).exec();

    //handling errors of the object not found in the database
    if (!blog) {
      throw createHttpError(404, "Blog not found");
    }

    blog.title = newTitle;
    blog.content = newContent;
    blog.imageUrl = newImageUrl;

    const updatedBlog = await blog.save();

    res.status(200).json(updatedBlog);
  } catch (error) {
    next(error);
  }
};

export const deleteBlog: RequestHandler = async (req, res, next) => {
  const blogId = req.params.blogId;

  try {
    //checking fot the validity of the blogId
    if (!mongoose.isValidObjectId(blogId)) {
      throw createHttpError(400, "Invalid blog Id");
    }

    const blog = await BlogModel.findById(blogId).exec();

    //handling errors of the object not found in the database
    if (!blog) {
      throw createHttpError(404, "Blog not found");
    }

    await BlogModel.findByIdAndDelete(blogId);

    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
