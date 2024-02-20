import Logo from "features/Logo";
import MenuLink from "shared/ui/MenuLink";
import styles from "./styles.module.scss";

const Footer = () => {
  const linksData: {label: string, url: string}[] = [
    {
      label: 'Catalog',
      url: '/#catalog'
    },
    {
      label: 'About us',
      url: '/#about'
    },
    {
      label: 'Product selection',
      url: '/#selection'
    },
    {
      label: 'Our team',
      url: '/#team'
    },
    {
      label: 'FAQ',
      url: '/#faq'
    },
    {
      label: 'For staff',
      url: '/catalog'
    },
  ];

  const listItems = linksData.map(link =>
    <li key={link.label}><MenuLink  label={link.label} url={link.url} /></li>
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