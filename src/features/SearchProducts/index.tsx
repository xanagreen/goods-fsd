import { Button } from "shared/ui/Button";
import TextInput from "shared/ui/TextInput";
import styles from "./styles.module.scss";
import { fetchProductsBySearch, fetchAllProducts } from 'widgets/ProductList/slice';
import { FormEvent, useCallback, useEffect, useState } from "react";
import { useAppDispatch } from "app/store/hooks";
import useDebounce from "app/hooks/useDebounce";

const SearchProducts = () => {
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce(value, 700);
  const dispatch = useAppDispatch();

  const search = useCallback(async () => {
    if (debouncedValue) {
      dispatch(fetchProductsBySearch(debouncedValue));
    }
  }, [debouncedValue, dispatch]);

  useEffect(() => {
    search();
  }, [debouncedValue, search]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSearch();
  }

  const handleSearch = () => {
    if (value) {
      dispatch(fetchProductsBySearch(value));
    } else {
      dispatch(fetchAllProducts());
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.search}>
      <TextInput placeholder="Search by title" value={value} setValue={setValue} />
      <Button type="primary" text="Search" onClick={handleSearch} />
    </form>
  );
};

export default SearchProducts;