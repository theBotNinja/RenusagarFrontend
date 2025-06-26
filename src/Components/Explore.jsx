import React, { useContext } from "react";
import Navbar from "./UiElements/Navbar";
import Footer from "./UiElements/Footer";
import { Theme } from "../Context/Theme";
import { motion } from "framer-motion";
import ExploreCard from "./Explore/ExploreCard";

export default function Explore({touristAttractions}) {
  const [isDark, changetheme] = useContext(Theme);
  scrollY = 0
  return (
    
    <>
      <Navbar></Navbar>
      <section id="Exploretop"
        className={`${
          isDark ? "bg-neutral-900 text-white" : "bg-neutral-100 text-gray-800"
        } flex flex-col gap-6 items-center  p-8 justify-center`}
      >
        <h1 className="font-[Sacramento] text-7xl">Explore</h1>
        <div className="grid grid-cols-1 gap-8">
          {touristAttractions.map((item, i) => (
            <motion.div
              key= {i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ExploreCard
                key={i}
                title={item.name}
                para={item.description}
                btnLink={item.link}
                btnText={`See ${item.name}`}
                image={item.image}
              ></ExploreCard>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}
