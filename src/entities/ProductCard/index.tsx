import styles from "./styles.module.scss";

type ProductCardProps = {
  name: string;
  price: number;
  img: string;
  id: number;
};

const ProductCard = ({ name, price, img, id }: ProductCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        <img src={img} alt={name} className={styles.img} />
      </div>

      <p className={styles.name}>{name}</p>
      <p className={styles.price}>{price} $</p>
      <a href={`/catalog/${id}`}className={styles.link}>{styles.name}</a>
    </div>
  );
};

export default ProductCard;
