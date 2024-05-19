import styles from "../styles/Form.module.css";
import { BlogInput } from "../utils/blogs.api";
import { useForm } from "react-hook-form";
import * as BlogApi from "../utils/blogs.api";
import { BlogModel } from "../models/blog.model";
import SubmitButton from "./SubmitButton";

interface FormProps {
  onBlogSaved: (blog: BlogModel) => void;
  loggedInUser: string;
}

const Form = ({ onBlogSaved, loggedInUser }: FormProps) => {
  const { register, handleSubmit, reset } = useForm<BlogInput>();

  async function onSubmit(input: BlogInput) {
    try {
      const blogResponse = await BlogApi.createBlog(input);
      onBlogSaved(blogResponse);
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      reset();
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
        {loggedInUser && (
          <input
            className={styles.userInputSmall}
            placeholder="Blog Author"
            type="text"
            defaultValue={loggedInUser}
            {...register("author", { required: "Require" })}
          />
        )}
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
        <SubmitButton buttonText="PUBLISH"></SubmitButton>
      </div>
    </form>
  );
};

export default Form;
