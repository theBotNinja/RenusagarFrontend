import { React, useContext } from "react";
import { Theme } from "../../Context/Theme";
import { motion } from "framer-motion";
import LearnMoreBtn from "../UiElements/LearnMoreBtn";

export default function HeroSection({title,highlight,desc,btnText,btnLink,imageLink,bgimage}) {
  const [isDark, changetheme] = useContext(Theme);
  return (
    <section 
    style={{backgroundImage: isDark?`linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), 
              url(${bgimage})`:`linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)), 
              url(${bgimage})`}}
      className={`${
        isDark ? "bg-neutral-900 text-white" : "bg-neutral-100 text-gray-800"
      } flex items-center justify-center p-20 bg-cover bg-no-repeat bg-fixed bg-center  md:px-20`}
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1  space-y-6"
        >
          <h1
            className={`${
              isDark ? "text-gray-300" : "text-gray-700"
            } text-4xl md:text-6xl font-bold leading-tight`}
          >
            {title} <span className={`almendra ${isDark?"text-sky-300":"text-sky-600"}`}>{highlight}</span>
          </h1>
          <p
            className={`${
              isDark ? "text-gray-300" : "text-gray-600"
            } text-lg md:text-xl`}
          >{desc}
          </p>
          <LearnMoreBtn text={btnText} link={btnLink}></LearnMoreBtn>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 flex items-center justify-center"
        >
          <img
            src={imageLink}
            alt="image not found"
            className="w-75 h-auto mybg-new rounded-xl shadow-md"
          />
        </motion.div>
      </div>
    </section>
  );
}
