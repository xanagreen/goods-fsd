import { useAppSelector } from "app/store/hooks";
import styles from "./styles.module.scss";
import ProductCard from "entities/ProductCard";
import { Button } from "shared/ui/Button";

type ProductListProps = {
  showMoreProducts: () => void;
};

const ProductList = ({showMoreProducts}: ProductListProps) => {
  const { products, total } = useAppSelector((state) => state.products);

  
  const listItems = products.map((item) =>
    <ProductCard key={item.id} price={item.price} name={item.title} img={item.thumbnail} id={item.id} />
  );

  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {listItems}
      </div>

      {
        products.length !== 0 && products.length !== total && <Button type='primary' text="Show more" onClick={showMoreProducts} />
      }
    </div>
  );
};

export default ProductList;