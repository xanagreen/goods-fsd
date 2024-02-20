import { Button } from "shared/ui/Button";
import TextInput from "shared/ui/TextInput";
import styles from "./styles.module.scss";
import { fetchProductsBySearch, fetchAllProducts } from 'widgets/ProductList/slice';
import { FormEvent, useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "app/store/hooks";
import useDebounce from "app/hooks/useDebounce";
import { setSearchValue } from "./slice";

const SearchProducts = () => {
  const [value, setValue] = useState('');
  const { search } = useAppSelector((state) => state.search);
  const debouncedValue = useDebounce(value, 2000);
  const dispatch = useAppDispatch();

  const fetchProducts = useCallback(async () => {
    if (debouncedValue && debouncedValue !== search) {
      dispatch(setSearchValue(debouncedValue));
      dispatch(fetchProductsBySearch(debouncedValue));
    }
  }, [debouncedValue, dispatch]);

  useEffect(() => {
    fetchProducts();
  }, [debouncedValue, fetchProducts]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSearch();
  }

  const handleSearch = () => {
    if (!search && !value) {
      return
    }

    dispatch(setSearchValue(value));

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