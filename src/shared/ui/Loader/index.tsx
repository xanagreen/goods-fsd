import styles from "./styles.module.scss";

type LoaderProps = {
  text?: string;
};

const Loader = ({ text }: LoaderProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.loader}></div>
      <p>{text || 'Loading...'}</p>
    </div>
  );
};

export default Loader;
