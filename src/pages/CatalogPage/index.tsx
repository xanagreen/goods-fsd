import Header from "widgets/Header";
import styles from "./styles.module.scss";
import ProductList from "widgets/ProductList";
import SearchProducts from "features/SearchProducts";
import { useAppDispatch } from "app/store/hooks";
import { fetchAllProducts } from "widgets/ProductList/slice";
import { useEffect } from "react";

const CatalogPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getData = setTimeout(() => {
      dispatch(fetchAllProducts());
    }, 700)

    return () => clearTimeout(getData)
  }, [dispatch]);
  
  const showMoreProducts = () => {
    dispatch(fetchAllProducts());
  }

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
          <ProductList showMoreProducts={showMoreProducts} />
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;