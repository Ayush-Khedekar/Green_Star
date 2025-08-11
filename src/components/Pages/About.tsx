import OurMission from "../OurMission";
import Icon_Component, { type NewCard } from "../Icon_Component";
import { FaForward, FaRegLaugh } from "react-icons/fa";
import { BiMoney } from "react-icons/bi";

const About = () => {
      const data: NewCard[] = [
        {
          Icons: <FaRegLaugh />,
          Title: "Quality Guaranteed",
          Description:
            "SoliTeck's in-house technical team ensures non-stop delivery of services. You do not have to worry about it anymore.",
        },
        {
          Icons: <FaForward />,
          Title: "Fastest Servers",
          Description:
            "Backend of SoliTeck is completely based on cloud technology installed on fastest servers in the world.",
        },
        {
          Icons: <BiMoney />,
          Title: "Safety Guaranteed",
          Description:
            "Your bill payments is safe with us, we are following all the security and accountaing compliance to make it sure",
        },
      ];
  return (
    <div className="flex flex-col lg:flex-row w-auto items-center px-4 py-8 gap-5">
      {/* left side */}
      <div className="w-full  flex flex-col  gap-10">
        <OurMission />
        <div className="flex flex-col gap-4 ">
          {data.map((item, index) => (
            <Icon_Component key={index} CardProp={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
