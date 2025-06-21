import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Theme } from "../../Context/Theme";
import LearnMoreBtn from "../UiElements/LearnMoreBtn";

const IndustrySection = () => {
  const [isDark, changetheme] = useContext(Theme);
  return (
    <section
      className={`${
        isDark ? "bg-neutral-900 text-white" : " bg-neutral-100 text-black "
      } py-16 px-6 md:px-16`}
    >
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            Economy & Industry
          </h2>
          <p
            className={`${isDark ? "text-gray-300" : "text-gray-600"} text-lg`}
          >
            Renusagar thrives on the power of industry – centered around
            Hindalco’s operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Content Block */}
          <motion.div
            className="space-y-5"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold ">
              Hindalco’s Renusagar Power Plant
            </h3>
            <ul
              className={`${
                isDark ? "text-gray-300" : "text-gray-600"
              } list-disc list-inside  space-y-2`}
            >
              <li>
                <strong>~887 MW</strong> coal-fired plant built in 1967.
              </li>
              <li>
                Supplies electricity to{" "}
                <strong>Renukoot Aluminium Smelter</strong> (35 km away).
              </li>
              <li>Backbone of local employment & economy.</li>
              <li>
                Extensive coal mining in the nearby Singrauli-Sonbhadra
                region.
              </li>
            </ul>
            <LearnMoreBtn text="Visit Industry"></LearnMoreBtn>
          </motion.div>

          {/* Image Block */}
          <motion.div
            className="rounded-lg overflow-hidden shadow-lg"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              src="mainplant.jpeg"
              alt="Renusagar Power Plant"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default IndustrySection;
