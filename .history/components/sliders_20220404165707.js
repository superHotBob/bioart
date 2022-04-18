import styles from "../styles/Home.module.css";

export const sliderGenoOne = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,    
  };
  export function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button type="button" style={{top: '45%'}} className={styles.sliderBtnNext} onClick={onClick} />
    );
  }
  
  export function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button
        type="button"
        style={{ zIndex: 1 , top: '45%'}}
        className={styles.sliderBtnPrev}
        onClick={onClick}
      />
    );
  }

  export const sliderGenoTwo = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  