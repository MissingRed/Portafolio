import React from "react";
import "../css/Home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Portfolio = (props) => {
  return (
    <>
      {props.active === false ? "" : <Navbar />}
      <div className="containerProjects">
        <ul>
          <li className="select">Todos</li>
          <li>React</li>
          <li>Angular</li>
          <li>Backend</li>
        </ul>
      </div>
      <div className="project-grid containerProjects">
        <a href="#">
          <div className="item">
            <span className="emoji">LOGO</span>

            <div className="item-hover">
              <p>Code Shop</p>
              <span className="tag">Ir al Sitio Web</span>
            </div>
          </div>
        </a>
        <a href="#">
          <div className="item">
            <span className="emoji">LOGO</span>

            <div className="item-hover">
              <p>Code Shop</p>
              <span className="tag">Ir al Sitio Web</span>
            </div>
          </div>
        </a>
        <a href="#">
          <div className="item">
            <span className="emoji">LOGO</span>

            <div className="item-hover">
              <p>Code Shop</p>
              <span className="tag">Ir al Sitio Web</span>s
            </div>
          </div>
        </a>
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
