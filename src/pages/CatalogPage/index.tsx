import Header from "widgets/Header";
import styles from "./styles.module.scss";
import ProductList from "widgets/ProductList";
import SearchProducts from "features/SearchProducts";
import { useAppDispatch, useAppSelector } from "app/store/hooks";
import { fetchAllProducts, fetchProductsBySearch } from "widgets/ProductList/slice";

const CatalogPage = () => {
  const dispatch = useAppDispatch();
  const { search } = useAppSelector((state) => state.search);
  
  const showMoreProducts = () => {
    console.log(search)
    if(search) {
      dispatch(fetchProductsBySearch(search));
    } else {
      dispatch(fetchAllProducts());
    }
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