import { Link } from "react-router-dom";
import { UserModel } from "../models/user.model";
import * as UserApi from "../utils/users.api";
import styles from "../styles/NavbarLoggedInView.module.css";

interface NavbarLoggedInViewProps {
  user: UserModel;
  onLogoutSuccessful: () => void;
}

const NavbarLoggedInView = ({
  user,
  onLogoutSuccessful,
}: NavbarLoggedInViewProps) => {
  async function logout() {
    try {
      await UserApi.logout();
      onLogoutSuccessful();
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }

  return (
    <div className={styles.navbarLoggedUserTab}>
      <p className={styles.navbarLoggedUserText}>
        LOGGED IN AS : {user.username}
      </p>
      <Link className={styles.navbarTab} to={"/login"} onClick={logout}>
        LOG OUT
      </Link>
    </div>
  );
};

export default NavbarLoggedInView;
