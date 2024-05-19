import styles from "../styles/BlogFeedCard.module.css";

interface BlogFeedCardProps {
  cardTitle: string;
  cardAuthor: string;
  cardImgSrc: string;
  cardBtnText: string;
  handleClick: () => void;
}

const BlogFeedCard = ({
  cardTitle,
  cardAuthor,
  cardImgSrc,
  cardBtnText,
  handleClick,
}: BlogFeedCardProps) => {
  return (
    <div className={styles.cardContainer}>
      <div>
        {cardImgSrc && (
          <img className={styles.cardImage} src={cardImgSrc} alt="Card Image" />
        )}
        <h2 className={styles.cardTitle}>{cardTitle}</h2>
        <p className={styles.cardContent}>By {cardAuthor}</p>
      </div>
      {cardBtnText && (
        <button
          onClick={(e) => {
            handleClick();
            e.stopPropagation();
          }}
          className={styles.mainButton}
        >
          {cardBtnText}
        </button>
      )}
    </div>
  );
};

export default BlogFeedCard;
