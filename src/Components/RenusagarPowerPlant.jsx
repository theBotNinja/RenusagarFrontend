import React from "react";
import Navbar from "./UiElements/Navbar";
import Footer from "./UiElements/Footer";
import HeroSection from "./Home/HeroSection";
import DepartmentSection from "./PowerPlant/DepartmentSection";
import Certification from "./PowerPlant/Certification";

export default function RenusagarPowerPlant() {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection
        title={"Power plant"}
        highlight={"Renusagar"}
        desc={
          `operated by the Hindalco Industries and gives power to the smelter 
          , Renukoot for production of aluminium.
           It has an installed capacity of ~801.57 MW and it has 10 generating units of various capacities.`
        }
        btnText={"Learn More"}
        btnLink={"/"}
        imageLink={"road.jpg"}
      ></HeroSection>
      <DepartmentSection />
      <Certification></Certification>
      <Footer></Footer>
    </>
  );
}
