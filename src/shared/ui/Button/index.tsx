import styles from "./styles.module.scss";

type ButtonProps = {
  type: 'primary' | 'secondary' | 'text' | 'outlined';
  text: string;
  onClick?: () => void;
};

export const Button = ({ type, text, onClick }: ButtonProps) => {
  return (
    <button type='button' className={`${styles.button} ${styles[type]}`} onClick={onClick}>
      {text}
    </button>
  );
};
