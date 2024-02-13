import styles from "./styles.module.scss";

type TeamCardProps = {
  name: string;
  position: string;
  img: string;
  shift?: boolean;
};

const TeamCard = ({ name, position, img, shift }: TeamCardProps) => {
  return (
    <div className={`${styles.card} ${shift ? styles.shift : '' }`}>
      <img src={img} alt={name} className={styles.img} />

      <div className={styles.overlay} />

      <div className={styles.description}>
        <p className={styles.name}>{name}</p>
        <p className={styles.position}>{position}</p>
      </div>
    </div>
  );
};

export default TeamCard;
