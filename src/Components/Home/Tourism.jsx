import { motion } from "framer-motion";
import React from 'react'
import { Theme } from "../../Context/Theme";
import { useContext } from "react";
import { Link } from "react-router";
import CardGrid from "../UiElements/CardGrid";


export default function Tourism({touristAttractions}) {
  const [isDark, changetheme] = useContext(Theme);
  return (
    
      <motion.div
        className={` py-16 px-6 md:px-30 ${
        isDark ? "bg-neutral-900 text-white " : " bg-neutral-100 text-black "
      } flex items-center justify-center flex-col`}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Explore Near by places</h2>
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
        <Link to="/explore" className={`${isDark?" border-neutral-800 hover:bg-neutral-800":" border-neutral-300 hover:bg-neutral-300"} active:scale-95 hover:scale-105 transition border-2 rounded-lg m-4 px-4 py-2`}>more</Link>
      </motion.div>
  );
};

