import styles from "./styles.module.scss";
import Gallery from "shared/ui/Gallery";
import { RatingStarIcon } from "shared/icons/RatingStarIcon";

type ProductDetailsProps =  {
  product: {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
  }
};

const ProductDetails = ({product}: ProductDetailsProps) => {
  const { title, id, rating, price, discountPercentage, stock, brand, category, description, images } = product;
  const discountPrice = ((price || 0) * (100 - (discountPercentage || 0)) / 100).toFixed(2);

  return (
    <div className={styles.product}>
      <Gallery images={images || []} /> 

      <div className={styles.content}>
        <div className={styles.header}>
          <h2>{title}</h2>
          <p className={styles.row}>
            <span className={styles.label}>SKU ID</span>
            {id}
          </p>
        </div>

        <p className={`${styles.row} ${styles['row--align-center']}`}>
          <span className={styles.label}>Rating</span>
          <span className={styles.stars}>
            {Array(Math.round(rating || 0)).fill(null).map((_, i) => <RatingStarIcon key={i} />)}
          </span>
        </p>

        <p className={styles.row}>
          <span className={styles.label}>Base price</span>
          {price}
        </p>

        <p className={styles.row}>
          <span className={styles.label}>Discount percentage</span>
          {discountPercentage}%
        </p>

        <p className={styles.row}>
          <span className={styles.label}>Discount price</span>
          {discountPrice}
        </p>

        <p className={styles.row}>
          <span className={styles.label}>Stock</span>
          {stock}
        </p>

        <p className={styles.row}>
          <span className={styles.label}>Brand</span>
          {brand}
        </p>

        <p className={styles.row}>
          <span className={styles.label}>Category</span>
          {category}
        </p>

        <p className={styles.row}>
          <span className={styles.label}>Description</span>
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
