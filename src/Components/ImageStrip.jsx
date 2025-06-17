import React, { useContext } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Theme } from "../Context/Theme";

const images = [
  "colony.jpeg",
  "anparaview.jpg",
  "thermalpower.webp",
  "abic.jpeg",
  "homesection.jpg",
  "plant.jpg",
  "view.jpg",
];

const ImageStrip = () => {
  const { scrollY } = useScroll();
  const x = useTransform(scrollY, [0, 800], [0, -500]); // scroll effect
  const [isDark,changetheme] = useContext(Theme)
  return (
    <div className={`w-[2000px] p-2  ${isDark?"bg-black": "bg-white"}`} >
      <motion.div
        className="flex space-x-4 px-6"
        style={{ x }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Scroll ${i}`}
            className="w-[300px] h-[150px] object-cover rounded-lg shadow-md"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ImageStrip;
