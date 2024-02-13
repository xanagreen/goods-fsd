import styles from "./styles.module.scss";

type ProductCardProps = {
  name: string;
  price: string;
  img: string;
};

const ProductCard = ({ name, price, img }: ProductCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        <img src={img} alt={name} className={styles.img} />
      </div>

      <p className={styles.name}>{name}</p>
      <p className={styles.price}>{price} $</p>
    </div>
  );
};

export default ProductCard;
