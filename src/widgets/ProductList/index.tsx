import { useAppDispatch, useAppSelector } from "app/store/hooks";
import styles from "./styles.module.scss";
import ProductCard from "entities/ProductCard";
import { Button } from "shared/ui/Button";
import { useEffect } from "react";
import { fetchAllProducts } from "./slice";

const ProductList = () => {
  const { products, total } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getData = setTimeout(() => {
      dispatch(fetchAllProducts());
    }, 700)

    return () => clearTimeout(getData)
  }, [dispatch]);

  
  const listItems = products.map((item) =>
    <ProductCard key={item.id} price={item.price} name={item.title} img={item.thumbnail} id={item.id} />
  );

  const showMoreProducts = () => {
    dispatch(fetchAllProducts());
  }

  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {listItems}
      </div>

      {
        products.length !== total && <Button type='primary' text="Show more" onClick={showMoreProducts} />
      }
    </div>
  );
};

export default ProductList;