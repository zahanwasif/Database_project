import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signin from "./signin";
import signupOwner from "./signupOwner";
import SignupCustomer from "./signupCustomer";
import Usertype from "./usertype";
import NavBar from "../components/navigation";
import HomeCustomer from "./homeCustomer";
import "bootstrap/dist/css/bootstrap.min.css";
import ActiveBooking from "./activeBooking";
import OwnerActive from "./OwnerCurrentBookings";

import OwnerHome from "./ownerHome";

const App = () => {
   const [user, setUser] = React.useState(true);
   const [isOwner, setIsOwner] = React.useState(true);

   return user ? (
      isOwner ? (
         <React.Fragment>
            <Router>
               <NavBar />
               <Switch>
                  <Route exact path="/" component={OwnerHome} />
                  <Route
                     exact
                     path="/current-bookings"
                     component={OwnerActive}
                  />
               </Switch>
            </Router>
         </React.Fragment>
      ) : (
         <React.Fragment>
            <Router>
               <NavBar />
               <Switch>
                  <Route exact path="/" component={HomeCustomer} />
                  <Route
                     exact
                     path="/current-bookings"
                     component={ActiveBooking}
                  />
               </Switch>
            </Router>
         </React.Fragment>
      )
   ) : (
      <React.Fragment>
         <Router>
            <div>
               <Switch>
                  <Route exact path="/" component={Signin} />
                  <Route exact path="/ownersignup" component={signupOwner} />
                  <Route exact path="/signup" component={SignupCustomer} />
                  <Route exact path="/usertype" component={Usertype} />
               </Switch>
            </div>
         </Router>
      </React.Fragment>
   );
};

export default App;
