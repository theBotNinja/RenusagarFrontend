import { motion } from "framer-motion";
import { FaTree, FaMonument, FaHiking, FaSwimmer } from "react-icons/fa";
import { MdTempleHindu, MdSportsSoccer } from "react-icons/md";
import { Theme } from "../../Context/Theme";
import { useContext } from "react";
import CardGrid from "../UiElements/CardGrid";

const touristAttractions = [
  {
    name: "Madhuban Park",
    description: "Known for its musical fountain and evening light-sound show.",
    link: "https://maps.app.goo.gl/PG2y7w39e5R8gXfQ7",
    image: "OIP.webp",
    icon: <FaMonument className="text-cyan-500 text-3xl" />,
  },

  {
    name: "Jwalamukhi Temple",
    description: "A local pilgrimage Hindu temple, ~11 km from town.",
    link: "https://maps.app.goo.gl/1W6HbZTfJTB1tAAX9",
    image: "OIP.webp",
    icon: <MdTempleHindu className="text-red-600 text-3xl" />,
  },
  {
    name: "Hanuman Mandir (AURI)",
    description: "Located within the Auri compound, a few km away.",
    link: "https://maps.app.goo.gl/pJJMa23VxrMw5ZZq6",
    image: "OIP.webp",
    icon: <MdTempleHindu className="text-orange-500 text-3xl" />,
  },
  {
    name: "Bina Stadium",
    description: "Community stadium for local matches (~4.4 km away).",
    link: "https://maps.app.goo.gl/64PFujK3EEerVKAD7",
    image: "OIP.webp",
    icon: <MdSportsSoccer className="text-purple-500 text-3xl" />,
  },
  {
    name: "Kakri Ground",
    description: "Cricket and sports field (~1.2 km from town).",
    link: "404",
    image: "OIP.webp",
    icon: <FaHiking className="text-blue-700 text-3xl" />,
  },
  {
    name: "NTPC Lake Park (Vindhyachal)",
    description: "Lakeside park with boating, ~17 km away.",
    link: "404",
    image: "OIP.webp",
    icon: <FaSwimmer className="text-teal-600 text-3xl" />,
  },
];
import React from 'react'

export default function Tourism() {
  const [isDark, changetheme] = useContext(Theme);
  return (
    <section
      className={`min-h-screen py-16 px-6 md:px-20 ${
        isDark ? "bg-neutral-900 text-white " : " bg-neutral-100 text-black "
      }`}
    >
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Explore Renusagar</h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              isDark ? "text-gray-400" : "text-gray-600"
            } `}
          >
            surrounded by cultural and scenic spots perfect for weekend getaways
            and leisure.
          </p>
        </div>

        <CardGrid isDark={isDark} items={touristAttractions} />
      </motion.div>
    </section>
  );
};

