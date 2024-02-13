import Logo from "features/Logo";
import MenuLink from "shared/ui/MenuLink";
import styles from "./styles.module.scss";

const Footer = () => {
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
    <li><MenuLink label={link.label} url={link.url} /></li>
  );

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Logo />

        <ul className={styles.menu}>
          {listItems}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;