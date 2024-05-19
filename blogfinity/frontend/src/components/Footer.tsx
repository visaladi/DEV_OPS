import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footerContent}>
        <div className={styles.largeTextContent}>
          <p className={styles.largeTextPartOne}>BLOG TO THE</p>
          <p className={styles.largeTextPartTwo}>INFINITY</p>
        </div>
        <div className={styles.smallTextContent}>
          <p className={styles.smallText}>ABOUT</p>
          <p className={styles.smallText}>CONTACT US</p>
          <p className={styles.smallText}>PRIVACY & TERMS</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
