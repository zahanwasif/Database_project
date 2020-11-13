//import logo from './logo.svg';
import fire from "./fire";
import React, {useState, useEffect} from "react";
import './App.css';
import Login from "./Login";
import Hero from "./Hero";
const App = () => {

  const [user, setUser] = useState (""); //User State
  const [email, setEmail] = useState ("");  // Email state
  const [password, setPassword] = useState ("") ; //Pass State
  const [emailError,setEmailError] = useState ("") ; //Email Error state
  const [passwordError, setPasswordError] =useState ("") ; //Password Error state
  const [hasAccount, setHasAccount] = useState (false); //Help us switch from sign in to sign up

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  }
  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");

  }
  const handleLogin = () => {
    
    clearErrors();
  fire
    .auth()
    .signInWithEmailAndPassword(email,password)
    .catch((err) => {
      switch (err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError("The email is invalid");
          break;
        case "auth/wrong-password":
          setPasswordError(err.message);
          break;

      }
    });
  };
  const handleSignup = () => {
    clearErrors();
    fire
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .catch((err) => {
      switch (err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(err.message);
          break;
        case "auth/wrong-password":
          setPasswordError(err.message);
          break;

      }
    });  
  };
  const handleLogout = () => {
    fire.auth().signOut();
  };
  const authListner = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user){
        clearInputs();
        setUser(user);
      }
      else {
        setUser("");

      }
    });
  };
  useEffect(() => {
    authListner();
  }, []);

  return (
    <div className="App">
    {
      user ? (
        <Hero handleLogout = {handleLogout}/>
      ) : (
        <Login 
        email={email} 
        setEmail={setEmail} 
        password ={password} 
        setPassword = {setPassword} 
        handleLogin = {handleLogin}
        handleSignup = {handleSignup}
        hasAccount = {hasAccount}
        setHasAccount = {setHasAccount}
        emailError = {emailError}
        passwordError = {passwordError}
        />
      )
    }
     
    </div>
  );
};

export default App;
