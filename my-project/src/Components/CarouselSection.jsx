import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import foto1 from "/Scene1.png";
import foto2 from "/Scene2.png";
import foto3 from "/Scene3.png";
// import foto4 from "/Scene4.png";

const CarouselSection = () => {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
    >
      <SwiperSlide>
        <img src={foto1} alt="Slide 1" style={{ width: "100%" }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={foto2} alt="Slide 2" style={{ width: "100%" }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={foto3} alt="Slide 3" style={{ width: "100%" }} />
      </SwiperSlide>
      {/* <SwiperSlide>
        <img src={foto4} alt="Slide 4" style={{ width: "100%" }} />
      </SwiperSlide> */}
    </Swiper>
  );
};

export default CarouselSection;
