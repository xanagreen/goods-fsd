import Logo from "features/Logo";
import MenuLink from "shared/ui/MenuLink";
import styles from "./styles.module.scss";
import CartPreview from "features/CartPreview";

const Header = () => {
  const linksData: {label: string, url: string}[] = [
    {
      label: 'Catalog',
      url: '#'
    },
    {
      label: 'About us',
      url: '#'
    },
    {
      label: 'Product selection',
      url: '#'
    },
    {
      label: 'Our team',
      url: '#'
    },
    {
      label: 'Shipping and payment',
      url: '#'
    },
    {
      label: 'Contacts',
      url: '#'
    },
  ]

  const listItems = linksData.map(link =>
    <li><MenuLink key={link.label} label={link.label} url={link.url} /></li>
  );

  return (
    <header className={styles.header}>
      <Logo />

      <ul className={styles.menu}>
        {listItems}
      </ul>

      <div className={styles.cart}>
        <MenuLink label="Cart" url="#" />

        <CartPreview count={1} />
      </div>
    </header>
  );
};

export default Header;