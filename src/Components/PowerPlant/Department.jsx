import React, { useContext } from "react";
import { useParams } from "react-router";
import Navbar from "../UiElements/Navbar";
import Footer from "../UiElements/Footer";
import { Theme } from "../../Context/Theme";

export default function Department() {
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
        } h-100 text-6xl text-center`}
      >
        {deptname}
      </div>
      <Footer></Footer>
    </>
  );
}
