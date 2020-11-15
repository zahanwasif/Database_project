import React from 'react'
import './Futsalfield.css';
const Futsalfield = (props) =>{
    return(
        <selection className="signin">
        <div className="signinContainer">
        <h1>Futsal Field Management</h1>
        <label>Field name</label>
        <input type ="text"/>
        <label>Location</label>
        <input type ="text"/>
        <label>Contact no</label>
        <input type ="text"/>
        <label>Number of fields</label>
        <input type ="text"/>
        <label>Booking rate</label>
        <input type ="text"/>
        <label>Email</label>
        <input type ="text"/>
        <label>Password</label>
        <input type ="text"/>
        <label>Confirm password</label>
        <input type ="text"/>
        <div className ="button">
        <button>Register</button>
        
        </div>
       
                    </div>
        </selection>
           )
      }


export default Futsalfield;