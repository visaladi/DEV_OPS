import { useState } from "react";
import { BlogModel } from "../models/blog.model";
import styles from "../styles/BlogReadView.module.css";
import { BiSolidChevronLeftCircle } from "react-icons/bi";

interface BlogReadViewProps {
  blogToRead?: BlogModel | null;
  sendToggleState: (state: boolean) => void;
}

const BlogReadView = ({ blogToRead, sendToggleState }: BlogReadViewProps) => {
  const [nextToggleState, setNextToggleState] = useState(false);

  function handleState() {
    setNextToggleState(!nextToggleState);
    sendToggleState(nextToggleState);
  }

  return (
    <div className={styles.readViewContainer}>
      <div className={styles.readView}>
        <div className={styles.readViewContent}>
          <div className={styles.readViewBackButton}>
            <button className={styles.backButton} onClick={handleState}>
              <BiSolidChevronLeftCircle
                className={styles.btnIcon}
              ></BiSolidChevronLeftCircle>
            </button>
            <p className={styles.contentTitle}>{blogToRead?.title}</p>
          </div>
          <p className={styles.contentTextMedium}>By {blogToRead?.author}</p>
          <img
            className={styles.contentImage}
            src={blogToRead?.imageUrl}
            alt="Blog Content Image"
          />
          <div className={styles.textContent}>
            <p className={styles.contentTextSmall}>{blogToRead?.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogReadView;
