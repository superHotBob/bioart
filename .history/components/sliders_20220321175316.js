import styles from "../styles/Home.module.css";
export const sliderGeno = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    // appendDots: dots => (
    //   <div
    //     style={{
    //       backgroundColor: "#ddd",
    //       borderRadius: "10px",
    //       padding: "10px"
    //     }}
    //   >
    //     <ul style={{ margin: "0 20px",color: "red"}}> {dots} </ul>
    //   </div>
    // ),
    // customPaging: i => (
    //   <div
    //     style={{
    //       width: "400px",
    //       float: 'left',
    //       color: "blue",
    //       border: "1px blue solid"
    //     }}
    //   >
    //     {i + 1}
    //   </div>
    // )
  };
  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button type="button" style={{top: '45%'}} className={styles.sliderBtnNext} onClick={onClick} />
    );
  }
  
  function PrevArrow(props) {
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

