import styles from "./styles.module.scss";
import Gallery from "shared/ui/Gallery";
import { RatingStarIcon } from "shared/icons/RatingStarIcon";
import { Button } from "shared/ui/Button";
import { useUpdateProductMutation } from "pages/ProductPage/api";
import { FormEvent, useEffect, useState } from "react";
import TextInput from "shared/ui/TextInput";

type ProductDetailsProps =  {
  product: {
    id: string;
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
  const [updateProduct] =  useUpdateProductMutation();
  const [isEditMode, setEditMode] = useState(false)
  const [form, setForm] = useState({
    title,
    description,
    price: `${price}`,
    discountPercentage: `${discountPercentage}`,
    stock: `${stock}`,
    brand,
    category,
  })
  const [discountPrice, setDiscount] = useState('0')

  useEffect(() => {
    setDiscount(((Number(form.price)) * (100 - (Number(form.discountPercentage))) / 100).toFixed(2))
  }, [form.discountPercentage, form.price])

  const editProduct = () => {
    setEditMode(true);
  }

  const handleSave = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { title,  price, discountPercentage, stock, brand, category, description } = form;

    const formData = {
      title,
      description,
      price: Number(price),
      discountPercentage: Number(discountPercentage),
      stock: Number(stock),
      brand,
      category,
    }

    updateProduct({body: formData, id: Number(id)});
    setEditMode(false);
  }

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

        <form onSubmit={(event) => handleSave(event)}>
          <p className={`${styles.row} ${styles['row--align-center']}`}>
            <span className={styles.label}>Rating</span>
            <span className={styles.stars}>
              {Array(Math.round(rating || 0)).fill(null).map((_, i) => <RatingStarIcon key={i} />)}
            </span>
          </p>

          <p className={styles.row}>
            <span className={`${styles.label} ${isEditMode ? styles.fixed :''}`}>Base price</span>
            { 
              isEditMode
                ? <TextInput placeholder="Base price" value={form.price} setValue={(val) => setForm({...form, price: val})} />
                : price
            }
          </p>

          <p className={styles.row}>
            <span className={`${styles.label} ${isEditMode ? styles.fixed :''}`}>Discount percentage</span>
            { 
              isEditMode
                ? <TextInput placeholder="Discount percentage" value={form.discountPercentage} setValue={(val) => setForm({...form, discountPercentage: val})} />
                : `${discountPercentage}%`
            }
          </p>

          <p className={styles.row}>
            <span className={`${styles.label} ${isEditMode ? styles.fixed :''}`}>Discount price</span>
            {discountPrice}
          </p>

          <p className={styles.row}>
            <span className={`${styles.label} ${isEditMode ? styles.fixed :''}`}>Stock</span>
            { 
              isEditMode
                ? <TextInput placeholder="Discount percentage" value={form.stock} setValue={(val) => setForm({...form, stock: val})} />
                : stock
            }
          </p>

          <p className={styles.row}>
            <span className={`${styles.label} ${isEditMode ? styles.fixed :''}`}>Brand</span>
            { 
              isEditMode
                ? <TextInput placeholder="Discount percentage" value={form.brand} setValue={(val) => setForm({...form, brand: val})} />
                : brand
            }
          </p>

          <p className={styles.row}>
            <span className={`${styles.label} ${isEditMode ? styles.fixed :''}`}>Category</span>
            { 
              isEditMode
                ?  <TextInput placeholder="Discount percentage" value={form.category} setValue={(val) => setForm({...form, category: val})} />
                : category
            }
          </p>

          <p className={styles.row}>
            <span className={`${styles.label} ${isEditMode ? styles.fixed :''}`}>Description</span>
           { 
            isEditMode
              ? <TextInput placeholder="Discount percentage" value={form.description} setValue={(val) => setForm({...form, description: val})} /> 
              : description
            }
          </p>

          <div className={styles.action}>
            {isEditMode && <Button type="primary" text="Save" submit={true} />}
            {!isEditMode && <Button type="primary" text="Edit" onClick={editProduct} />}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductDetails;
