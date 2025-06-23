import React, { useContext } from "react";
import Navbar from "./UiElements/Navbar";
import Footer from "./UiElements/Footer";
import { Theme } from "../Context/Theme";
import { motion } from "framer-motion";
import ExploreCard from "./Explore/ExploreCard";

const listOfPlaces = [
  {
    title: "Madhuban Park",
    para: `Known for its musical fountain and evening light-sound show.`,
    btnText: "btnText",
    btnLink: "https://maps.app.goo.gl/PG2y7w39e5R8gXfQ7",
    image: "park3.png",
  },
  {
    title: "Madhuban Park",
    para: `Known for its musical fountain and evening light-sound show.`,
    btnText: "btnText",
    btnLink: "https://maps.app.goo.gl/PG2y7w39e5R8gXfQ7",
    image: "park3.png",
  },
  {
    title: "Madhuban Park",
    para: `Known for its musical fountain and evening light-sound show.`,
    btnText: "btnText",
    btnLink: "https://maps.app.goo.gl/PG2y7w39e5R8gXfQ7",
    image: "park3.png",
  },
  {
    title: "Madhuban Park",
    para: `Known for its musical fountain and evening light-sound show.`,
    btnText: "btnText",
    btnLink: "https://maps.app.goo.gl/PG2y7w39e5R8gXfQ7",
    image: "park3.png",
  },
  
];

export default function Explore() {
  const [isDark, changetheme] = useContext(Theme);
  return (
    <>
      <Navbar></Navbar>
      <section
        className={`${
          isDark ? "bg-neutral-900 text-white" : "bg-neutral-100 text-gray-800"
        } flex flex-col gap-6 items-center  p-8 justify-center`}
      >
        <h1 className="font-[Sacramento] text-7xl">Explore</h1>
        <div className="grid grid-cols-1 gap-8">
          {listOfPlaces.map((item, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
            >
              <ExploreCard
                key={idx}
                title={item.title}
                para={item.para}
                btnLink={item.btnLink}
                btnText={item.btnText}
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
