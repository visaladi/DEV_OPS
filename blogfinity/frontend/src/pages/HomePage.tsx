import Card from "../components/Card";
import LinkButton from "../components/LinkButton";
import styles from "../styles/HomePage.module.css";

const HomePage = () => {
  return (
    <div>
      <div className={styles.homePageTop}>
        <div className={styles.fill}></div>
        <img
          className={styles.homePageImg}
          src="src\assets\images\homepageimg.png"
          alt="Home Page Image"
        />
      </div>
      <div className={styles.homePageTopContent}>
        <div className={styles.homePageText}>
          <p className={styles.text}>EXPAND</p>
          <p className={styles.text}>YOUR WORLD</p>
          <div className={styles.seperateColorText}>
            <p className={styles.seperateColorTextOne}>TO THE</p>
            <p className={styles.seperateColorTextTwo}>INFINITY</p>
          </div>
        </div>
        <LinkButton cardBtnText="GET STARTED" cardLink="/login"></LinkButton>
      </div>
      <div className={styles.homePageMiddleContent}>
        <div className={styles.homePageCards}>
          <Card
            cardTitle="LIMITLESS OPPORTUNITIES FOR YOUR PASSION"
            cardContent="BLOGFINITY PROVIDES YOU THE STAGE TO REACH YOUR AUDIENCE. BUILD YOUR WORLD AROUND YOUR PASSION AND SHARE IT AMONG MILLIONS OF USERS. READ AND EXPLORE OTHER WORLDS OF INFINITE TOPICS. THE ULTIMATE PLATFORM IS ONLY A ONE CLICK AWAY."
            cardBtnText="SIGN UP"
            cardImgSrc="src\assets\images\homepagepic1.PNG"
            cardLink="http://localhost:5173/signup"
          ></Card>
          <Card
            cardTitle="MORE TOOLS TO HELP YOUR BLOGGING JOURNEY"
            cardContent="BLOGFINITY PROVIDES YOU ALL THE TOOLS TO ASSIST YOU IN YOUR BLOGGING JOURNEY. CREATE YOUR BLOGS WITH OUR COMPREHENSIVE DRAFTING TOOLS AND ACCESS YOUR FAVORITE TOPICS EASILY. SO DON’T WAIT TO KICK START YOUR BLOGGING JOURNEY."
            cardBtnText="LOG IN"
            cardImgSrc="src\assets\images\homepagepic2.PNG"
            cardLink="http://localhost:5173/login"
          ></Card>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
