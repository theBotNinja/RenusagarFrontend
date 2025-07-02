import React, { useContext } from "react";
import { motion } from "framer-motion";
import { CiShoppingTag } from "react-icons/ci";
import { FaComputer } from "react-icons/fa6";
import {
  MdSecurity,
  MdFoodBank,
  MdOutlineSanitizer,
  MdOutlineDesignServices,
  MdElectricBolt,
} from "react-icons/md";
import {
  FaTools,
  FaMoneyBillWave,
  FaCogs,
  FaStoreAlt,
  FaCarAlt,
} from "react-icons/fa";
import { BsBuildingsFill } from "react-icons/bs";
import { IoFastFoodOutline } from "react-icons/io5";
import { IoIosTimer } from "react-icons/io";
import { CgSelectR } from "react-icons/cg";
import { SlChemistry } from "react-icons/sl";
import { GiTeacher, GiCoalPile, GiHumanPyramid } from "react-icons/gi";
import { GrVmMaintenance, GrHostMaintenance, GrTools } from "react-icons/gr";
import { Theme } from "../../Context/Theme";
import { Link } from "react-router";


const DepartmentSection = ({depart}) => {
  const listdepart = Object.values(depart)
  const [isDark, changetheme] = useContext(Theme);
  return (
    <section
      className={`min-h-screen px-6 py-16 ${
        isDark ? "bg-neutral-900 text-white" : "bg-neutral-100 text-black"
      } bg-gray-900 text-white`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="text-4xl font-bold text-blue-500 mb-4">
          Departments at Renusagar Power Plant
        </h2>
        <p
          className={`${
            isDark ? "text-gray-300" : "text-gray-600"
          } max-w-3xl mx-auto`}
        >
          The Renusagar Power Plant comprises 31 essential departments, each
          playing a key role in the plant’s reliable and efficient operation.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {listdepart.map((dept, idx) => {
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.03, duration: 0.3 }}
              className={`${
                isDark
                  ? "bg-neutral-950 text-white hover:bg-neutral-800"
                  : "bg-neutral-200 text-black hover:bg-neutral-300"
              } rounded-2xl p-5 shadow-lg hover:scale-105 transition-all`}
            ><Link to={dept.link}>
              <div className="flex items-center gap-4">
                {dept.icon}
                <h3 className="text-lg font-semibold">{dept.name}</h3>
              </div>
            </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default DepartmentSection;
