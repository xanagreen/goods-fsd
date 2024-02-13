import styles from "./styles.module.scss";
import ProductCard from "entities/ProductCard";
import ProductImg from 'shared/images/product.png'
import { Button } from "shared/ui/Button";

const ProductList = () => {
  const listItems =  Array.from({length:9}, () =>
    <ProductCard price="110" name="Nike Air Force 1 '07 QS" img={ProductImg} />
  );

  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {listItems}
      </div>
      <Button type='primary' text="Show more" />
    </div>
  );
};

export default ProductList;