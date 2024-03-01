import styles from "./styles.module.scss";
import { Button } from "shared/ui/Button";
import Checkbox from "shared/ui/Checkbox";
import { useGetProductsCategoriesQuery } from "features/FilterProducts/slice";
import { useState } from "react";
import { useGetSelectionProductsQuery } from "./api";
import ProductCard from "entities/ProductCard";
import Loader from "shared/ui/Loader";

const Selection = () => {
  const [step, setStep] = useState(1);
  const [category, setCategoryOption] = useState<string>('');
  const [allowFetch, setAllowFetch] = useState<boolean>(false);
  const  {
    data: categories,
    isError: isCategoriesError,
    isLoading: isCategoriesLoading,
  } = useGetProductsCategoriesQuery();
  const  {
    data: selectionProducts,
    isError: isSelectionProductsError,
    isLoading: isSelectionProductsLoading,
  } = useGetSelectionProductsQuery(category, {
    skip: allowFetch,
  })

  const optionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryOption(event.target.value)
  }

  const checkboxes = categories?.map((item) =>
    <Checkbox key={item} value={item} label={item} name="category" handleChange={optionChange} />
  );

  const listItems = selectionProducts?.map((item) =>
  <ProductCard key={item.id} price={item.price} name={item.title} img={item.thumbnail} id={Number(item.id)} />
);

  const handleNavigation = () => {
    if (step === 2) {
      setCategoryOption('')
    }

    setAllowFetch(step === 1)

    setStep((currentStep) => currentStep === 1? 2 : 1);
  }

  return (
      <div className={styles.form}> 
        <h2 className={styles['form__title']}>
          {step === 1? 'We will select the perfect product for you' : 'Your selection is ready!'}
        </h2>

        <p className={styles['form__caption']}>
          {step === 1? 'Answer three questions and we will send you a catalog with the most suitable products for you.' : <br />}
        </p>

        {step === 1 && (
          <div>
            <h3 className={styles['form__subtitle']}>
              What type of product are you considering?
            </h3>

            {isCategoriesError && <p>Категории временно недоступны</p>}

            {isCategoriesLoading  &&  <Loader />}

            {
              !isCategoriesError && !isCategoriesLoading && categories && (
                <div className={styles['form__list']}>
                  {checkboxes}
                </div>
              )
            }
          </div> 
        )}

        {step === 2 && (
          <div>
          {
            isSelectionProductsError && <p>Категории временно недоступны</p>
          }

          {
            isSelectionProductsLoading  &&  <p>Загрузка категорий...</p>
          }

          {
            !isSelectionProductsError && !isSelectionProductsLoading && categories && (
              <div className={styles.selection}>
                {listItems}
              </div>
            ) 
          }
          </div>
        )} 

        <div className={styles['form__footer']}>
            <p className={styles['form__page-number']}>{step} of 2</p>

            <Button 
              type='outlined' 
              text={step === 1? 'Next step' : 'Change selection'} 
              disabled={!category} 
              onClick={handleNavigation} 
            />
          </div>
      </div>
  );
};

export default Selection;