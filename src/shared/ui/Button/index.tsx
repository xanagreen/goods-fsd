import styles from "./styles.module.scss";

type ButtonProps = {
  type: 'primary' | 'secondary' | 'text' | 'outlined';
  text: string;
  submit?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

export const Button = ({ type, text, submit, disabled, onClick }: ButtonProps) => {
  return (
    <button 
      type={submit? 'submit' : 'button'} 
      disabled={disabled} 
      className={`${styles.button} ${styles[type]}`} 
      onClick={onClick}
    >
      {text}
    </button>
  );
};
