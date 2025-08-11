import { motion } from "framer-motion";
import { images } from "../Constants/image/image-export";

const OurMission = () => {
  return (
    <>
      <div className="w-full  flex flex-col py-3 sm:flex-row ">
        <div className="sm:max-w-[60%] mx-auto gap-8 items-start">
          <h2 className="text-[#026300] text-3xl font-bold mb-3 relative block border-l-4 border-[#F9BA14] pl-4">
            Our Mission
          </h2>
          <div>
            <p className="text-[#787878]">
              Green Star is a concept to equip small business owners with the
              right tools to expand their revenue without any extra efforts.
              Green Star serves as a companion to facilitate various online
              services backed by trusted servers and qualified team. Green Star is
              committed to adequate training and development of its business
              partners. Digital India is happening and Green Star heartily
              supports Digital India initiative and is committed towards
              bringing transparency and opportunities to our fellow countrymen.
              Our team at Green Star keeps updating themselves constantly to
              provide quality services at lowest possible costs. Join Green Star
              now and experience a new digital world at one place.
            </p>
          </div>
        </div>
        <motion.div
          className="w-full flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            className="w-full max-w-md transition-transform duration-700 ease-in-out hover:scale-110 hover:rotate-3"
            src={images.Tech}
            alt="Tech"
          />
        </motion.div>
      </div>
    </>
  );
};

export default OurMission;
