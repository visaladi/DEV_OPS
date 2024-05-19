import styles from "../styles/Button.module.css";

interface ButtonProps {
  buttonText: string;
  handleClick: () => void;
}

const Button = ({ buttonText, handleClick }: ButtonProps) => {
  return (
    <button className={styles.mainButton} onClick={handleClick}>
      {buttonText}
    </button>
  );
};

export default Button;
