import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HeroImg2 from "../components/HeroImg2";
import PrincingCard from "../components/PrincingCard";
import Word from "../components/Work";

function Project() {
  return (
    <>
      <Navbar />
      <HeroImg2 heading="PROJECTS." text="Some of any most recents word" />
      <Word />
      <PrincingCard />
      <Footer />
    </>
  );
}
export default Project;
