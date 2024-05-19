import { useForm } from "react-hook-form";
import { BlogInput } from "../utils/blogs.api";
import * as BlogApi from "../utils/blogs.api";
import styles from "../styles/Form.module.css";
import SubmitButton from "./SubmitButton";
import { BlogModel } from "../models/blog.model";

interface EditFormProps {
  blogToEdit?: BlogModel | null;
}

const EditForm = ({ blogToEdit }: EditFormProps) => {
  const { register, handleSubmit } = useForm<BlogInput>({
    defaultValues: {
      title: blogToEdit?.title,
      imageUrl: blogToEdit?.imageUrl,
      content: blogToEdit?.content,
    },
  });

  async function onSubmit(input: BlogInput) {
    try {
      if (blogToEdit) {
        await BlogApi.updateBlog(blogToEdit._id, input);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputFields}>
        <input
          className={styles.userInputSmall}
          placeholder="Blog Title"
          type="text"
          {...register("title", { required: "Require" })}
        />
        <input
          className={styles.userInputSmall}
          placeholder="Blog Image URL"
          type="text"
          {...register("imageUrl", { required: "Require" })}
        />
        <textarea
          className={styles.userInputLarge}
          placeholder="Blog Content"
          maxLength={4000}
          {...register("content", { required: "Require" })}
        ></textarea>
        <SubmitButton buttonText="UPDATE"></SubmitButton>
      </div>
    </form>
  );
};

export default EditForm;
