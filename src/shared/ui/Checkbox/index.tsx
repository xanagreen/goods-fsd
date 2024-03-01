import styles from "./styles.module.scss";

type CheckboxProps = {
  label: string;
  value: string;
  name: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox = ({ label, value, name, handleChange }: CheckboxProps) => {
  return (
    <label className={styles.checkbox}>
      <input className={styles.input} value={value} name={name} type="radio" onChange={handleChange} />
      <span className={styles.label}>{label}</span>
    </label>
  );
};

export default Checkbox;
