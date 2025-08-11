import { motion } from "framer-motion";
export interface Business {
  Number: number | string;
  Title: string;
  id: number;
}

const Company = ({ companyTypes }: { companyTypes: Business }) => {
  return (
    <motion.div
      className="w-[45%] md:w-auto min-w-[160px] max-w-[300px] flex flex-col items-center"
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: companyTypes.id * 0.2,
        type: "spring",
        stiffness: 100,
        damping: 12,
      }}
    >
        <p className="text-2xl font-bold text-[#F9BA14]">
          {companyTypes.Number}+
        </p>
        <p className="text-[#026300] text-[0.8rem]">{companyTypes.Title}</p>
    </motion.div>
  );
};

export default Company;
