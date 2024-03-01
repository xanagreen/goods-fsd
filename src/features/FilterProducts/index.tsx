import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { setCategoryOption, useGetProductsCategoriesQuery } from './slice';
import { Button } from "shared/ui/Button";
import styles from "./styles.module.scss";
import { fetchAllProducts, fetchProductsByCategory, resetProducts } from 'widgets/ProductList/slice';


const FilterProducts = () => {
  const { categoryOption } = useAppSelector((state) => state.categories);
  const  {
    data: categories,
    isError: isCategoriesError,
    isLoading: isCategoriesLoading,
  } = useGetProductsCategoriesQuery()
  const dispatch = useAppDispatch();

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setCategoryOption(event.target.value))
  }
  
  const categoriesList = categories?.map((item, index) => (
    <label className={styles['filter__checkbox']} key={`${index}${item}`}>
      <input 
        type="radio" 
        value={item}
        name='category' 
        checked={item === categoryOption} 
        className={styles['filter__input']} 
        onChange={handleOptionChange} 
      />
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
      dispatch(resetProducts());
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

        {
          isCategoriesError && <p>Категории временно недоступны</p>
        }

        {
          isCategoriesLoading 
          ? <p>Загрузка категорий...</p>
          : (
            <div className={styles['filter__list']}>
              {categoriesList}
            </div>
          )
        }

        <div className={styles['filter__actions']}>
          <Button type="secondary" text="Apply" onClick={applyFilter} />
          <Button type="text" text="Reset" onClick={resetFilter} />
        </div>
      </form>
    </div>
  );
};

export default FilterProducts;
