import { Link } from "react-router-dom";
import { BiSolidCog } from "react-icons/bi";
import styles from "../styles/Navbar.module.css";
import { UserModel } from "../models/user.model";
import NavbarLoggedInView from "./NavbarLoggedInView";
import NavbarLoggedOutView from "./NavbarLoggedOutView";

interface NavbarProps {
  loggedInUser: UserModel | null;
  onLogoutSuccessful: () => void;
}

const Navbar = ({ loggedInUser, onLogoutSuccessful }: NavbarProps) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.title}>
        <img
          className={styles.navbarLogo}
          src="src\assets\images\logoblack.png"
          alt="Logo"
        />

        <Link className={styles.titilePartOne} to={"/"}>
          BLOG
        </Link>
        <Link className={styles.titilePartTwo} to={"/"}>
          FINITY
        </Link>
      </div>
      <div className={styles.navbarTabs}>
        {loggedInUser ? (
          <NavbarLoggedInView
            user={loggedInUser}
            onLogoutSuccessful={onLogoutSuccessful}
          ></NavbarLoggedInView>
        ) : (
          <NavbarLoggedOutView></NavbarLoggedOutView>
        )}
        <Link className={styles.navbarTab} to={"/write"}>
          WRITE
        </Link>
        <Link className={styles.navbarTab} to={"/read"}>
          READ
        </Link>
        <Link to={"/manage"}>
          <BiSolidCog className={styles.settingsIcon}></BiSolidCog>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
