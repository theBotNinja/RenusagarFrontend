import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./Components/Home";
import { Theme } from "./Context/Theme";
import RenusagarPowerPlant from "./Components/RenusagarPowerPlant";
import Explore from "./Components/Explore";
import { FaMonument, FaHiking } from "react-icons/fa";
import { MdTempleHindu, MdSportsSoccer, MdPark } from "react-icons/md";
import About from "./Components/About";
import PageNotFound from "./Components/PageNotFound";
import Department from "./Components/PowerPlant/Department";

function App() {
  const [isDark, setDark] = useState(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkThemeMq.matches) {
      return true;
    }
    return false;
  });
  const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
  console.log(darkThemeMq);
  const [touristAttractions, changetouristAttractions] = useState(Attractions);
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
        <Route path="/PowerPlant" element={<RenusagarPowerPlant />} />
        <Route path="/PowerPlant/:deptname" element={<Department />} />
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
    description: "Shiv mandir that is very close to renusagar, just a walk away.",
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
