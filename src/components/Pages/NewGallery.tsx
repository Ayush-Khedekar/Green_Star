import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const imagesArr = ["/images/img1.jpg", "/images/img2.jpg", "/images/img3.jpg"];

const NewGallery = () => {
  return (
    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView="auto"
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{ clickable: true }}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper w-full max-w-4xl py-10"
    >
      {imagesArr.map((currImg, index) => (
        <SwiperSlide
          key={index}
          className="w-60 h-80 rounded-lg overflow-hidden shadow-lg"
        >
          <img
            src={currImg}
            alt={`Image-${index}`}
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default NewGallery;
