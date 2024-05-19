import { useEffect, useState } from "react";
import { BlogModel } from "../models/blog.model";
import Blog from "../components/Blog";
import styles from "../styles/ReadPage.module.css";
import * as BlogsApi from "../utils/blogs.api";
import BlogReadView from "../components/BlogReadView";

const ReadPage = () => {
  const [blogs, setBlogs] = useState<BlogModel[]>([]);
  const [blogToRead, setBlogToRead] = useState<BlogModel | null>(null);
  const [toggleReadView, setToggleReadView] = useState(false);

  function readBlog(blog: BlogModel) {
    console.log(blog);
  }

  function getToggleState(state: boolean) {
    setToggleReadView(state);
  }

  function viewReadView(blog: BlogModel) {
    setToggleReadView(true);
    setBlogToRead(blog);
  }

  useEffect(() => {
    async function loadBlogs() {
      try {
        const blogs = await BlogsApi.fetchBlogs();
        setBlogs(blogs);
      } catch (error) {
        console.error(error);
        alert(error);
      }
    }

    loadBlogs();
  }, []);
  return (
    <div>
      {!toggleReadView && (
        <div className={styles.blogFeed}>
          <div className={styles.contentTopPart}>
            <p className={styles.contentText}>BLOGFINITY RECOMMENDATIONS</p>
          </div>
          <div className={styles.blogCardView}>
            {blogs.map((blog) => (
              <Blog
                buttonText=""
                blog={blog}
                handleClick={readBlog}
                handleCardClick={viewReadView}
                key={blog._id}
              ></Blog>
            ))}
          </div>
        </div>
      )}
      {toggleReadView && (
        <BlogReadView
          sendToggleState={getToggleState}
          blogToRead={blogToRead}
        ></BlogReadView>
      )}
    </div>
  );
};

export default ReadPage;
