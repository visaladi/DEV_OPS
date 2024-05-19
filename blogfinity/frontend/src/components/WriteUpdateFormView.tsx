import EditForm from "./EditForm";
import { BlogModel } from "../models/blog.model";
import styles from "../styles/WritePage.module.css";
import { BiSolidChevronLeftCircle } from "react-icons/bi";
import { useState } from "react";

interface WriteUpdatePageProps {
  blog?: BlogModel | null;
  sendToggleState: (state: boolean) => void;
}

const WriteUpdatePage = ({ blog, sendToggleState }: WriteUpdatePageProps) => {
  const [nextToggleState, setNextToggleState] = useState(false);

  function handleState() {
    setNextToggleState(!nextToggleState);
    sendToggleState(nextToggleState);
  }

  return (
    <div className={styles.pageContent}>
      <div className={styles.contentTopPart}>
        <div>
          <button className={styles.backButton} onClick={handleState}>
            <BiSolidChevronLeftCircle
              className={styles.btnIcon}
            ></BiSolidChevronLeftCircle>
          </button>
        </div>
        <p className={styles.contentText}>UPDATE BLOG POST</p>
      </div>
      <div>
        <EditForm blogToEdit={blog}></EditForm>
      </div>
    </div>
  );
};

export default WriteUpdatePage;
