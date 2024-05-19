import { InferSchemaType, Schema, model } from "mongoose";

const blogSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    imageUrl: { type: String, required: true },
  },
  { timestamps: true }
);

type Blog = InferSchemaType<typeof blogSchema>;

export default model<Blog>("Blog", blogSchema);
