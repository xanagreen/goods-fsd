
import { Button } from "shared/ui/Button";
import styles from "./styles.module.scss";

const FilterProducts = () => {
  const categories = [
    {
      label: 'smartphones',
      value: 'smartphones',
    },
    {
      label: 'laptops',
      value: 'laptops',
    },
    {
      label: 'sneakers',
      value: 'sneakers',
    },
    {
      label: 'sneakers',
      value: 'sneakers',
    },
    {
      label: 'sneakers',
      value: 'sneakers',
    },
    {
      label: 'sneakers',
      value: 'sneakers',
    },
    {
      label: 'sneakers',
      value: 'sneakers',
    },
    {
      label: 'sneakers',
      value: 'sneakers',
    }
  ].map((item,) => (
    <label className={styles['filter__checkbox']} key={item.value}>
      <input type="checkbox" name={item.value} className={styles['filter__input']} />
      <span className={styles['filter__checkbox-label']}>{item.label}</span>
    </label>
  ))

  return (
    <div className={styles.filter}>
      <p className={styles['filter__title']}>Selection<br/> by parameters</p>

      <form>
        <p className={styles['filter__label']}>
          Category
        </p>

        <div className={styles['filter__list']}>
          {categories}
        </div>

        <div className={styles['filter__actions']}>
          <Button type="secondary" text="Apply" />
          <Button type="text" text="Reset" />
        </div>
      </form>
    </div>
  );
};

export default FilterProducts;
