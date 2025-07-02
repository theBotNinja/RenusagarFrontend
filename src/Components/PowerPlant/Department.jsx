import React, { useContext } from "react";
import { useParams } from "react-router";
import Navbar from "../UiElements/Navbar";
import Footer from "../UiElements/Footer";
import { Theme } from "../../Context/Theme";


export default function Department({depart}) {
  const [isDark, changetheme] = useContext(Theme);
  const { deptname } = useParams();
  return (
    <>
      <Navbar></Navbar>
      <div
        className={`${
          isDark
            ? "bg-neutral-900 text-neutral-100"
            : "bg-neutral-100 text-neutral-900"
        } h-100 border-2 text-center flex items-center justify-center gap-6 flex-col`}
      >
        <h1 className="text-6xl">
          {depart[deptname].name}
        </h1>
        <h6 className="text-3xl">
          {depart[deptname].hod}
        </h6>
        <p>
          {depart[deptname].desc}
        </p>
      </div>
      <Footer></Footer>
    </>
  );
}
