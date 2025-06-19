import React, { useContext } from "react";
import { motion } from "framer-motion";
import { PiStudentBold } from "react-icons/pi";
import { FaSchool } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import { Theme } from "../Context/Theme";

const schools = [
  {
    name: "Aditya Birla Junior School",
    description: "Hindi-medium primary school (Grades 1–5).",
    icon: <FaSchool className="text-red-500 text-3xl" />,
  },
  {
    name: "Aditya Birla Intermediate College",
    description: "Hindi-medium higher secondary (Grades 6–12).",
    icon: <IoSchoolSharp className="text-yellow-500 text-3xl" />,
  },
  {
    name: "Aditya Birla Public School",
    description: "English-medium CBSE school (LKG – Grade 12).",
    icon: <PiStudentBold className="text-blue-500 text-3xl" />,
  },
];

const EducationSection = () => {
    const  [isDark,changetheme] = useContext(Theme)
  return (
    <section className={`${isDark?" bg-black text-white": " text-black bg-white "} py-16 px-6 md:px-20  text-gray-800`}>
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Education in Renusagar
          </h2>
          <p className={`${isDark?"text-gray-300": "text-gray-600"} text-lg max-w-2xl mx-auto`}>
            Renusagar’s schools are run by the Aditya Birla (Hindalco) group for employees’ families. These
            institutions provide quality education from early grades to higher secondary levels.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {schools.map((school, index) => (
            <motion.div
              key={index}
              className= {`${isDark?"bg-gray-950 shadow-gray-800 hover:border-gray-300 ":"hover:border-gray-700  bg-gray-200 shadow-gray-300"} border-2 border-transparent hover:border-amber-50 rounded-xl shadow-2xl p-6 hover:shadow-transparent transition-shadow duration-300`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.3, type: "spring" }}
            >
              <div className="mb-4">{school.icon}</div>
              <h4 className="text-xl font-semibold mb-2 ">
                {school.name}
              </h4>
              <p className={`${isDark?"text-gray-300":"text-gray-600"}`}>{school.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={`mt-12 text-center text-md ${isDark?"text-gray-300":"text-gray-700"}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p>
            For higher education, students may explore options in nearby citys like Varanasi and
            Robertsganj.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EducationSection;
