import { motion } from "motion/react";
import frame from "../Images/Frame 1000003889.png";
const Contact = () => {
  return (
    <div className="px-3 py-6 flex flex-col gap-2 bg-slate-300 w-full">
      <div className=" px-10 py-2 rounded-[10px] flex flex-col gap-5 ">
        <div className="text-gray-500 flex flex-col justify-start gap-2">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex gap-3"
          >
            <img
              src={frame}
              alt="Logo_Green_Star"
              className="w-[30px] h-[30px] items-start"
            />
            <motion.h2 className="w-[20%] flex justify-between text-center font-medium text-[1.2rem] border-l-4 border-l-green-500 pl-4 mb-3">
              Contact
            </motion.h2>
          </motion.div>
          <h1 className="text-3xl text-green-900 font-medium">CONTACT US</h1>
        </div>
        <div className="leading-10 text-[1.2rem]">
          <p className="text-green-800 font-medium">
            Green Star Private Limited
          </p>
          <p className="text-gray-600">
            Email us at{" "}
            <span className="text-red-500 font-medium">
              support@Green Star.com
            </span>
          </p>
          <p className="text-gray-600">Contact - +91 00000 00000</p>
          <p className="text-gray-600 leading-7">
            Corporate Office
            <br></br>
            9th Floor, Office No 901,<br></br>
            Technocity Co Operative Housing Society Ltd,
            <br></br> TTC Industrial Area, Plot No X5/3,
            <br></br>
            Mahape, Navi Mumbai, Thane, Maharashtra, 400701
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
