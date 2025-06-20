import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { CiHome, CiHospital1, CiShoppingCart } from "react-icons/ci";
import { FaBus, FaTree } from "react-icons/fa";
import { IoMdWifi } from "react-icons/io";
import { Theme } from "../Context/Theme";
import Card from "./UiElements/Card";

const facilities = [
  {
    bgimage: "colony.jpeg",
    icon: <CiHome className="text-red-500 w-6 h-6" />,
    title: "Housing & Civic Amenities",
    description:
      "Planned residential colonies with proper roads, sanitation, and utilities, maintained by Hindalco’s civic authority.",
  },
  {
    bgimage: "OIP.webp",
    icon: <CiShoppingCart className="text-yellow-500 w-6 h-6" />,
    title: "Shops & Commerce",
    description:
      "Local market meets daily needs. For larger purchases, residents visit Renukoot or Anpara.",
  },
  {
    bgimage: "OIP.webp",
    icon: <CiHospital1 className="text-blue-500 w-6 h-6" />,
    title: "Healthcare",
    description:
      "Primary care available via local clinics. Major hospitals are located in Renukoot and Robertsganj.",
  },
  {
    bgimage: "OIP.webp",
    icon: <IoMdWifi className="text-red-500 w-6 h-6" />,
    title: "Post & Telecom",
    description:
      "Sub-post office (PIN 231218), STD code 05446, and internet by BSNL, Jio, and others ensure connectivity.",
  },
  {
    bgimage: "OIP.webp",
    icon: <FaBus className="text-yellow-500 w-6 h-6" />,
    title: "Transportation",
    description:
      "Renusagar is well connected by road and nearby rail access points in Renukoot and Anpara.",
  },
  {
    bgimage: "park3.png",
    icon: <FaTree className="text-blue-500 w-6 h-6" />,
    title: "Recreation",
    description:
      "Parks, playgrounds, sports grounds, and cultural clubs provide an active and healthy lifestyle.",
  },
];

const FacilitiesSection = () => {
  const [isDark, changetheme] = useContext(Theme);
  return (
    <section
      className={`${
        isDark ? "bg-neutral-900 text-white " : "bg-white text-black "
      } py-16 px-6 md:px-20`}
    >
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
          <p
            className={`${isDark ? "text-gray-300" : "text-gray-600"} text-lg`}
          >
            A glimpse into Renusagar's civic setup, connectivity, and daily life
            comforts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {facilities.map((item, idx) => (
            <Card
              key={idx}
              image={item.bgimage}
              title={item.title}
              description={item.description}
              icon={item.icon}
            ></Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FacilitiesSection;
