import { BasketIcon } from "shared/icons/BasketIcon";
import styles from "./styles.module.scss";

type CartPreviewProps = {
  count: number;
};

const CartPreview = ({count}: CartPreviewProps) => {
  return (
    <div className={styles.preview}>
      <BasketIcon />

      <div className={styles.count}>
        {count}
      </div>
    </div>
  );
};

export default CartPreview;
