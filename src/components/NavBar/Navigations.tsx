import { motion } from "framer-motion"; // Ensure 'framer-motion' installed

type Props = {
  onLinkClick: (id: string) => void;
  activeSection?: string;
};

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "gallery", label: "Gallery" },
  { id: "privacy-policy", label: "Privacy Policy" },
  { id: "terms-and-conditions", label: "Term & Condition" },
  { id: "contact", label: "Contact" },
  { id: "login", label: "Login" },
];

const Navigations = ({ onLinkClick, activeSection }: Props) => {
  console.log(activeSection, "cecse");
  return (
    <>
      {navItems.map((item) => (
        <motion.li
          whileInView={{ opacity: 1, x: 10 }}
          initial={{ opacity: 0, x: 20 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          key={item.id}
          className={`relative group list-none ${
            activeSection == item.id ? "font-bold text-[#53b850]" : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            onLinkClick(item.id);
          }}
        >
          <a
            href={`#${item.id}`}
            className={`flex flex-col items-end justify-between mx-2 md:text-[13px] pt-[5px] pb-[3px] text-[20px] xl:text-[18px] lg:text-[16px] 2xl:text-[20px] font-medium hover:text-[#53b850] font-[Poppins] relative
              ${activeSection === item.id ? "" : "text-[#026300]"}
              `}
          >
            {item.label}
            <span
              className={`h-[2px] w-full bg-[#F9BA14] transform transition-all ease-in-out duration-300${
                activeSection === item.id
                  ? "opacity-100 translate-x-0 w-full"
                  : "absolute bottom-0 left-0 -translate-x-5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:w-[50%]"
              }`}
            ></span>
          </a>
        </motion.li>
      ))}
    </>
  );
};

export default Navigations;

// ${
//                 activeSection === item.id
//                   ? "bg-[#F9BA14] w-full h-[2px] text-[#53b850]"
//                   : "hover:bg-[#F9BA14] w-full h-[2px] text-[#026300] scale-x-0 hover:scale-x-100"
//               }
