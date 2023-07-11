import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './login.css'
import { Link, useNavigate } from 'react-router-dom'
function Login(props) {
  const [email, setEmail] = React.useState("");
  const [username, setusername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);

  const login = async () => {
    console.log(email, password,username);
    let result = await fetch("http://localhost:5000/Sign", {
      method: "post",
      body: JSON.stringify({ email, password ,username }),
      headers: {
        "content-Type": "application/json",

      }
    });
    result = await result.json();
    console.log(result);
    localStorage.setItem("user", JSON.stringify(result.result));
    localStorage.setItem("token", JSON.stringify(result.auth));
    navigate("/");
  };
  return (
    <div className="loginpage">
      <div className='loginhigh' >
        <div className="loginhere col-lg-5">
      <h2 className='loginhead'>LOGIN</h2>
        <div className='loginbody'>
        
          <form action="" className='loginform'>
            <div className="row">
            {/* <div className="col-lg-12"> */}
              {/* <div className="loginlabel col-lg-6">
                <label htmlFor="">Email:</label>
              </div> */}
              <div className="logininput col-lg-12">
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email"
                  className="input"
                />
              </div>
            {/* </div> */}
            {/* <div className="col-lg-12"> */}
              {/* <div className="loginlabel col-lg-6">
                <label htmlFor="">Password:</label>
              </div> */}
              <div className="logininput col-lg-12">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                  className="input"
                />
              </div>
            </div>
            <div className="loginbutton col-lg-12" >
              <button  onClick={login}>
                Login
              </button>
              
            </div>
            <div className="loginor col-lg-12">
            <h4>OR</h4>
            </div>
            <div className="loginbutton col-lg-12" >
              <button  > <Link to="/signup">SignUp</Link> </button>
            </div>
            {/* </div> */}
          </form>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Login;