import Logo from "features/Logo";
import MenuLink from "shared/ui/MenuLink";
import styles from "./styles.module.scss";

type HeaderProps = {
  type?: 'main' | 'stuff';
};

type menuLink = {
  label: string, 
  url: string
}

const Header = ({type = 'main'}: HeaderProps) => {
  const mainLinksData: menuLink[] = [
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

  const stuffLinksData: menuLink[] = [
    {
      label: 'Back to site',
      url: '/'
    }
  ];

  const data = type === 'main' ? mainLinksData : stuffLinksData;

  const listItems = data.map(link =>
    <li key={link.label}><MenuLink label={link.label} url={link.url} /></li>
  );

  return (
    <header className={styles.header}>
      <Logo />

      <ul className={styles.menu}>
        {listItems}
      </ul>
    </header>
  );
};

export default Header;