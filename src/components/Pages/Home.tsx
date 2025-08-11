import img_fluid from "../Images/E-Wallet (1).gif";
import bgImage from "../Images/hero-bg.jpg";
import { motion } from "motion/react";
const Home = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <img
        src={bgImage}
        className="absolute top-0 left-0 w-full h-[100%] !z-[-2] opacity-20"
      />
      <motion.div
        whileInView={{ opacity: 0.8, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1.5 }}
        className="!z-10 bg-[#39a837] opacity-70 px-10 py-9 w-full"
      >
        <div className="sm:flex items-center gap-10 w-full">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="flex flex-col items-start md:w-[50%] sm:w-[60%]"
          >
            <h1 className="font-bold sm:text-3xl text-4xl text-slate-300 lg:leading-13 leading-10 ">
              Build Your Landing Page With <br></br>
              <span className="text-white ">
                Green Star
              </span>
            </h1>
            <h2 className="mt-[20px] sm:text-[1.2rem] text-[1.3rem] text-slate-100 font-medium">
              Green Star brings Utility Bill Payments and more services to your
              trusted nearby shop - to easily and securely serve your needs.
            </h2>
            <div className="text-center sm:text-lg text-[1.3rem] mt-6">
              <a
                href="#about"
                className="py-3 px-9 rounded-4xl shadow-md bg-blue-500 hover:bg-blue-600"
              >
                Get Started
              </a>
            </div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.5 }}
            className="sm:w-[50%] w-full flex justify-around sm:mt-0 mt-10"
          >
            <img
              src={img_fluid}
              className="w-fit h-[40vh] lg:h-[70vh] sm:h-[60vh] smooth-bounce"
              alt="fluid-img"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
