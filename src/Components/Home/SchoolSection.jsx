import React, { useContext } from "react";
import { motion } from "framer-motion";
import { PiStudentBold } from "react-icons/pi";
import { FaSchool } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import { Theme } from "../../Context/Theme";

const schools = [
  {
    name: "Renupower Primary School",
    description: "Hindi-medium primary school (Grades 1–5).",
    icon: "school.png",link:"https://adityabirlaschools.co.in/abjs-renusagar/"
  },
  {
    name: "Aditya Birla Intermediate College",
    description: "Hindi-medium higher secondary (Grades 6–12).",
    icon: "ABIC-RENUSAGAR-PHOTOGRAPH.jpg",link:"https://adityabirlaschools.co.in/abic-renusagar/"
  },
  {
    name: "Aditya Birla Public School",
    description: "English-medium CBSE school (LKG – Grade 12).",
    icon: "abps.jpg",link:"https://adityabirlaschools.co.in/abps-renusagar/"
  },
];

const SchoolSection = () => {
  const [isDark, changetheme] = useContext(Theme);
  return (
    <section id="EducationSectionId"
      className={`${
        isDark ? " bg-neutral-900 text-white" : " text-black bg-neutral-100 "
      } py-16 px-6 md:px-20  text-gray-800`}
    >
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Education in Renusagar</h2>
          <p
            className={`${
              isDark ? "text-gray-300" : "text-gray-600"
            } text-lg max-w-2xl mx-auto`}
          >
            Renusagar’s schools are run by the Aditya Birla (Hindalco) group for
            employees’ families. These institutions provide quality education
            from early grades to higher secondary levels.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {schools.map((school, index) => (
            <motion.div onClick={()=>{open(school.link)}}
              key={index}
              className={`${
                isDark
                  ? "bg-black shadow-neutral-700  hover:border-neutral-300 "
                  : "hover:border-neutral-700  bg-gray-300 hover:bg-gray-200 shadow-gray-200"
              } border-2 hover:cursor-pointer border-transparent hover:border-amber-50 rounded-xl shadow-2xl p-6 hover:shadow-transparent flex items-center justify-between flex-col transition-shadow duration-300`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{scale:1.05}}
              transition={{delay: .1, duration: 0.3, type: "spring" }}
            >
              <div className="mb-4 rounded-lg bg-cover bg-center bg-no-repeat w-70 h-35 " style={{backgroundImage:
                isDark?`linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.1), rgba(0,0,0,0.5), rgba(0,0,0,1)),
                url(${school.icon})`:`
                url(${school.icon})`}}></div>
              <h4 className="text-xl font-semibold mb-2 ">{school.name}</h4>
              <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
                {school.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={`mt-12 text-center text-md ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p>
            For higher education, students may explore options in nearby citys
            like Varanasi and Robertsganj.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SchoolSection;
