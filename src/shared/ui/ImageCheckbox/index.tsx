import styles from "./styles.module.scss";

type ImageCheckboxProps = {
  label: string;
  value: string;
  img: string
};

const ImageCheckbox = ({ label, value, img }: ImageCheckboxProps) => {
  return (
    <label className={styles.checkbox}>
      <span className={styles.container}>
        <img src={img} alt={label}/>
      </span>

      <input className={styles.input} name={value} type="checkbox" />
      <span className={styles.label}>{label}</span>
    </label>
  );
};

export default ImageCheckbox;
