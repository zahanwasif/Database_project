import React from "react";

import "./styles.css";

const ActiveBooking = () => {
   const items = [
      {
         id: 1,
         name: "A",
         location: "LAhorqwdk",
         rate: 140,
         date: "12/04/2020",
      },
      {
         id: 2,
         name: "B",
         location: "21232tk",
         rate: 12321,
         date: "12/04/2020",
      },
      {
         id: 3,
         name: "C",
         location: "211242232tk",
         rate: 400,
         date: "12/04/2020",
      },
      {
         id: 4,
         name: "D",
         location: "aksdhasj",
         rate: 1000,
         date: "12/04/2020",
      },
      {
         id: 5,
         name: "E",
         location: "12yuedjskbja",
         rate: 91273,
         date: "12/04/2020",
      },
      {
         id: 6,
         name: "F",
         location: "askdljaskdlkl",
         rate: 1000,
         date: "12/04/2020",
      },
   ];

   return (
      <div className="container">
         <h1>Active Bookings</h1>
         {items.map((i) => (
            <div className="item">
               <div>
                  <div>Field Name : {i.name}</div>
                  <div>Location : {i.location}</div>
                  <div className="zahn">
                     <div>Rate : {i.rate}</div>
                     <div>Date : {i.date}</div>
                  </div>
               </div>
            </div>
         ))}
      </div>
   );
};

export default ActiveBooking;
