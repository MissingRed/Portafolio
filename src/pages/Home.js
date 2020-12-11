import React from "react";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";

import "../css/Home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="site-content">
        <div className="containerHome">
          <h1 className="title-center">
            HOLA MUNDO
            <span className="parpadea text">
              <strong>|</strong>
            </span>
          </h1>
        </div>
        <Portfolio active={false} />
      </div>
    </>
  );
};

export default Home;
