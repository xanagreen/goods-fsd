import Header from "widgets/Header";
import styles from "./styles.module.scss";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchProduct } from "./slice";
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import ProductDetails from "widgets/ProductDetails";

const ProductPage = () => {
  const { productId } = useParams();
  const { product } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(fetchProduct(productId));
    }
  }, [dispatch, productId]);

  return (
    <div>
      <div className={styles.top}>
        <div className={styles.container}>
          <Header type="stuff" />
        </div>
      </div>

      <div className={styles.container}>
        <h1 className={styles.title}>
          Product {productId}
        </h1>

        {product ? <ProductDetails product={product}/> : <p>Loading...</p>}
      </div>
    </div>
  );
};

export default ProductPage;
