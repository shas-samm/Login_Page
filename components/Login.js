import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from "react-router-dom";

const Login = () => {
    return (
        <>
        <div className="container mt-3">
        <section className='d-flex justify-content-between'>
            <div className="left_data mt-3" style={{width:"100%"}}>
                <h3 className="text-center col-lg-6">SIGN IN</h3>
                <Form>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
        
        <Form.Control type="email" placeholder="Enter email" />
        
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
        
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      
      <Button variant="primary" className="col-lg-6" style={{backgroundColor:"rgb(67,185,127)"}} type="submit">
        Submit
      </Button>
      <p className="mt-3">Don't have an account?<span><NavLink to="/">Sign Up</NavLink></span></p>
    </Form>
            </div>
            <div className="right_data mt-3" style={{width:"100%"}}>
              <div className="sign_img mt-3">
                <img src="./sign.webp" style={{maxWidth:480}} alt=""/>
              </div>
            </div>
        </section>
    </div>
        </>
    )
}

export default Login