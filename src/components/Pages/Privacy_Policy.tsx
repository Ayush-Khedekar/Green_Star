import { useState } from "react";
import { motion } from "motion/react";
import frame from "../Images/Frame 1000003889.png";
type policyProps = {
  heading: string;
  paragraph: string;
  note?: string;
};

const Privacy_Policy = () => {
  const [policyData, _setPolicyData] = useState<policyProps[]>([
    {
      heading: "Privacy Policy",
      paragraph:
        "Green Star recognizes the expectations of its customers with regard to privacy, confidentiality and security of their personal information that resides with Green Star.This Privacy Policy provides you with details about the manner in which your data is collected, stored & used by us. You are advised to read this Privacy Policy carefully. By visiting Green Star website/WAP site/applications you expressly give us consent to use & disclose your personal information in accordance with this Privacy Policy. If you do not agree to the terms of the policy, please do not use or access Green Star website, WAP site or mobile applications.",
      note: "Note: Our privacy policy may change at any time without prior notification. To make sure that you are aware of any changes, kindly review the policy periodically. This Privacy Policy shall apply uniformly to Green Star desktop website, Green Star mobile WAP site &Green Star mobile applications",
    },
    {
      heading: "General",
      paragraph:
        "We will not sell, share or rent your personal information to any 3rd party or use your email address/mobile number for unsolicited emails and/or SMS. Any emails and/or SMS sent by Green Star will only be in connection with the provision of agreed services & products and this Privacy Policy.",
      note: "Periodically, we may reveal general statistical information about Green Star& its users, such as number of visitors, number and type of goods and services purchased, etc.We reserve the right to communicate your personal information to any third party that makes a legally-compliant request for its disclosure.",
    },
    {
      heading: "Personal Information",
      paragraph:
        " Personal Information means and includes all information that can be linked to a specific individual or to identify any individual, such as name, address, mailing address, telephone number, email ID, credit card number, cardholder name, card expiration date, information about your mobile phone, DTH service, data card, electricity connection, Smart Tags and any details that may have been voluntarily provide by the user in connection with availing any of the services on Green Star",
      note: "When you browse through Green Star, we may collect information regarding the domain and host from which you access the internet, the Internet Protocol [IP] address of the computer or Internet service provider [ISP] you are using, and anonymous site statistical data.",
    },
    {
      heading: "Cookies",
      paragraph:
        " A 'cookie' is a small piece of information stored by a web server on a web browser so it can be later read back from that browser. Green Star uses cookie and tracking technology depending on the features offered. No personal information will be collected via cookies and other tracking technology; however, if you previously provided personally identifiable information, cookies may be tied to such information. Aggregate cookie and tracking information may be shared with third parties.",
    },
    {
      heading: "Links to Other Sites",
      paragraph:
        " Our site links to other websites that may collect personally identifiable information about you. Green Star is not responsible for the privacy practices or the content of those linked websites.",
    },
    {
      heading: "Security",
      paragraph:
        "Green Star has stringent security measures in place to protect the loss, misuse, and alteration of the information under our control. Whenever you change or access your account information, we offer the use of a secure server. Once your information is in our possession we adhere to strict security guidelines, protecting it against unauthorized access.",
    },
    {
      heading: "Consent",
      paragraph:
        "By using Green Star and/or by providing your information, you consent to the collection and use of the information you disclose on Green Star in accordance with this Privacy Policy, including but not limited to your consent for sharing your information as per this privacy policy.",
    },
    {
      heading: "Communication",
      paragraph:
        " For any kind of communication, please write to support@Green Star.com",
      note: "Green Star is headquartered at:Mumbai",
    },
  ]);
  return (

    <div className="bg-slate-200">
      <motion.div
        className="px-8 py-15 flex flex-col gap-6 max-w-5xl mx-auto"
        initial="hidden"
        animate="visible"
      >
        {policyData.map((policy, i) => (
          <motion.div
            key={i}
            className="bg-slate-100 p-6 rounded-xl flex flex-col shadow-sm cursor-pointer"
            whileHover="hover"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            translate="yes"
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            layout
          >
            <div className="flex gap-3">
              <img
                src={frame}
                alt="Logo_Green_Star"
                className="w-[30px] h-[30px] items-start"
              />
              <motion.h2 className="text-lg font-semibold text-gray-700 mb-3 border-l-4 border-green-500 pl-4">
                {policy.heading}
              </motion.h2>
            </div>

            <div className="text-gray-600 leading-relaxed space-y-2 text-base">
              <p>{policy.paragraph}</p>
              {policy.note && (
                <p className="italic text-gray-500">{policy.note}</p>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

    </div>
  );
};

export default Privacy_Policy;
