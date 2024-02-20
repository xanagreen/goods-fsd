import styles from "./styles.module.scss";

type TextInputProps = {
  placeholder: string;
  value: string;
  setValue: (value: string) => void
};

const TextInput = ({ placeholder,  value,  setValue }: TextInputProps) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }

  return (
    <input type="text" placeholder={placeholder} value={value} className={styles.input} onChange={handleChange}/>
  );
};

export default TextInput;
