import { useState } from "react";
import { motion } from "motion/react";
import frame from "../Images/GREEN STAR LOGO.svg";
import { FaCircleUser } from "react-icons/fa6";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
type dataProps = {
  name: string;
  store: string;
  description: string;
};
const Testimonials = () => {
  const [data, _setData] = useState<dataProps[]>([
    {
      name: "Sara Saroj",
      store: "Homemaker",
      description:
        "I was a housewife, but with help of GreenStar now I have started earning from my mobile by recharging DTH and mobile of all the families in my neighbourhood. Thank you, Green Star.",
    },
    {
      name: "Suresh Shrama",
      store: "Shop keeper",
      description:
        "Green Star support is very helpful, they have resolved all my queries and they explain everything in a very simple and understandable manner.",
    },
    {
      name: "Rajesh Singh",
      store: "Store Owner",
      description:
        " My business has increased many folds with the help of Green Star, now I can manage all telecom operators with single login. Now I am able to give time to my family.",
    },
    {
      name: "Ramesh Gupta",
      store: "Store Owner",
      description:
        " With Green Star Utility bill, people of my village can easily do the theres utility bill pay, and in between I earn a good commission.",
    },
    {
      name: "Mr.JagatPal",
      store: "Store Owner",
      description:
        "My business has increased many folds with the help of Green Star, now I can manage all telecom operators with single login. Now I am able to give time to my family.",
    },
  ]);
  const [mouseOver, setIsMouseOver] = useState(false);

  return (
    <div className="overflow-hidden w-full p-10 bg-white">
      <div
        style={{ animationPlayState: mouseOver ? "paused" : "running" }}
        className={`flex animate-marquee w-max`}
      >
        {[...data, ...data].map((item, index) => (
          <div
            onMouseEnter={() => setIsMouseOver(true)}
            onMouseLeave={() => setIsMouseOver(false)}
            key={`item-${index}`}
            className="w-[24.375rem] lg:w-[30rem] flex-shrink-0 flex flex-col justify-between font-medium mx-2 p-6 bg-white rounded-2xl shadow-xl border border-gray-200 gap-4"
          >
            <div className="flex justify-center">
              <img src={frame} alt="logo_Green_Star" className="w-[28%]" />
            </div>
            <p className="relative text-gray-800 text-lg md:text-xl leading-relaxed px-4">
              <span className="text-3xl text-blue-600 absolute -top-2 -left-4">
                <RiDoubleQuotesL />
              </span>
              {item.description}
              <span className="text-3xl text-blue-600 absolute -bottom-0 -right-2">
                <RiDoubleQuotesR />
              </span>
            </p>
            <motion.div className="w-[80%] flex px-3 gap-4">
              <div className="">
                <FaCircleUser size={50} color="#026300" />
              </div>
              <div className="flex flex-col">
                <motion.h2
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: -20 }}
                  transition={{ duration: 1.5 }}
                  viewport={{ once: true }}
                  className="text-green-600 text-[1.3rem]"
                >
                  {item.name}
                </motion.h2>
                <motion.p
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: -20 }}
                  transition={{ duration: 1.5 }}
                  viewport={{ once: true }}
                  className="text-[0.9rem] text-yellow-600"
                >
                  {item.store}
                </motion.p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
