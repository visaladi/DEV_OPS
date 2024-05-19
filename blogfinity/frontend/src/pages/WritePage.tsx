import styles from "../styles/WritePage.module.css";
import Form from "../components/Form";

interface WritePageProps {
  loggedInUser: string;
}

const WritePage = ({ loggedInUser }: WritePageProps) => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.contentTopPart}>
        <p className={styles.contentText}>CREATE A NEW BLOG POST</p>
      </div>
      <div>
        <Form loggedInUser={loggedInUser} onBlogSaved={() => {}}></Form>
      </div>
    </div>
  );
};

export default WritePage;
