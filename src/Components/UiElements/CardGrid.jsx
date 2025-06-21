import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import FollowLinkbtn from "./FollowLinkbtn";

export default function CardGrid({ items, isDark }) {
  return (
    <div
      className={`${
        isDark ? " bg-neutral-900 text-white" : " bg-neutral-100 text-black"
      } grid md:grid-cols-3 gap-8`}
    >
      {items.map((item, i) => (
        <motion.div
          key={i}
          className={`${
            isDark ? " bg-black " : " bg-gray-300 "
          } rounded-xl flex items-start justify-between flex-col shadow-md p-6 hover:shadow-xl transition duration-300`}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1, type: "spring" }}
        >
          <div className="mb-4 mt-4">{item.icon}</div>
          <h4
            className={`text-xl font-semibold ${
              isDark ? "text-gray-50" : "text-gray-900"
            } mb-2`}
          >
            {item.name}
          </h4>
          <p className={isDark ? "text-gray-400" : "text-gray-600"}>
            {item.description}
          </p>
          
          <FollowLinkbtn link={item.link} text="check out"></FollowLinkbtn>
          
        </motion.div>
      ))}
    </div>
  );
}
