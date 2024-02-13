import Header from "widgets/Header";
import styles from "./styles.module.scss";
import { Button } from "shared/ui/Button";
import ProductList from "widgets/ProductList";
import FilterProducts from "features/FilterProducts";
import Footer from "widgets/Footer";
import AboutImg from 'shared/images/about.png'
import FormImg from 'shared/images/form-img.png'
import Team0 from 'shared/images/team-0.png'
import Team1 from 'shared/images/team-1.png'
import Team2 from 'shared/images/team-2.png'
import Team3 from 'shared/images/team-3.png'
import Team4 from 'shared/images/team-4.png'
import Team5 from 'shared/images/team-5.png'
import ImageCheckbox from "shared/ui/ImageCheckbox";
import TeamCard from "entities/TeamCard";
import FaqItem from "shared/ui/FaqItem";

const MainPage = () => {
  const checkboxes =  Array.from({length:6}, (_, index) =>
    <ImageCheckbox value={`${index}`} label="sneakers" img={FormImg}  />
  );

  const teamMembers =  [
    {
      name: 'Maxim',
      position: 'Administrator',
      img: Team0
    },
    {
      name: 'Anna',
      position: 'Manager',
      img: Team1
    },
    {
      name: 'Jules',
      position: 'Designer',
      img: Team2
    },
    {
      name: 'Said',
      position: 'Backend',
      img: Team3
    },
    {
      name: 'Nik',
      position: 'Frontend',
      img: Team4
    },
    {
      name: 'Inna',
      position: 'Administrator',
      img: Team5
    },
  ].map((member, index) =>
    <TeamCard 
      key={`${index}${member.name}`} 
      name={member.name} 
      position={member.position} 
      img={member.img} 
      shift={(index + 1) % 3 === 2 } 
    />
  );

  const faqList = [
    {
      question: 'Question 1',
      answer: 'Long answer to the first question',
    },
    {
      question: 'Question 2',
      answer: 'Long answer to the first question',
    }
  ].map((item, index) => <FaqItem key={index} question={item.question} answer={item.answer} />)

  return (
    <div>
      <div className={styles.top}>
        <div className={styles.container}>
          <Header />

          <h1 className={styles.title}>
            Goods4you
          </h1>

          <div className={styles['top__content']}>
            <h2 className={styles['top__content-title']}>
              Any products from famous brands with worldwide delivery
            </h2>
            <p className={styles['top__content-subtitle']}>
              We sell smartphones, laptops, clothes, shoes<br /> and many other products at low prices
            </p>

            <Button type='primary' text="Go to shopping" />
          </div>
        </div>
      </div>

      <div className={`${styles.container} ${styles['catalog']}`}>
        <h2 className={styles['catalog__title']}>Catalog</h2>

        <div className={styles['catalog__content']}>
          <FilterProducts />
          <ProductList />
        </div>
      </div>

      <div className={styles.about}>
        <div className={`${styles.container} ${styles['about__container']}`}>
          <div className={styles['about__content']}>
            <h2 className={styles['about__title']}>About us</h2>
            <blockquote>
              <p className={styles['about__blockquote']}>
                Every day a person has a choice what to spend his money on. Stores and websites offer an endless list of products.
                <br />
                But we will help you make the right choice!
              </p>

              <p className={styles['about__author']}>
                Goods4you
              </p>
            </blockquote>
          </div>

          <img src={AboutImg} alt="" />
        </div>
      </div>

      <div className={`${styles.container} ${styles.form}`}> 
        <h2 className={styles['form__title']}>
          We will select the perfect product for you
        </h2>

        <p className={styles['form__caption']}>
          Answer three questions and we will send you a catalog with the most suitable products for you.
        </p>

        <form>
          <h3 className={styles['form__subtitle']}>
            What type of product are you considering?
          </h3>

          <div className={styles['form__list']}>
            {checkboxes}
          </div>

          <div className={styles['form__footer']}>
            <p className={styles['form__page-number']}>1 of 3</p>

            <Button type='outlined' text='Next step' />
          </div>
        </form>
      </div>

      <div className={styles.team}>
        <div className={`${styles.container} ${styles['team__container']}`}>
          <h2 className={styles['team__title']}>
            Our team
          </h2>

          <div className={styles['team__list']}>
            {teamMembers}
          </div>
        </div>
      </div>

      <div className={styles.faq}>
        <h2 className={styles['faq__title']}>
          FAQ
        </h2>

        <div className={styles['faq__list']}>
          {faqList}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MainPage;