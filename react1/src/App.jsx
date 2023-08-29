import { useState } from 'react'
import './App.css'


const App = () => {

   return (
     <>
      <div className="box">
        <form action="">
          <h2>Sign in </h2>
          <div className="inputbox">
           <input type="text" required/>
           <span>Username</span>
            <i></i>
          </div>
          <div className="inputbox">
           <input type="Password" required/>
           <span>Enter Password</span>
           <i></i>
          </div>
          {/* <a href="Page.jsx"> */}
            <input type="submit" value="Login"/>
            {/* </a> */}
          <div className="links">
           <a href="#">Forgot Password?</a>
           <a href="#">SignUp</a>
          </div>

        </form>
      </div> 
    </>    
 );    

};

export default App




  

