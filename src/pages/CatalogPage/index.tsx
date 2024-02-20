import Header from "widgets/Header";
import styles from "./styles.module.scss";
import ProductList from "widgets/ProductList";
import SearchProducts from "features/SearchProducts";

const AllProductsPage = () => {
  return (
    <div>
      <div className={styles.top}>
        <div className={styles.container}>
          <Header type="stuff" />
        </div>
      </div>

      <div className={`${styles.container} ${styles.catalog}`}>
        <h2 className={styles['catalog__title']}>All products</h2>

        <SearchProducts />

        <div className={styles['catalog__content']}>
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default AllProductsPage;