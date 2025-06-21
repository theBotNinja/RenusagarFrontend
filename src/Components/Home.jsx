import React, { useContext } from "react";
import { Theme } from "../Context/Theme";
import Navbar from "./UiElements/Navbar";
import Footer from "./UiElements/Footer";
import HeroSection from "./Home/HeroSection";
import FacilitiesSection from "./Home/FacilitiesSection";
import ImageStrip from "./Home/ImageStrip";
import IndustrySection from "./Home/IndustrySection";
import SchoolSection from "./Home/SchoolSection";
import Tourism from "./Home/Tourism";
export default function Home() {
  const [isDark, changetheme] = useContext(Theme);
  return (
    <>
      <div className={isDark ? "bg-neutral-900" : "bg-neutral-100"}>
        <Navbar></Navbar>
        <HeroSection
          title={"Welcome to"}
          highlight={"Renusagar"}
          desc={`is a small township in the southern part of Sonbhadra district,
            Uttar Pradesh, India . It was built around Hindalco’s Renusagar
            Power Plant – a coal-fired captive station set up by the Birla group
            in 1967.`}
          btnText={"Learn more"}
          btnLink={"/"}
          imageLink={"hindalco_logo.png"}
        ></HeroSection>
        <ImageStrip></ImageStrip>
        <IndustrySection></IndustrySection>
        <FacilitiesSection></FacilitiesSection>
        <SchoolSection></SchoolSection>
        <Tourism></Tourism>
        <Footer></Footer>
      </div>
    </>
  );
}
