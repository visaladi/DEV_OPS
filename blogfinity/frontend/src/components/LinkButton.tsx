import styles from "../styles/LinkButton.module.css";

interface LinkButtonProps {
  cardBtnText: string;
  cardLink: string;
}

const LinkButton = ({ cardBtnText, cardLink }: LinkButtonProps) => {
  return (
    <a className={styles.linkButton} href={cardLink}>
      {cardBtnText}
    </a>
  );
};

export default LinkButton;
