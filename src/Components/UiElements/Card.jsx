import React, { useState } from "react";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";

export default function Card(props) {
  const [isHover, setHover] = useState(false);
  return (
    
    <motion.div
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      style={{
        backgroundImage: isHover
          ? `url(${props.image})`
          : `linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.5), rgba(0,0,0,0.8), rgba(0,0,0,1)), url(${props.image})`,
      }}
      className={`text-white bg-center magicbg bg-cover hover:border-gray-300 hover:cursor-pointer pt-25 pb-3 px-6 rounded-xl shadow-md hover:shadow-lg `}
      initial={{ scale: 1, y: 50 }}
      transition={{ type: "spring", duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      whileInView={{ y: 0 }}
    >
      <div className={`mb-4 ${isHover ? "opacity-50" : ""} `}>{props.icon}</div>
      <motion.h4
        className="text-xl font-semibold  mb-2"
        animate={{ opacity: isHover ? 0 : 1, y: isHover ? 40 : 0 }}
      >
        {props.title}
      </motion.h4>
      <motion.p
        className={`${isHover ? "opacity-0" : ""} text-gray-300 `}
        animate={{ opacity: isHover ? 0 : 1, y: isHover ? 40 : 0 }}
      >
        {props.description}
      </motion.p>
    </motion.div>
  );
}
