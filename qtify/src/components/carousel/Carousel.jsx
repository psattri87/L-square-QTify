import React, { useContext, useEffect, useState, useRef } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
import { ReactComponent as LeftArrow } from "../../assets/LeftArrow.svg";
import { ReactComponent as RightArrow } from "../../assets/RightArrow.svg";
// import { PiCaretCircleRightFill } from "react-icons/pi";
import styles from "./Carousel.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { ApiContext } from "../../context/ApiContext";

import Card from "../card/Card";

// const Controls = ({ data }) => {
//   const swiper = useSwiper();
//   useEffect(() => {
//     swiper.slideTo(7);
//     // eslint-disable-next-line
//   }, [data]);
//   return <></>;
// };

export default function Carousel({ data, type }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { setSong } = useContext(ApiContext);
  const sliderRef = useRef(null);
  const swiperRef = useRef();
  
  setSong(data[0]);
  const handleSongClick = (song) => {
    setSong(song);
  };

  const handleNext = () => {
    if (currentSlide < data.length-7) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    console.log("current slide is:", currentSlide);
    sliderRef.current.swiper.slideTo(currentSlide, 500, false);
  }, [currentSlide]);

  return (
    <div className={styles.carousel}>
      <Swiper
        ref={sliderRef}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={7}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className={styles.swiper}
      >
        {data.map((song) => {
          return (
            <SwiperSlide id={song.id} onClick={() => handleSongClick(song)}>
              <Card data={song} type={type} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className={styles.swiperButtons}>
        <div className={styles.swiperButtonPrev} onClick={handlePrevious}>
          <LeftArrow />
        </div>
        <div className={styles.swiperButtonNext} onClick={handleNext}>
          <RightArrow />
        </div>
      </div>
    </div>
  );
}
