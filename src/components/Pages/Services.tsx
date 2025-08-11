// import { CiLocationOn } from "react-icons/ci";
import OurService from "../OurService";
import type { Business } from "../Company";
// import { FaRegFaceSmileBeam } from "react-icons/fa6";
// import { IoReorderThree } from "react-icons/io5";
// import { TfiArrowCircleRight } from "react-icons/tfi";
import Company from "../Company";

const Services = () => {
  const CompanyData: Business[] = [
    {
      Number: 209878,
      Title: "Happy Clients",
      id: 1,
    },
    {
      Number: 5698,
      id: 2,
      Title: "Locations",
    },
    {
      Number: 100098,
      Title: "Daily Transactions",
      id: 3,
    },
    {
      Number: "12%",
      Title: "Business Growthrs",
      id: 4,
    },
  ];
  return (
    <div className="py-8 px-5 bg-white">
      <div className="border-l-4 border-l-yellow-500 pl-5">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 flex gap-3 uppercase">
          Our Service
        </h2>
      </div>
      <div>
        <OurService />
      </div>
      <div className="flex flex-wrap justify-center gap-6 md:gap-0 py-7 rounded-2xl">
        {CompanyData.map((CompanyItem) => (
          <Company companyTypes={CompanyItem} key={CompanyItem.id} />
        ))}
      </div>
    </div>
  );
};

export default Services;
