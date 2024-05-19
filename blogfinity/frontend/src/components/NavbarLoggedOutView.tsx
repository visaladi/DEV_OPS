import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

const NavbarLoggedOutView = () => {
  return (
    <div>
      <Link className={styles.navbarTab} to={"/login"}>
        LOG IN
      </Link>
    </div>
  );
};

export default NavbarLoggedOutView;
