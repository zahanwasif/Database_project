import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const OwnerHome = () => {
   return (
      <div className="container">
         <div className="boxcontainer">
            <div className="buttonContainer">
               <Link to="/current-bookings" style={{ textDecoration: "none" }}>
                  <div className="menu">Current Bookings</div>
               </Link>
               <Link to="/" style={{ textDecoration: "none" }}>
                  <div className="menu">Past Bookings</div>
               </Link>
               <Link to="/" style={{ textDecoration: "none" }}>
                  <div className="menu">Edit Profile</div>
               </Link>
               <Link to="/" style={{ textDecoration: "none" }}>
                  <div className="menu">Log out</div>
               </Link>
            </div>
         </div>
      </div>
   );
};
export default OwnerHome;
