import React, { useContext } from "react";
import { useParams } from "react-router";
import Navbar from "../UiElements/Navbar";
import Footer from "../UiElements/Footer";
import { Theme } from "../../Context/Theme";
import { CgProfile } from "react-icons/cg";

export default function Department({depart}) {
  const [isDark, changetheme] = useContext(Theme);
  const { deptname } = useParams();
  return (
    <>
      <Navbar></Navbar>
      <div
        className={`${
          isDark
            ? "bg-neutral-950 text-neutral-300"
            : "bg-neutral-200 text-neutral-800"
        } p-14`}
      >

      <div
        className={`${
          isDark
            ? "bg-neutral-900 "
            : "bg-neutral-300 "
        } md:px-50 p-7 gap-7 border-neutral-400 border-2 rounded-lg text-center flex items-center justify-evenly flex-col`}
      >
        <h1 className={`${isDark?"text-neutral-100":"text-neutral-950"} md:text-5xl text-4xl font-bold`}>
          {depart[deptname].name}
        </h1>
        <h6 className={`${isDark?"text-neutral-50  bg-neutral-950":" text-neutral-950 bg-blue-50"} flex items-center justify-center md:text-lg text-md border-2 rounded-3xl border-neutral-400 p-4`}>
          <CgProfile size={30}></CgProfile>
          <span className="p-2">
           {depart[deptname].hod}
          </span>
         <span className={`${isDark?"bg-blue-950":"bg-blue-300"} font-bold rounded-2xl p-2`}>
          HoD
          </span>
        </h6>
        <p className="text-justify ">
          {depart[deptname].desc}
          </p>
      </div>
          </div>
      <Footer></Footer>
    </>
  );
}
