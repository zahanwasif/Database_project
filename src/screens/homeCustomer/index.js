import React from "react";
import "./styles.css";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Link from "react-router-dom/Link";

const HomeCustomer = () => {
   var items = [
      { id: 1, name: "A", location: "LAhorqwdk", rate: 140 },
      { id: 2, name: "B", location: "21232tk", rate: 12321 },
      {
         id: 3,
         name: "C",
         location: "211242232tk",
         rate: 400,
      },
      { id: 4, name: "D", location: "aksdhasj", rate: 1000 },
      {
         id: 5,
         name: "E",
         location: "12yuedjskbja",
         rate: 91273,
      },
      {
         id: 6,
         name: "F",
         location: "askdljaskdlkl",
         rate: 1000,
      },
   ];
   var slots = [
      {
         from: "11:00",
         to: "12:00",
      },
      {
         from: "12:00",
         to: "01:00",
      },
      {
         from: "01:00",
         to: "02:00",
      },
      {
         from: "03:00",
         to: "04:00",
      },
      {
         from: "04:00",
         to: "05:00",
      },
   ];

   const [value, setValue] = React.useState("");
   const [location, setLocation] = React.useState("");
   const [rate, setRate] = React.useState("");

   const handleSelect = async (i) => {
      setValue(i);
      var item = await items.find((k) => {
         return k.id === parseInt(i);
      });
      setLocation(item.location);
      setRate(item.rate);
   };

   const handleText = (i) => {
      setValue(i.target.value);
   };
   const [check1, setCheck1] = React.useState(false);
   const [check2, setCheck2] = React.useState(false);

   const checkbox1 = () => {
      items = [
         ...items.sort(function (a, b) {
            var nameA = a.name.toUpperCase();
            var nameB = b.name.toUpperCase();
            if (nameA < nameB) {
               return -1;
            }
            if (nameA > nameB) {
               return 1;
            }
            return 0;
         }),
      ];

      console.log(items);
      setCheck1(true);
      setCheck2(false);
   };

   const checkbox2 = () => {
      items = [
         ...items.sort(function (a, b) {
            return a.rate - b.rate;
         }),
      ];
      setCheck2(true);
      setCheck1(false);
   };

   const [timings, setTimings] = React.useState("");

   const handleTimings = (i) => {
      setTimings(i);
   };

   return (
      <div className="container">
         <div className="boxcontainer">
            <div className="filter">
               <Form className="form">
                  <Form.Group controlId="formBasicCheckbox" className="check">
                     <Form.Check
                        onChange={checkbox1}
                        checked={check1}
                        type="checkbox"
                        label="Order by Name"
                     />
                  </Form.Group>
                  <Form.Group controlId="formBasicCheckbox" className="check">
                     <Form.Check
                        type="checkbox"
                        label="Order by Rate"
                        checked={check2}
                        onChange={checkbox2}
                     />
                  </Form.Group>
               </Form>
            </div>
            <div className="item">
               <Form className="box">
                  <Form.Group
                     controlId="exampleForm.ControlSelect1"
                     className="box"
                  >
                     <Form.Label className="box">Select the field</Form.Label>
                     <Form.Control
                        as="select"
                        onChange={(ref) => handleSelect(ref.target.value)}
                        className="contain"
                     >
                        <option value="" hidden />

                        {items.map((i, key) => (
                           <option value={i.id} key={key}>
                              {i.name} {i.location} {i.rate}
                           </option>
                        ))}
                     </Form.Control>
                  </Form.Group>

                  <Form.Group
                     controlId="exampleForm.ControlTextarea1"
                     className="box"
                  >
                     <Form.Label className="box">Date</Form.Label>
                     <Form.Control
                        as="input"
                        value={value}
                        onChange={handleText}
                        className="contain"
                        maxLength={10}
                        placeholder="MM/DD/YYYY"
                     />
                  </Form.Group>
                  <Form.Group
                     controlId="exampleForm.ControlSelect1"
                     className="box"
                  >
                     <Form.Label className="box">Select timings</Form.Label>
                     <Form.Control
                        as="select"
                        onChange={(ref) => handleTimings(ref.target.value)}
                        className="contain"
                     >
                        <option value="" hidden />
                        {slots.map((i, key) => (
                           <option value={i.id} key={key}>
                              From {i.from} to {i.to}
                           </option>
                        ))}
                     </Form.Control>
                  </Form.Group>
               </Form>
               <div className="lol">
                  <div>
                     <Link to="/" style={{ textDecoration: "none" }}>
                        <div className="bob">Proceed</div>
                     </Link>
                  </div>
                  <div>
                     <Link
                        to="/current-bookings"
                        style={{ textDecoration: "none" }}
                     >
                        <div className="bob">Active Bookings</div>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default HomeCustomer;
