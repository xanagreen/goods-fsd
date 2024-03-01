import Header from "widgets/Header";
import styles from "./styles.module.scss";
import { useParams } from "react-router-dom";
import { useGetProductQuery } from "./api";
import ProductDetails from "widgets/ProductDetails";

const ProductPage = () => {
  const { productId } = useParams();
  const  {
    data: product,
    isError: isProductError,
    isLoading: isProductLoading,
  } = useGetProductQuery(Number(productId))

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

        {isProductError && <p>Не удалось загрузить продукт...</p>}

        {isProductLoading && <p>Loading...</p>}

        {!isProductLoading && !isProductError && product && <ProductDetails product={product}/>}
      </div>
    </div>
  );
};

export default ProductPage;
