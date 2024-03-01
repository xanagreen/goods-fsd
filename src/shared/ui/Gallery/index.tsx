import Slider from "react-slick";
import styles from "./styles.module.scss";
import "./style.scss";

type GalleryProps = {
  images: string[]
};

const Gallery = ({ images }: GalleryProps) => {
  const  settings = {
    customPaging: function(i: number) {
      return (
        <div className={styles.dot}>
          <img src={images[i]} className={styles.thumbnail} alt="" />
        </div>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const list = images.map(url => (
    <div key={url}  className={styles.wrapper} >
      <img src={url} alt='' className={styles.img} />
    </div>
  ))

  return (
    <div className="slider-container">
      { images.length === 1
        ? (
          <div className={styles.wrapper} >
            <img src={images[0]} alt='' className={styles.img} />
          </div>
        ) : (
          <Slider {...settings}>
            {list}
          </Slider>
        )
      }
    </div>
  );
};

export default Gallery;
