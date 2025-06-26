import React, { useContext } from "react";
import Navbar from "./UiElements/Navbar";
import Footer from "./UiElements/Footer";
import { Theme } from "../Context/Theme";
import { motion } from "framer-motion";
import { FaCode, FaGithub, FaMapMarkedAlt } from "react-icons/fa";
export default function About() {
  const [isDark, changetheme] = useContext(Theme);
  return (
    <>
      <Navbar></Navbar>
      <section
        id="AboutId"
        className={`${
          isDark
            ? "bg-neutral-900 text-gray-200"
            : "bg-neutral-100 text-gray-700"
        } py-12 px-10 md:px-75 `}
      >
        {/* About Renusagar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2
            className={`text-4xl font-bold flex items-center gap-2 ${
              isDark ? " text-white " : " text-black"
            } `}
          >
            About Renusagar
          </h2>
          <p className=" text-justify">
            <strong>Renusagar</strong> is a serene and self-sufficient township
            located in the <strong>Sonbhadra district of Uttar Pradesh</strong>,
            known for housing the <strong>Renusagar Power Plant</strong>,
            operated by <strong>Hindalco Industries</strong> (Aditya Birla
            Group).
          </p>
          <p className="text-justify">
            This plant plays a vital role in supplying electricity to Hindalco's
            aluminum operations in Renukoot. Renusagar is a well-planned
            community with excellent residential, educational, healthcare, and
            recreational facilities, making it a model township.
          </p>
          <p className="text-justify">
            Renusagar lies at about 24.18°N 82.79°E (elevation ≈450m) in the
            forested, hilly terrain of southern Sonbhadra. It is situated near
            the Rihand River valley: the Govind Ballabh Pant Sagar.
          </p>
          <p className="text-justify">
            Apart from the plant, the rest of Renusagar is a middle-class
            residential community managed by Hindalco's civic authority . In a
            broader context, Sonbhadra district is an industrial and mining zone
            (bauxite, coal, limestone, etc.) often called the “Energy Capital of
            India” due to its many large power projects.
          </p>
        </motion.div>

        {/* About This Website */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 space-y-6"
        >
          <h2
            className={`${
              isDark ? "text-white" : "text-black"
            } text-3xl font-bold flex items-center gap-2`}
          >
            <FaMapMarkedAlt className="text-blue-400" /> About This Website
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li className="">Its history and significance</li>
            <li className="">
              The functioning and importance of the power plant
            </li>
            <li className="">Education facilities</li>
            <li className="">Healthcare infrastructure</li>
            <li className="">Tourist attractions and local highlights</li>
            <li className="">Community life and civic amenities</li>
          </ul>
          <p className=" text-justify">
            Whether you're a visitor, a resident, or simply curious, this site
            is your guide to exploring everything Renusagar has to offer.
          </p>
        </motion.div>

        {/* Developer Note */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 space-y-6"
        >
          <h2
            className={`${
              isDark ? "text-white" : "text-black"
            } text-3xl font-bold flex items-center gap-2`}
          >
            <FaCode className="text-indigo-400" /> Developer Note
          </h2>
          <p className="">
            This website was{" "}
            <strong>
              designed, and front-end developed by me,
            </strong>{" "}
            <a
              href="https://www.linkedin.com/in/devansh-joshi-12a036234/"
              className={
                isDark
                  ? "text-blue-400 underline hover:text-blue-300"
                  : "text-blue-600 underline hover:text-blue-500"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              Devansh Joshi
            </a>
            , during my Intership period at Hindalco Renusagar. It reflects my passion for web
            development and showcasing meaningful local places through
            technology.
          </p>
          <p className=" flex items-center gap-2">
            <FaGithub className={isDark ? "text-white" : "text-black"} />
            <a
              href="https://github.com/theBotNinja/RenusagarFrontend"
              className={
                isDark
                  ? "text-blue-400 underline hover:text-blue-300"
                  : "text-blue-600 underline hover:text-blue-500"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/theBotNinja/RenusagarFrontend
            </a>
          </p>
        </motion.div>
      </section>

      <Footer></Footer>
    </>
  );
}
