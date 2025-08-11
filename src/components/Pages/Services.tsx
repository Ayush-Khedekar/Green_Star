import type { ServiceType } from "../OurService";
import { CiLocationOn } from "react-icons/ci";
import { FaGasPump } from "react-icons/fa";
import { TbHomeStats } from "react-icons/tb";
import OurService from "../OurService";
import type { Business } from "../Company";
import { FaRegFaceSmileBeam } from "react-icons/fa6";
import { IoReorderThree } from "react-icons/io5";
import { TfiArrowCircleRight } from "react-icons/tfi";
import Company from "../Company";
import { RiWallet3Fill } from "react-icons/ri";

const Services = () => {
  const ServiceData: ServiceType[] = [
    {
      Icons: <RiWallet3Fill />,
      Title: "Utility Bill  Payments Transfer",
    },
    {
      Icons: <FaGasPump />,
      Title: "Gas Bill",
    },
    {
      Icons: <TbHomeStats />,
      Title: "Electricity Bill",
    },
  ];
  const CompanyData: Business[] = [
    {
      Icons: <FaRegFaceSmileBeam />,
      Number: 209878,
      Title: "Happy Clients",
    },
    {
      Icons: <CiLocationOn />,
      Number: 5698,
      Title: "Locations",
    },
    {
      Icons: <IoReorderThree />,
      Number: 100098,
      Title: "Daily Transactions",
    },
    {
      Icons: <TfiArrowCircleRight />,
      Number: "12%",
      Title: "Business Growthrs",
    },
  ];
  return (
    <div className="py-8 px-5">
      <div className="border-l-4 border-l-yellow-500 pl-5">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 flex gap-3 uppercase">
          Our Service
        </h2>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-start">
        {ServiceData.map((ServiceItem) => (
          <OurService ServiceProp={ServiceItem} />
        ))}
      </div>
      <div className="flex flex-col sm:flex-row justify-between p-5 bg-white gap-4">
        {CompanyData.map((CompanyItem) => (
          <Company companyTypes={CompanyItem} />
        ))}
      </div>
    </div>
  );
};

export default Services;
