import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./Components/Home";
import { Theme } from "./Context/Theme";

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
    </Routes>
    </Theme.Provider>
  );
}

export default App;
