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

const departments = [
  {
    icon: <FaMoneyBillWave size={25} color="rgb(80,80,200)" />,
    name: "Accounts",
    link: "Accounts",
  },
  {
    icon: <FaCogs size={25} color="rgb(80,80,200)" />,
    name: "APM",
    link: "APM",
  },
  {
    icon: <FaCogs size={25} color="rgb(80,80,200)" />,
    name: "ARW",
    link: "ARW",
  },
  {
    icon: <FaTools size={25} color="rgb(80,80,200)" />,
    name: "Autoshop",
    link: "Autoshop",
  },
  {
    icon: <GrVmMaintenance size={25} color="rgb(80,80,200)" />,
    name: "BLR Maintenance",
    link: "BLR_Mnt",
  },
  {
    icon: <IoFastFoodOutline size={25} color="rgb(80,80,200)" />,
    name: "Canteen",
    link: "Canteen",
  },
  {
    icon: <SlChemistry size={25} color="rgb(80,80,200)" />,
    name: "Chemical Lab",
    link: "ChemiLab",
  },
  {
    icon: <FaCogs size={25} color="rgb(80,80,200)" />,
    name: "CHP-O",
    link: "CHP-O",
  },
  {
    icon: <BsBuildingsFill size={25} color="rgb(80,80,200)" />,
    name: "Civil",
    link: "Civil",
  },
  {
    icon: <FaCogs size={25} color="rgb(80,80,200)" />,
    name: "CMM",
    link: "CMM",
  },
  {
    icon: <GiCoalPile size={25} color="rgb(80,80,200)" />,
    name: "Coal Coordination",
    link: "Coal",
  },
  {
    icon: <MdOutlineDesignServices size={25} color="rgb(80,80,200)" />,
    name: "Design",
    link: "Design",
  },
  {
    icon: <MdElectricBolt size={25} color="rgb(80,80,200)" />,
    name: "Electrical",
    link: "Electrical",
  },
  {
    icon: <FaCogs size={25} color="rgb(80,80,200)" />,
    name: "GMM",
    link: "GMM",
  },
  {
    icon: <MdFoodBank size={25} color="rgb(80,80,200)" />,
    name: "Guest House",
    link: "Guest_House",
  },
  {
    icon: <GiHumanPyramid size={25} color="rgb(80,80,200)" />,
    name: "HR",
    link: "HR",
  },
  {
    icon: <CgSelectR size={25} color="rgb(80,80,200)" />,
    name: "Instrumentation",
    link: "Instrumentation",
  },
  {
    icon: <FaComputer size={25} color="rgb(80,80,200)" />,
    name: "IT Department",
    link: "IT",
  },
  {
    icon: <FaCogs size={25} color="rgb(80,80,200)" />,
    name: "OHC",
    link: "OHC",
  },
  {
    icon: <CiShoppingTag size={25} color="rgb(80,80,200)" />,
    name: "Purchase",
    link: "Purchase",
  },
  {
    icon: <MdOutlineSanitizer size={25} color="rgb(80,80,200)" />,
    name: "Sanitation",
    link: "Sanitation",
  },
  {
    icon: <MdSecurity size={25} color="rgb(80,80,200)" />,
    name: "Security & FF",
    link: "Security",
  },
  {
    icon: <FaStoreAlt size={25} color="rgb(80,80,200)" />,
    name: "Store",
    link: "Store",
  },
  {
    icon: <FaCogs size={25} color="rgb(80,80,200)" />,
    name: "Technical service",
    link: "Technical",
  },
  {
    icon: <IoIosTimer size={25} color="rgb(80,80,200)" />,
    name: "Time Off",
    link: "timeoff",
  },
  {
    icon: <FaCarAlt size={25} color="rgb(80,80,200)" />,
    name: "Transport",
    link: "Transport",
  },
  {
    icon: <GiTeacher size={25} color="rgb(80,80,200)" />,
    name: "TTMDC",
    link: "TTMDC",
  },
  {
    icon: <GrHostMaintenance size={25} color="rgb(80,80,200)" />,
    name: "TUR Maintenance",
    link: "TUR_Mnt",
  },
  {
    icon: <GrTools size={25} color="rgb(80,80,200)" />,
    name: "Workshop",
    link: "Workshop",
  },
];

const DepartmentSection = () => {
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
        {departments.map((dept, idx) => {
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
