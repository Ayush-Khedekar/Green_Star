import { useEffect, useState } from "react";
export interface SliderCarouselProps {
  images: string[];
}

const SliderCarousel = ({ images }: SliderCarouselProps) => {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setActive((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    }, 5000);
    return () => {
      clearInterval(timerInterval);
    };
  }, [active]);
  return (
    <>
      <div className="w-full sm:h-[70%] h-[60%] flex gap-2  justify-center items-stretch">
        {images?.map((eachImage, ind) => (
          <div
            key={ind}
            className={`rounded-md cursor-pointer  h-full left-0 origin-left z-[5] ${
              ind == active ? " w-[500px] sm:w-[250px]" : "w-[50px] "
            } opacity-100 object-cover overflow-hidden duration-300 transition-all ease-in-out `}
          >
            <img
              onClick={() => {
                setActive(ind);
              }}
              style={{
                width: 280,
                height: "100%",
              }}
              src={eachImage}
              alt={`carousel-${ind + 1}`}
              className="w-full h-full object-cover bg-cover "
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default SliderCarousel;
