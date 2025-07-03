import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, Outlet } from "react-router";
import Home from "./Components/Home";
import { Theme } from "./Context/Theme";
import RenusagarPowerPlant from "./Components/RenusagarPowerPlant";
import Explore from "./Components/Explore";
import { FaHiking } from "react-icons/fa";
import { MdTempleHindu, MdSportsSoccer, MdPark } from "react-icons/md";
import About from "./Components/About";
import PageNotFound from "./Components/PageNotFound";
import Department from "./Components/PowerPlant/Department";
import { useLocation } from "react-router";

function App() {
  const [isDark, setDark] = useState(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkThemeMq.matches) {
      return true;
    }
    return false;
  });
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const [touristAttractions, changetouristAttractions] = useState(Attractions);
  const [departments, changedepartment] = useState(departmentsData);
  const changetheme = () => {
    if (isDark == false) {
      setDark(true);
    } else {
      setDark(false);
    }
  };
  return (
    <Theme.Provider value={[isDark, changetheme]}>
      <Routes>
        <Route
          path="/"
          element={<Home touristAttractions={touristAttractions} />}
        />
        <Route
          path="/PowerPlant"
          element={<RenusagarPowerPlant depart={departments} />}
        />
        <Route
          path="/PowerPlant/:deptname"
          element={<Department depart={departments} />}
        />
        <Route
          path="/explore"
          element={<Explore touristAttractions={touristAttractions} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Theme.Provider>
  );
}

const departmentsData = {
  Accounts: {
    hodimage:"noimage.jpg",
    link: "Accounts",
    name: "Accounts",
    hod: "Navindra Pathak",
    desc: "Finance & Accounts",
  },
  APM: {
    hodimage:"noimage.jpg",
    link: "APM",
    name: "APM",
    hod: "Sandip Yewale",
    desc: "Ash Plant Maintenance",
  },
  ARW: {
    hodimage:"noimage.jpg",
    link: "ARW",
    name: "ARW",
    hod: "A. Sudhakar",
    desc: "Ariel Ropeway",
  },
  Autoshop: {
    hodimage:"noimage.jpg",
    link: "Autoshop",
    name: "Autoshop",
    hod: "Manish Singh",
    desc: "Autoshop maintenance",
  },
  BLR_Mnt: {
    hodimage:"noimage.jpg",
    link: "BLR_Mnt",
    name: "BLR Maintenance",
    hod: "Sanjay Srimali",
    desc: "Boiler Maintenance",
  },
  Canteen: {
    hodimage:"noimage.jpg",
    link: "Canteen",
    name: "Canteen",
    hod: "Ashok Kumar Dwivedi",
    desc: "Renusagar Canteen",
  },
  ChemiLab: {
    hodimage:"noimage.jpg",
    link: "ChemiLab",
    name: "Chemical Lab",
    hod: "Paltu Chatopadhyay Shivdani Yadav",
    desc: "Laboratory",
  },
  CHP_O: {
    hodimage:"noimage.jpg",
    link: "CHP_O",
    name: "CHP-O",
    hod: "Ashutosh Singh",
    desc: "Coal Handling Plant -Operations",
  },
  Civil: {
    hodimage:"noimage.jpg",
    link: "Civil",
    name: "Civil",
    hod: "Soumya Mishra",
    desc: "Civil Maintenance",
  },
  CMM: {
    hodimage:"noimage.jpg",
    link: "CMM",
    name: "CMM",
    hod: "Sandip Yewale",
    desc: "Coal Mill Maintenance",
  },
  Coal: {
    hodimage:"noimage.jpg",
    link: "Coal",
    name: "Coal Coordination",
    hod: "Bibhu Patra",
    desc: "Coal Sourcing Management Group",
  },
  Design: {
    hodimage:"noimage.jpg",
    link: "Design",
    name: "Design",
    hod: "Samit Anand",
    desc: "Design & Engineering",
  },
  Electrical: {
    hodimage:"noimage.jpg",
    link: "Electrical",
    name: "Electrical",
    hod: "Deepak Pandey",
    desc: "Electrical Maintenance",
  },
  GMM: {
    hodimage:"noimage.jpg",
    link: "GMM",
    name: "GMM",
    hod: "Manu Arora",
    desc: "General Mechanical Maintenance",
  },
  Guest_House: {
    hodimage:"noimage.jpg",
    link: "Guest_House",
    name: "Guest House",
    hod: "Ashok Kumar Dwivedi",
    desc: "Guest House",
  },
  HR: {
    hodimage:"noimage.jpg",
    link: "HR",
    name: "HR",
    hod: "Shailesh Vikram Singh",
    desc: "Human Resource",
  },
  Instrumentation: {
    hodimage:"noimage.jpg",
    link: "Instrumentation",
    name: "Instrumentation",
    hod: "Deepak Pandey",
    desc: "Instrument Maintenance",
  },
  IT: {
    hodimage:"noimage.jpg",
    link: "IT",
    name: "IT Department",
    hod: "Lalit Khurana",
    desc: "Information Technology Department",
  },
  OHC: {
    hodimage:"noimage.jpg",
    link: "OHC",
    name: "OHC",
    hod: "Anitha Thykadavil",
    desc: "Occupational Health Center",
  },
  Purchase: {
    hodimage:"noimage.jpg",
    link: "Purchase",
    name: "Purchase",
    hod: "Nisha Kumari",
    desc: "Purchase Department",
  },
  Sanitation: {
    hodimage:"noimage.jpg",
    link: "Sanitation",
    name: "Town Administration ",
    hod: "Satnam Singh",
    desc: "Town Administration , Sanitation & Horticulture",
  },
  Security: {
    hodimage:"noimage.jpg",
    link: "Security",
    name: "Security & FF",
    hod: "Satnam Singh",
    desc: "Security & Fire Fighting",
  },
  Store: {
    hodimage:"noimage.jpg",
    link: "Store",
    name: "Store",
    hod: "Om Prakash",
    desc: "Central Stores",
  },
  Technical: {
    hodimage:"noimage.jpg",
    link: "Technical",
    name: "Technical service",
    hod: "Nikhil Jain",
    desc: "Technical service",
  },
  timeoff: {
    hodimage:"noimage.jpg",
    link: "timeoff",
    name: "Time Off",
    hod: "Mridul Bhardwaj",
    desc: "Time Office",
  },
  Transport: {
    hodimage:"noimage.jpg",
    link: "Transport",
    name: "Transport",
    hod: "Mukesh Srivastava",
    desc: "Light Vehicle Transport ",
  },
  TTMDC: {
    hodimage:"noimage.jpg",
    link: "TTMDC",
    name: "TTMDC",
    hod: "Anil Sharma",
    desc: "Technical Training & Management Development Center",
  },
  TUR_Mnt: {
    hodimage:"noimage.jpg",
    link: "TUR_Mnt",
    name: "TUR Maintenance",
    hod: "Manu Arora",
    desc: "Turbine & Auxilaries Maintenance",
  },
  Workshop: {
    hodimage:"noimage.jpg",
    link: "Workshop",
    name: "Workshop",
    hod: "Manish Singh",
    desc: "Workshop maintenance",
  },
  CHP_M: {
    hodimage:"noimage.jpg",
    link: "CHP_M",
    name: "Coal Handling Plant -Maintenance",
    hod: "Manish Singh",
    desc: "Coal Handling Plant -Maintenance maintenance",
  },
};

