import { BlogModel } from "../models/blog.model";
import BlogFeedCard from "./BlogFeedCard";

interface BlogProps {
  blog: BlogModel;
  buttonText: string;
  handleClick: (blog: BlogModel) => void;
  handleCardClick: (blog: BlogModel) => void;
}

const Blog = ({
  blog,
  buttonText,
  handleClick,
  handleCardClick,
}: BlogProps) => {
  const { title, author, imageUrl } = blog;

  function handleOnClick() {
    handleClick(blog);
  }

  return (
    <div onClick={() => handleCardClick(blog)}>
      <BlogFeedCard
        cardTitle={title}
        cardAuthor={author}
        cardImgSrc={imageUrl}
        cardBtnText={buttonText}
        handleClick={handleOnClick}
      ></BlogFeedCard>
    </div>
  );
};

export default Blog;
