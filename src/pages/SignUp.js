import React from "react";
import { Form, Button } from "react-bootstrap"
import {Link} from "react-router-dom";



const SignUp = () => {


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-2">

                    </div>
                    <div className="col-md-6">
                    <h1 className="mb-3 mt-4"> Login Page</h1>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <input type="checkbox" className="me-3" />
                                <label>I agree to the Privacy Policy.</label>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                            Sign Up
                            </Button>
                        </Form>
                        <small className="pt-2 text-warning d-block">Already have an account</small>
                        <Link to="/" className="text-info" style={{fontSize:"13px", textDecoration:"none"}} >  Sign In</Link>
                    </div>
                    <div className="col-md-2">
                      
                    </div>


                </div>

            </div>

        </>
    )
}


export default SignUp