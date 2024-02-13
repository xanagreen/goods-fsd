import styles from "./styles.module.scss";

type MenuLinkProps = {
  label: string;
  url: string;
};

const MenuLink = ({ label, url }: MenuLinkProps) => {
  return (
    <a href={url} className={styles.link}>
      {label}
    </a>
  );
};

export default MenuLink;
