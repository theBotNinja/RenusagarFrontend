import { React, useContext } from "react";
import { Theme } from "../Context/Theme";
import { motion } from "framer-motion";
import LearnMoreBtn from "./UiElements/LearnMoreBtn";

export default function HeroSection() {
  const [isDark, changetheme] = useContext(Theme);
  return (
    <section
      className={`${
        isDark ? "bg-black text-white" : "bg-white text-gray-800"
      } flex items-center justify-center p-20  md:px-20`}
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <motion.div
        initial={{opacity:0,x:-100}}
        whileInView={{opacity:1,x:0}}
        
        transition={{duration:0.7}}
        className="flex-1  space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Welcome to <span className="almendra text-blue-500">Renusagar</span>
          </h1>
          <p className="text-lg md:text-xl ">
            is a small township in the southern part of Sonbhadra district,
            Uttar Pradesh, India . It was built around Hindalco’s Renusagar
            Power Plant – a coal-fired captive station set up by the Birla group
            in 1967.
          </p>
          <LearnMoreBtn text="Learn more"></LearnMoreBtn>
        </motion.div>

        {/* Image */}
        <motion.div
        initial={{opacity:0,x:100}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:0.7}}
        className="flex-1 flex items-center justify-center">
          <img
            src="hindalco_logo.png"
            alt="image not found"
            className="w-75 h-auto rounded-xl shadow-md"
          />
        </motion.div>
      </div>
    </section>
  );
}
