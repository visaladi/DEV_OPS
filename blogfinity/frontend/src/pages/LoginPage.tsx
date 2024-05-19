import LinkButton from "../components/LinkButton";
import SubmitButton from "../components/SubmitButton";
import styles from "../styles/LoginPage.module.css";
import { BiSolidUser, BiSolidLock } from "react-icons/bi";
import * as UserApi from "../utils/users.api";
import { LoginCredentials } from "../utils/users.api";
import { useForm } from "react-hook-form";
import { UserModel } from "../models/user.model";

interface LoginPageProps {
  onLoginSuccessful: (user: UserModel) => void;
}

const LoginPage = ({ onLoginSuccessful }: LoginPageProps) => {
  const { register, handleSubmit, reset } = useForm<LoginCredentials>();

  async function onSubmit(input: LoginCredentials) {
    try {
      const user = await UserApi.login(input);
      onLoginSuccessful(user);
      reset();
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.container}>
        <div className={styles.formBox}>
          <div className={styles.title}>
            <p>BLOGFINITY ACCOUNT</p>
            <p className={styles.titleText}>SIGNIN</p>
          </div>
          <div className={styles.form}>
            <div className={styles.inputField}>
              <p className={styles.inputFieldText}>USERNAME</p>
              <div className={styles.inputfieldIcon}>
                <BiSolidUser className={styles.icon}></BiSolidUser>
              </div>
              <input
                className={styles.userInput}
                {...register("username", { required: "Required" })}
              ></input>
            </div>
            <div className={styles.inputField}>
              <p className={styles.inputFieldText}>PASSWORD</p>
              <div className={styles.inputfieldIcon}>
                <BiSolidLock className={styles.icon}></BiSolidLock>
              </div>
              <input
                className={styles.userInput}
                type="password"
                {...register("password", { required: "Required" })}
              ></input>
            </div>
          </div>
          <div className={styles.formButtonContent}>
            <SubmitButton buttonText="LOG IN"></SubmitButton>
            <p className={styles.formText}>DON'T HAVE AN ACCOUNT?</p>
            <LinkButton cardBtnText="SIGN UP" cardLink="/signup"></LinkButton>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginPage;
