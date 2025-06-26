import React, { useContext } from "react";
import { Theme } from "../../Context/Theme";
import { motion } from "framer-motion";

export default function ExploreCard({ title, para, btnText, btnLink,image }) {
  const [isDark, changetheme] = useContext(Theme);
  return (
    <div
      className={`${
        isDark ? "bg-neutral-950" : "bg-gray-300"
      } rounded-lg flex flex-col md:flex-row items-center justify-baseline p-8 `}
    >
      <div style={{backgroundImage:`url(${image})`}} className="w-100 h-50 bg-center bg-cover rounded-lg"></div>
      <div className="flex items-start justify-around flex-col p-4 gap-4">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p
          className={`${
            isDark ? "text-neutral-300" : "text-neutral-700"
          } text-justify`}
        >
          {para}
        </p>
        <motion.button
          className={`${
            isDark
              ? "bg-yellow-700 hover:bg-yellow-500 hover:scale-105 active:scale-95 transition "
              : "bg-yellow-500 hover:bg-yellow-600 hover:scale-105 active:scale-95 transition "
          } text-white p-2  rounded-lg`}
          onClick={() => {
            open(btnLink);
          }}
        >
          {btnText}
        </motion.button>
      </div>
    </div>
  );
}
