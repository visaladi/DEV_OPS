import styles from "../styles/SubmitButton.module.css";

interface SubmitButtonProps {
  buttonText: string;
}

const SubmitButton = ({ buttonText }: SubmitButtonProps) => {
  return (
    <button className={styles.submitButton} type="submit">
      {buttonText}
    </button>
  );
};

export default SubmitButton;
