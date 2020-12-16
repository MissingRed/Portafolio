import React from "react";
import "../css/Home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Cv = () => {
  return (
    <>
      <Navbar />
      <div className="containerCv">
        <img src="Images/CV_DANIELRF.png" alt="Hoja_vida" className="cv" />
      </div>
      <Footer />
    </>
  );
};

export default Cv;
