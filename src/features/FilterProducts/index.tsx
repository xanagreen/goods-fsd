import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { setCategoryOption } from './slice';
import { Button } from "shared/ui/Button";
import styles from "./styles.module.scss";
import { fetchAllProducts, fetchProductsByCategory } from 'widgets/ProductList/slice';


const FilterProducts = () => {
  const { categories, categoryOption } = useAppSelector((state) => state.categories);
  const dispatch = useAppDispatch();

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setCategoryOption(event.target.value))
  }
  
  const categoriesList = categories.map((item, index) => (
    <label className={styles['filter__checkbox']} key={`${index}${item}`}>
      <input type="radio" value={item} name='category' className={styles['filter__input']} onChange={handleOptionChange} />
      <span className={styles['filter__checkbox-label']}>{item}</span>
    </label>
  ))

  const applyFilter = () => {
    if (categoryOption) {
      dispatch(fetchProductsByCategory(categoryOption));
    }
  }

  const resetFilter = () => {
    if (categoryOption) {
      dispatch(setCategoryOption(null))
      dispatch(fetchAllProducts());
    }
  }

  return (
    <div className={styles.filter}>
      <p className={styles['filter__title']}>Selection<br/> by parameters</p>

      <form>
        <p className={styles['filter__label']}>
          Category
        </p>

        <div className={styles['filter__list']}>
          {categoriesList}
        </div>

        <div className={styles['filter__actions']}>
          <Button type="secondary" text="Apply" onClick={applyFilter} />
          <Button type="text" text="Reset" onClick={resetFilter} />
        </div>
      </form>
    </div>
  );
};

export default FilterProducts;
