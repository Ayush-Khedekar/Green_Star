import { motion } from "framer-motion";
import type { ReactNode } from "react";
export interface Business {
  Icons: ReactNode;
  Number: number | string;
  Title: string;
}

const Company = ({ companyTypes }: { companyTypes: Business }) => {
  return (
    <motion.div
      className="w-full max-w-md mx-auto bg-white border-2 border-[#026300] rounded-xl shadow-md p-2 flex items-center space-x-4
                 hover:scale-105 hover:shadow-xl transition-transform duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="w-10 h-10 bg-[#F9BA14] text-[#026300] rounded-full flex items-center justify-center text-[150%]">
        {companyTypes.Icons}
      </div>

      <div className="text-left">
        <p className="text-[120%] font-bold text-[#026300] hover:text-[#F9BA14] transition-colors duration-300">
          {companyTypes.Number}
        </p>
        <p className="text-sm text-gray-600">{companyTypes.Title}</p>
      </div>
    </motion.div>
  );
};

export default Company;