const Attractions = [
  {
    name: "Madhuban Park",
    description: "Known for its musical fountain and evening light-sound show.",
    link: "https://maps.app.goo.gl/PG2y7w39e5R8gXfQ7",
    image: "park3.png",
    icon: <MdPark className="text-cyan-500 text-3xl" />,
  },
  {
    name: "Shiv Mandir",
    description:
      "Shiv mandir that is very close to renusagar, just a walk away.",
    link: "https://maps.app.goo.gl/rXyELxsmjnntAT6i9",
    image: "ShivMandir.png",
    icon: <FaHiking className="text-blue-700 text-3xl" />,
  },
  {
    name: "Ramlila Ground Anpara",
    description: "In festival season it host a fair, with amazing rides.",
    link: "https://maps.app.goo.gl/nXoUJc4GKDeBhNYd9",
    image: "RamlilaMaidanAnpara.png",
    icon: <MdPark className="text-blue-700 text-3xl" />,
  },
  {
    name: "Jwalamukhi Temple",
    description: "A local pilgrimage Hindu temple, ~11 km from town.",
    link: "https://maps.app.goo.gl/1W6HbZTfJTB1tAAX9",
    image: "jwala_temp.png",
    icon: <MdTempleHindu className="text-red-600 text-3xl" />,
  },
  {
    name: "Hanuman Mandir (AURI)",
    description: "Located within the Auri compound, a few km away.",
    link: "https://maps.app.goo.gl/pJJMa23VxrMw5ZZq6",
    image: "hanumanMandir.png",
    icon: <MdTempleHindu className="text-orange-500 text-3xl" />,
  },
  {
    name: "Bina Stadium",
    description: "Community stadium for local matches (~4.4 km away).",
    link: "https://maps.app.goo.gl/64PFujK3EEerVKAD7",
    image: "binaStadium.png",
    icon: <MdSportsSoccer className="text-purple-500 text-3xl" />,
  },

  {
    name: "Chilka Jheel",
    description: "Lake in the near by town.",
    link: "https://maps.app.goo.gl/e6Uu6vCjjUQSYWud6",
    image: "chilkaJheel.png",
    icon: <FaHiking className="text-blue-700 text-3xl" />,
  },
];

export default App;
