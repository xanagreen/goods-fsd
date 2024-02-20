import styles from "./styles.module.scss";

type CheckboxProps = {
  label: string;
  value: string;
};

const Checkbox = ({ label, value }: CheckboxProps) => {
  return (
    <label className={styles.checkbox}>
      <input className={styles.input} name={value} type="checkbox" />
      <span className={styles.label}>{label}</span>
    </label>
  );
};

export default Checkbox;
