import Green_Star from "../Images/GREEN STAR LOGO.svg";
import ISO from "../Images/ISO 9001 Certified.png";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 flex flex-col items-center justify-center gap-2">
      <div className="mb-3 sm:text-[1rem]">
        <strong>
          <span>An ISO 9001:2015 Certified Company</span>
        </strong>
      </div>
      <div className="flex justify-center w-full">
        <img src={Green_Star} alt="" className="sm:w-[20%] w-[30%]" />
        <img src={ISO} alt="" className="sm:w-[15%] w-[20%]" />
      </div>
      <div className="text-center sm:text-[1.2rem]">
        © Copyright{" "}
        <strong>
          <span className="font-medium text-green-400">
            Green Star Private Limited
          </span>
        </strong>
        . All Rights Reserved 2022
      </div>
      <div className="text-center sm:text-[1.1rem]">
        Designed by{" "}
        <a href="#" target="_blank" className="font-medium text-red-500">
          Soliteck Digisolutions Private Limited
        </a>
      </div>
    </footer>
  );
};

export default Footer;
