import React, { useContext } from "react";
import { motion } from "framer-motion";
import { CiHome,CiHospital1,CiShoppingCart   } from "react-icons/ci";
import { FaBus,FaTree  } from "react-icons/fa";
import { IoMdWifi } from "react-icons/io";
import { Theme } from "../Context/Theme";

const facilities = [
  {bgimage:"hover:bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('colony.jpeg')]",
    icon:<CiHome className="text-red-500 w-6 h-6" />,
    title: "Housing & Civic Amenities",
    description:
      "Planned residential colonies with proper roads, sanitation, and utilities, maintained by Hindalco’s civic authority.",
  },
  {bgimage:"hover:bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('OIP.webp')]",
    icon: <CiShoppingCart className="text-yellow-500 w-6 h-6" />,
    title: "Shops & Commerce",
    description:
      "Local market meets daily needs. For larger purchases, residents visit Renukoot or Anpara.",
  },
  {bgimage:"hover:bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('OIP.webp')]",
    icon: <CiHospital1 className="text-blue-500 w-6 h-6" />,
    title: "Healthcare",
    description:
      "Primary care available via local clinics. Major hospitals are located in Renukoot and Robertsganj.",
  },
  {bgimage:"hover:bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('OIP.webp')]",
    icon: <IoMdWifi className="text-red-500 w-6 h-6" />,
    title: "Post & Telecom",
    description:
      "Sub-post office (PIN 231218), STD code 05446, and internet by BSNL, Jio, and others ensure connectivity.",
  },
  {bgimage:"hover:bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('OIP.webp')]",
    icon: <FaBus className="text-yellow-500 w-6 h-6" />,
    title: "Transportation",
    description:
      "Renusagar is well connected by road and nearby rail access points in Renukoot and Anpara.",
  },
  {bgimage:"hover:bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('park3.png')]",
    icon: <FaTree className="text-blue-500 w-6 h-6" />,
    title: "Recreation",
    description:
      "Parks, playgrounds, sports grounds, and cultural clubs provide an active and healthy lifestyle.",
  },
];

const FacilitiesSection = () => {
  const [isDark,changetheme] = useContext(Theme)
  return (
    <section className= {`${isDark?"bg-black text-white ":"bg-white text-black "} py-16 px-6 md:px-20`}>
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold  mb-4 flex items-center justify-center gap-2">
            
            Local Facilities & Infrastructure
          </h2>
          <p className="text-lg ">
            A glimpse into Renusagar’s civic setup, connectivity, and daily life comforts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {facilities.map((item, idx) => (
            <motion.div
              key={idx}
              className={`${isDark?"bg-gray-900":"bg-gray-200"}  ${item.bgimage} bg-center hover:text-white bg-cover pt-25 pb-3 px-6 rounded-xl shadow-md hover:shadow-lg transition`}
              initial={{scale:1 }}
              
              transition={{ duration: 0.02}}
              whileHover={{scale:1.1}}
            >
              <div className="mb-4">{item.icon}</div>
              <h4 className="text-xl font-semibold  mb-2">{item.title}</h4>
              <p className="">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FacilitiesSection;
