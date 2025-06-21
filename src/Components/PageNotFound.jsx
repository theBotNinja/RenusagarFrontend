import React, { useContext } from "react";
import { Theme } from "../Context/Theme";
import Navbar from "./UiElements/Navbar";
import Footer from "./UiElements/Footer";

export default function PageNotFound() {
  const [isDark, changetheme] = useContext(Theme);
  return (
    <>
      <Navbar></Navbar>
      <div className={`${isDark?"bg-neutral-900 text-gray-100":"bg-neutral-100 text-black"} flex items-center justify-center flex-col h-dvh`}>
        <h1 className="font-[Sacramento] text-9xl">404</h1>
        <p className="almendra font-bold text-5xl">PageNotFound</p>
      </div>
      <Footer></Footer>
    </>
  );
}
