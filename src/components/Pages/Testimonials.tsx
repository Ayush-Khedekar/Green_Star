import { useState } from "react";
import { motion } from "motion/react";
import frame from "../Images/GREEN STAR LOGO.svg";
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
    <div className="overflow-hidden w-full p-10 bg-slate-200">
      <div
        style={{ animationPlayState: mouseOver ? "paused" : "running" }}
        className={`flex animate-marquee w-max`}
      >
        {[...data, ...data].map((item, index) => (
          <div
            onMouseEnter={() => setIsMouseOver(true)}
            onMouseLeave={() => setIsMouseOver(false)}
            key={`item-${index}`}
            className="w-[100vw] sm:w-[50vw] md:w-[33.3333vw] flex-shrink-0 flex flex-col p-3 rounded-[20px] shadow-2xl items-center text-center font-medium mx-2 gap-3 bg-white"
          >
            <img src={frame} alt="logo_Green_Star" className="w-[20%]" />
            <p className="text-[1rem]">{item.description}</p>
            <motion.div className="border-t-2 w-[80%] flex flex-col pt-3">
              <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -20 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="text-green-600 text-[1.5rem]"
              >
                {item.name}
              </motion.h2>
              <motion.p
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -20 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="text-[1.1rem] text-yellow-600"
              >
                {item.store}
              </motion.p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
