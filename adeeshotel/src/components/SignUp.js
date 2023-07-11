import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import axios from "axios";
import './signup.css'
import { OverlayTrigger } from 'react-bootstrap';
function SignUp(props) {
  const { register, handleSubmit, trigger, watch, formState: { errors } } = useForm({
    mode: 'onTouched'
  });
  const [username, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setconfirmPassword] = useState("");
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [age, setAge] = useState("");
  const [dob, setdob] = useState("");
  const [gender, setGender] = useState("Male");
  const [contact, setContact] = useState("");
  const navigate = useNavigate();
  const passwords = watch('password')
  const onSubmit = async () => {
    console.log(username, email, password, age, Fname, Lname, confirmpassword, dob, contact, gender);
    let result = await fetch('http://localhost:5000/Sign', {
      method: 'post',
      body: JSON.stringify({ username, email, password, age, Fname, Lname, confirmpassword, dob, contact, gender }),
      headers: {
        'content-Type': 'application/json',


      },

    });
    result = await result.json();
    console.log(result);
    localStorage.setItem('user', JSON.stringify(result.result));
    localStorage.setItem('token', JSON.stringify(result.auth));
    navigate('/');
  }
  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
      navigate('/')
    }
  }, [])

  // const Data = async () => {
  //   console.log(username, email, password, age, Fname, Lname, confirmpassword, dob, contact, gender);
  //   let result = await fetch('http://localhost:5000/Sign', {
  //     method: 'post',
  //     body: JSON.stringify({ username, email, password, age, Fname, Lname, confirmpassword, dob, contact, gender }),
  //     headers: {
  //       'content-Type': 'application/json',


  //     },

  //   });
  //   result = await result.json();
  //   console.log(result);
  //   localStorage.setItem('user', JSON.stringify(result.result));
  //   localStorage.setItem('token', JSON.stringify(result.auth));
  //   navigate('/');
  // }
  // eye ka khel
  const [eye, seteye] = useState(false)
  const handleeye = () => {
    seteye(!eye)
  }
  return (
    <div className="signupmain">
      <div className="signup">
        <div className="signuphead">
        <h2>SIGN UP</h2>
        </div>
      </div>
      <div className="signupform col-lg-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="signuplabel col-lg-12">
              <label htmlFor="">
                First Name:
              </label>
            </div>
            <div className="signupinput col-lg-12">


              <input type="text" {...register("Fname", { required: "true", maxLength: 20 })}
                value={Fname} onChange={(e) => setFname(e.target.value)} placeholder="Enter First name" className="input" /> <br />
              {errors.Fname && (<small className='signupsmall '>This field is required</small>)}
            </div>
            <div className="signuplabel col-lg-12">
              <label htmlFor="">
                Last Name:
              </label>
            </div>
            <div className="signupinput col-lg-12">


              <input type="text" {...register("Lname", { required: true, maxLength: 20 })}
                value={Lname} onChange={(e) => setLname(e.target.value)} placeholder="Enter Last name" className="input" /> <br />
               {errors.Lname && (<small className='signupsmall '>This field is required</small>)}
            </div>
            <div className="signuplabel col-lg-12">
              <label htmlFor="">
                Username:
              </label>
            </div>
            <div className="signupinput col-lg-12">
              <input type="text" value={username}{...register("username", { required: "This field is required", maxLength: 20 })} onChange={(e) => setuserName(e.target.value)} placeholder="Enter User Name" className="input" /> <br />
               {errors.username && (<small className='signupsmall '>This field is required</small>)}
            </div>
            <div className="signuplabel col-lg-12">
              <label htmlFor="">
                Email:
              </label>
            </div>
            <div className="signupinput col-lg-12">


              <input type="text" {...register("email",
                {
                  required: "Email is required",
                  pattern: {
                    value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "please enter a valid email"
                  }
                })}
                value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" className="input" o /> <br />
               {errors.email && (<small className='signupsmall '>{errors.email.message}</small>)}
            </div>
            <div className="signuplabel col-lg-12">
              <label htmlFor="">
                Contact No.
              </label>
            </div>
            <div className="signupinput col-lg-12">


              <input type="text" {...register("contact", {
                required: "This field is required", pattern: {
                  value: /^[0-9]*$/,
                  message: "only numbers are allowed"
                }, minLength: { value: 10, message: "invalid contact number" }
              })}
                value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Enter mobile number" className="input" /> <br />
               {errors.contact && (<small className='signupsmall '>{errors.contact.message}</small>)}
            </div>
            <div className="signuplabel col-lg-12">
              <label htmlFor="">
                Password:
              </label>
            </div>
            <div className="signupinput col-lg-12">
              <div className="row">
              <div className="signuppass col-lg-12">
              <input type={(eye === false) ? 'password' : "text"} {...register("password", {
                required: "this field is required",
                maxLength: 20
              })} value={password} onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password" className="input" />
                
              <div className="signupeye">{(eye === false) ? <AiFillEyeInvisible onClick={handleeye}>

              </AiFillEyeInvisible>
                :
                <AiFillEye onClick={handleeye}></AiFillEye>}
              </div>
              </div><br />
               {errors.password && (<small className='signupsmall '>{errors.password.message}</small>)}
              </div>
            </div>
            <div className="signuplabel col-lg-12">
              <label htmlFor="">
                Confirm Password:
              </label>
            </div>
            <div className="signupinput col-lg-12">

              <input type="password" {...register("confirmpassword", {
                required: "this field is required", maxLength: 20, validate: (value) =>
                  value === passwords || "the password should be same"
              })} value={confirmpassword} onChange={(e) => setconfirmPassword(e.target.value)} placeholder="Confirm Password" className="input" /> <br />
               {errors.confirmpassword && (<small className='signupsmall '>{errors.confirmpassword.message}</small>)}

            </div>

            <div className="signuplabel col-lg-12">
              <label htmlFor="">
                Age:
              </label>
            </div>
            <div className="signupinput col-lg-12">


              <input type="text" value={age}{...register("age", { required: "age is required", min: { value: 15, message: "you are not 15" }, pattern: { value: /^[0-9]*$/, message: "only numbers are allowed" } })} onChange={(e) => setAge(e.target.value)} placeholder="Enter age" className="input" /> <br />
               {errors.age && (<small className='signupsmall '>{errors.age.message}</small>)}
            </div>
            <div className="signuplabel col-lg-12">
              <label htmlFor="">
                Date Of Birth:
              </label>
            </div>
            <div className="signupinput col-lg-12">


              <input type="date" value={dob} onChange={(e) => setdob(e.target.value)} placeholder="Enter date of birth" className="input" />

            </div>
            <div className="signuplabel col-lg-12">
              <label htmlFor="">
                Gender:
              </label>
            </div>
            <div className="signupinput col-lg-12">


              <select




                onChange={(e) => setGender(e.target.value)}
                className="genderopt" id='genderopti'>

                <option selected value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Transgender">Transgender</option>


              </select>
            </div>
            <div className="signupbutton col-lg-12">
            <input type="submit" value="Signup" />
              {/* <button className=" btn btn-primary" onClick={Data}>Sign Up</button> */}
            </div>
            
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;