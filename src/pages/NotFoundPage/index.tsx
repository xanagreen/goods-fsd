import Header from "widgets/Header";
import styles from "./styles.module.scss";

const NotFoundPage = () => {
  return (
    <div>
      <div className={styles.top}>
        <div className={styles.container}>
          <Header type="stuff" />
        </div>
      </div>

      <div className={styles.container}>
        <p className={styles.title}>Page not found</p>
      </div>
    </div>
  );
};

export default NotFoundPage;
