import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./Components/Home";
import { Theme } from "./Context/Theme";
import RenusagarPowerPlant from "./Components/RenusagarPowerPlant"
import Explore from "./Components/Explore";
import About from "./Components/About";
import PageNotFound from "./Components/PageNotFound";

function App() {
  const [isDark,setDark] = useState(false);
  const changetheme = ()=>{
    if (isDark == false){
      setDark(true)
    }else{
      setDark(false)
    }
  }
  return (
    <Theme.Provider value={[isDark,changetheme]}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/PowerPlant" element={<RenusagarPowerPlant />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/about" element={<About />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
    </Theme.Provider>
  );
}

export default App;
