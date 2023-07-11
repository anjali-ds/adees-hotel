import logo from './logo.svg';
// import bootstrap from 'bootstrap';
import './App.css';
import{ useNavigate} from 'react-router-dom';
import React, { useState } from 'react';
// import { Button } from 'react-bootstrap';
import {BrowserRouter as Router, Routes,Route, Link} from 'react-router-dom'
import { Button ,Navbar ,Container,Nav ,NavDropdown ,Form ,FormControl } from 'react-bootstrap';
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';
import SignUp from './components/SignUp';
import Login from './components/login';

function App() {
  
  const auth = localStorage.getItem('user');
  // const navigate = useNavigate();
  const logout = ()=>{
    localStorage.clear();
    window.location.href = '/';
    // navigate('/signup');
  }
  const [bar,setbar]=useState(false);
  const [user, setLoginuser]=useState({})
  const changeBackground =()=>{
    if(window.scrollY>=100){
      setbar(true)
    }else{
      setbar(false)
    }
  }
  window.addEventListener('scroll',changeBackground)
  return (
    <>
    <Router>
      <Navbar  expand="lg" sticky ='top'  className={bar ?'navbar active':'navbar'}>
  <Container fluid>
    <Navbar.Brand href="/">Adees Hotel</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
    
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px'   }}
        navbarScroll
      >
        <Nav.Link className='NavLink' href="/">Home</Nav.Link>
        <Nav.Link href="/about">About Us</Nav.Link>
        <Nav.Link href="/contact">Contact Us</Nav.Link>
        
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
      </Nav>

      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
      {auth ? 
      <Nav>
       
        <Nav.Link href="/login" onClick={logout}>logout {JSON.parse(auth).Fname}</Nav.Link> 
        </Nav>
        :
      <Nav>
      <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/signup">Sign Up</Nav.Link> 
      </Nav>
      }
    </Navbar.Collapse>
  </Container>
</Navbar>
   
    <Routes>
      <Route exact path = "/about" element ={<About/>}></Route>
      <Route exact path = "/" element ={ <Home/> }></Route>
      <Route exact path = "/signup" element ={<SignUp/>}></Route>
      <Route exact path = "/contact" element ={<ContactUs/>}></Route>
      
      <Route exact path = "/login" element ={<Login /> }></Route>
    </Routes>
    </Router>
  
    </>
  );
}

export default App;
