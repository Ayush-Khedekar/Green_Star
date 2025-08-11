import { images } from "../Constants/image/image-export";

const imagesArr = [
  images.imagTech2,
  images.imagTech1,
  images.imagTech3,
  // images.imagTech4,
  // images.imagTech5,
  images.imagTech6,
];
const Photo = () => {
  return (
    <>
      <div className="px-5 py-6 flex flex-col gap-4 overflow-x-auto">
        <p className="text-[#010382] font-bold  text-4xl">GALLERY</p>
        {/* <h1 className="text-[#010382]  sm:texty text-3xl font-bold ">
          Check our Gallery
        </h1> */}
      </div>
      <div className="mx-5 flex flex-row flex-nowrap justify-center overflow-x-auto py-5 gap-4">
        {imagesArr.map((currImg, index) => (
          <div key={index} className="flex-none w-50 h-60 overflow-hidden">
            <img
              src={currImg}
              alt={`Image-${index}`}
              className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-110 hover:rotate-3"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Photo;
