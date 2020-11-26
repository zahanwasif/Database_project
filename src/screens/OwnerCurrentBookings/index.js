import React from "react";

import "./styles.css";

const OwnerActive = () => {
   const items = [
      {
         id: 1,
         customer: "A",
         fieldName: "LAhorqwdk",
         time: 140,
         date: "12/04/2020",
      },
      {
         id: 2,
         customer: "B",
         fieldName: "21232tk",
         time: 12321,
         date: "12/04/2020",
      },
      {
         id: 3,
         customer: "C",
         fieldName: "211242232tk",
         time: 400,
         date: "12/04/2020",
      },
      {
         id: 4,
         customer: "D",
         fieldName: "aksdhasj",
         time: 1000,
         date: "12/04/2020",
      },
      {
         id: 5,
         customer: "E",
         fieldName: "12yuedjskbja",
         time: 91273,
         date: "12/04/2020",
      },
      {
         id: 6,
         customer: "F",
         fieldName: "askdljaskdlkl",
         time: 1000,
         date: "12/04/2020",
      },
   ];

   return (
      <div className="container">
         <h1>Active Bookings</h1>
         {items.map((i) => (
            <div className="item">
               <div>
                  <div>Customer Name : {i.customer}</div>
                  <div>Field Name : {i.fieldName}</div>
                  <div className="zahn">
                     <div>Timings : {i.time}</div>
                     <div>Date : {i.date}</div>
                  </div>
               </div>
            </div>
         ))}
      </div>
   );
};

export default OwnerActive;
