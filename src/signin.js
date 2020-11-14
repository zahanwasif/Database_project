import React from 'react'
import './signup.css';
const Signin = (props) =>{
    return(
        <selection className="signin">
        <div className="signinContainer">
        <h1>Futsal Field Management</h1>
        <label>First name</label>
        <input type ="text"/>
        <label>Last name</label>
        <input type ="text"/>
        <label>Contact no</label>
        <input type ="text"/>
        <label>Email Address</label>
        <input type ="text"/>
        <label>Password</label>
        <input type ="text"/>
        <label>Confirm password</label>
        <input type ="text"/>
        <div className ="button">
        <button>Sign up</button>
        
        </div>
       
                    </div>
        </selection>
           )
      }


export default Signin;