

import React from 'react';
 import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link,
   useRouteMatch,
   useParams
 } from "react-router-dom";
import Login from "./Login";
import Futsalfield from "./Futsalfield";
import Signin from "./signin";
import Usertype from "./Usertype";

const App = () => {
  return (
    <Router>
			<div>
				<Switch>
					<Route exact path='/' component={Login} />
					<Route exact path='/ownersignup' component={Futsalfield} />
					<Route exact path='/signup' component={Signin} />
					<Route exact path='/usertype' component={Usertype} />
				</Switch>
			</div>
		</Router>
  );
};

export default App;
