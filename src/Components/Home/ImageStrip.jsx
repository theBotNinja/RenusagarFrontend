import React, { useContext } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Theme } from "../../Context/Theme";
import CaptionImages from "../UiElements/CaptionImages";

const images = [
  {image:"colony.jpeg",text : "Colony"},
  {image:"anparaview.jpg",text : "View from Renusagar"},
  {image:"thermalpower.webp",text : "Renusagar plant"},
  {image:"abic.jpeg",text : "ABIC Ground"},
  {image:"homesection.jpg",text : "Shiv Mandir"},
  {image:"plant.jpg",text : "Power plant view"},
  {image:"view.jpg",text : "Road to Madhuban park"},
];

const ImageStrip = () => {
  const { scrollY } = useScroll();
  const x = useTransform(scrollY, [0, 1000], [0, -800]); // scroll effect
  const [isDark, changetheme] = useContext(Theme);
  return (
    <div
      className={`w-[1000] md:block hidden p-2 SaveMeClass ${
        isDark ? "bg-neutral-900" : "bg-neutral-100"
      }`}
    >
      <motion.div className="flex space-x-4 px-6" style={{ x }}>
        {images.map((item, i) => (
          <motion.div
            key={i}
            className=" object-cover rounded-lg shadow-md"
          >
            <CaptionImages image={item.image} text = {item.text} height={"150px"} width={"300px"}></CaptionImages>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ImageStrip;
