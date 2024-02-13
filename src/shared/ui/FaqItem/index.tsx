import styles from "./styles.module.scss";
import { useState } from 'react';

type FaqItemProps = {
  question: string;
  answer: string;
};

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={styles.faq}>
      <button className={`${styles.question} ${isOpen? styles.rotate : ''}`} onClick={() => setOpen((val) => !val)}>{question}</button>
      <p className={`${styles.answer} ${isOpen? styles.open : ''}`}>
        {answer}
      </p>
    </div>
  );
};

export default FaqItem;
