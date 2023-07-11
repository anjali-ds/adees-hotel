import React, { useState } from 'react';
import './home.css'
import { Carousel } from 'react-bootstrap'
import DatePicker from "react-datepicker";
import { FaAccusoft, FaCloudversify, FaCalendar, FaRegUser, FaChild, FaUserFriends } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { BsCalendar3 } from 'react-icons/bs'
import "react-datepicker/dist/react-datepicker.css";
function Home(props) {
  const [checkInDate, setcheckInDate] = useState(new Date());
  const [checkOutDate, setcheckOutDate] = useState(new Date());
  return (
    <div>

      <Carousel className='carousel '  >
        <Carousel.Item >
          <img
            className="d-block w-100"
            src="/img/adees/home (2).jpg"
            alt="First slide"
            height="600px"
          />
          <Carousel.Caption>
            <h3>ADEES HOTEL</h3>
            <p>Make your life Better &Bright ! You must trip with us.</p>
            <input type="submit" value="Book A Room" />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/adees/home (3).jpg"
            alt="Second slide"
            height="600px"
          />

          <Carousel.Caption>
            <h3 > ADEES HOTEL</h3>
            <p>Make your life Better & Bright ! You must trip with us.</p>
            <input type="submit" value="Book A Room" />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/adees/home.jpg"
            alt="Third slide"
            height="600px"
          />

          <Carousel.Caption>
            <h3>ADEES HOTEL</h3>

            <p>Make your life Better & Bright ! You must trip with us.</p>
            <input type="submit" value="Book A Room" />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>



      <div className="ad ">
        <div className="form">

          <form action="" className='homeform'>
            <div className="row">
              <div className="col-lg-3">
                <label htmlFor=""><BsCalendar3 />  Check-In</label>
                <DatePicker className='homedatepicker' selected={checkInDate} onChange={(date: Date) => setcheckInDate(date)} />
              </div>
              <div className="col-lg-3">
                <label htmlFor=""><BsCalendar3 />  Check-Out</label>
                <DatePicker className='homedatepicker' selected={checkOutDate} onChange={(date: Date) => setcheckOutDate(date)} />

              </div>
              <div className="col-lg-2">

                <label htmlFor=""><FiUsers /> Adults</label>
                <select name="" className='homeselect' id="">
                  <option value="">02</option>
                  <option value="">01</option>
                  <option value="">03</option>
                  <option value="">04</option>
                  <option value="">05</option>
                  <option value="">06</option>
                </select>
              </div>
              <div className="col-lg-2">
                <label htmlFor=""><FaChild /> Children</label>
                <select name="" className='homeselect' id="">

                  <option value="">01</option>
                  <option value="">02</option>
                  <option value="">03</option>
                  <option value="">04</option>


                </select>

              </div>
              <div className="col-lg-2">

                <input type="submit" className='homebutton' value="Check Availability" />
              </div>


            </div>


          </form>

        </div>

      </div>

      <div className="msal">
        <h1>abc</h1>
      </div>
    </div>
  );
}

export default Home;