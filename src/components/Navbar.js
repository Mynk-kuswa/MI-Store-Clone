import React from "react";
import "../styles/Navbar.css";
import ExpandNavbar from "./ExpandNavbar.js"
import { Link } from "react-router-dom";
import {  Routes, Route } from "react-router-dom";



const searchIcon = <svg xmlns="http://www.w3.org/2000/svg" height="35" width="35" ><path d="M39.8 41.95 26.65 28.8Q25.15 30.1 23.15 30.825Q21.15 31.55 18.9 31.55Q13.5 31.55 9.75 27.8Q6 24.05 6 18.75Q6 13.45 9.75 9.7Q13.5 5.95 18.85 5.95Q24.15 5.95 27.875 9.7Q31.6 13.45 31.6 18.75Q31.6 20.9 30.9 22.9Q30.2 24.9 28.8 26.65L42 39.75ZM18.85 28.55Q22.9 28.55 25.75 25.675Q28.6 22.8 28.6 18.75Q28.6 14.7 25.75 11.825Q22.9 8.95 18.85 8.95Q14.75 8.95 11.875 11.825Q9 14.7 9 18.75Q9 22.8 11.875 25.675Q14.75 28.55 18.85 28.55Z" /></svg>

const Navbar = ({ navbar }) => {

  return (
    <div className="nav">

    {/* ------------------------Upper Navbar ------------------------ */}
      <div className="upperNavbar" >
        <div className="logo">
          <Link to="#">
            <img id="logoImage" src={`https://i01.appmifile.com/webfile/globalimg/pandora/mi-logo.svg`} alt="not" />
          </Link>
        </div>


        
        <Link to="/miphones" className="navlinks">Mi Phones</Link>
        <Link to="/redmiphones" className="navlinks">Redmi Phones</Link>
        <Link to="/tv" className="navlinks">TV</Link>
        <Link to="/laptops" className="navlinks">Laptops</Link>
        <Link to="/lifestyle" className="navlinks">Fitness & Lifestyle</Link>
        <Link to="/home" className="navlinks">Home</Link>
        <Link to="/audio" className="navlinks">Radio</Link>
        <Link to="/accessories" className="navlinks">Accessories</Link>

        <div className="searchbox">
          <input type="text" name="search" placeholder="Search Products" />
          {searchIcon}
        </div>
      </div>

{/* ---------------------------Expanded Navbar --------------------- */}


      <div className="expandNav" id="expandNav">
      <Routes>
          <Route exact path="/miphones" element={<ExpandNavbar
            category={navbar.miPhones}
          />}>
          </Route>
          <Route exact path="/redmiphones" element={<ExpandNavbar
            category={navbar.redmiPhones}
          />}>
          </Route>
          <Route exact path="/tv" element={<ExpandNavbar
            category={navbar.tv}
          />}>
          </Route>
          <Route exact path="/laptops" element={<ExpandNavbar
            category={navbar.laptops}
          />}>
          </Route>
          <Route exact path="/lifestyle" element={<ExpandNavbar
            category={navbar.fitnessAndLifeStyle}
          />}>
          </Route>
          <Route exact path="/home" element={<ExpandNavbar
            category={navbar.home}
          />}>
          </Route>
          <Route exact path="/audio" element={<ExpandNavbar
            category={navbar.audio}
          />}>
          </Route>
          <Route exact path="/accessories" element={<ExpandNavbar
            category={navbar.accessories}
          />}>
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default Navbar;
