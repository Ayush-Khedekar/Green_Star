import { images } from "../Constants/image/image-export";
import SliderCarousel from "./Pages/GallaryCarousel";

const Gallery = () => {
  const imgSources = [
    images.imagTech1,
    images.imagTech2,
    images.imagTech4,
    images.imagTech6,
    images.photo1,
    images.photo2,
    images.photo6,
    images.photo4,
    images.photo8,
    images.photo3,
  ];
  return (
    <>
      <div className="px-5 ">
        <p className="text-[#026300] font-bold  text-4xl border-l-4 border-l-yellow-500 pl-5 sm:text-3xl ">
          GALLERY
        </p>
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[150%] h-[450px] flex justify-center items-center flex-wrap">
            <SliderCarousel images={imgSources} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
