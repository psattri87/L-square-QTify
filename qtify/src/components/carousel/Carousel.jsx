import React, { useContext, useEffect } from "react";
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

const Controls = ({ data }) => {
  const swiper = useSwiper();
  useEffect(() => {
    swiper.slideTo(0);
    // eslint-disable-next-line
  }, [data]);
  return <></>;
};

export default function Carousel({ data, type }) {
  const { setSong } = useContext(ApiContext);
  setSong(data[0])
  const handleSongClick = (song) => {
    setSong(song);
  };

  // useEffect(() => {
  //   setSong(data[0]);
  // }, []);

  return (
    <div className={styles.carousel}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={7}
        // navigation
        navigation={{
          prevEl: ".swiper-button-next",
          nextEl: ".swiper-button-prev",
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className={styles.swiper}
      >
        {data.map((song) => {
          return (
            <SwiperSlide id={song.id} onClick={() => handleSongClick(song)}>
              <Card data={song} type={type} />
            </SwiperSlide>
          );
        })}
        <div className={styles.swiperButtons}>
          <div className={styles.swiperButtonPrev}>
            <LeftArrow />
          </div>
          <div className={styles.swiperButtonNext}>
            <RightArrow />
          </div>
        </div>
      </Swiper>
    </div>
  );
}
