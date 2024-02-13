import styles from "./styles.module.scss";

type ButtonProps = {
  type: 'primary' | 'secondary' | 'text' | 'outlined';
  text: string
};

export const Button = ({ type, text }: ButtonProps) => {
  return (
    <button type='button' className={`${styles.button} ${styles[type]}`}>
      {text}
    </button>
  );
};
