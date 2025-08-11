import type { ReactNode } from "react";
import { BiSolidWallet } from "react-icons/bi";
import { FaGasPump } from "react-icons/fa6";
import { motion } from "motion/react";
import { TbHomeStats } from "react-icons/tb";

export interface ServiceType {
  Icons: ReactNode;
  Title: string;
}

const OurService = () => {
  const ServiceData: ServiceType[] = [
    {
      Icons: <BiSolidWallet size={25} color="#026300" />,
      Title: "Utility Bill  Payments Transfer",
    },
    {
      Icons: <FaGasPump size={20} color="#026300" />,
      Title: "Gas Bill",
    },
    {
      Icons: <TbHomeStats size={25} color="#026300" />,
      Title: "Electricity Bill",
    },
  ];
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch w-full px-6 py-12 ">
        {ServiceData.map((item, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              type: "spring",
              stiffness: 100,
              damping: 12,
            }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            className="group relative bg-white rounded-xl hover:bg-[#FFF6D7] shadow-md hover:shadow-2xl transition-shadow duration-200 p-6 flex flex-col items-center justify-between space-y-4 text-center cursor-pointer md:w-full w-[80%] mx-auto"
          >
            <div className="relative flex items-center justify-center w-24 h-24 mb-2">
              <div className="relative rounded-full p-5 bg-green-200 transition-colors duration-300">
                {item.Icons}
              </div>
            </div>

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3 + 0.3, duration: 0.4 }}
              viewport={{ once: true }}
              className="text-base font-semibold text-[#026300] tracking-wide group-hover:text-green-800 transition-all duration-300"
            >
              {item.Title}
            </motion.span>
          </motion.div>
        ))}
      </section>
    </>
  );
};

export default OurService;
