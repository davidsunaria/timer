import React, { useState } from "react";
import { Form, Button } from "react-bootstrap"
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useStoreActions, useStoreState } from "easy-peasy";
import Error from "../component/Error"



const SignUp = () => {

    let addUser = useStoreActions((action) => action.authentication.addUser)
    let history = useHistory();

    const [userInfo, setUserInfo] = useState({
        firstname: "",
        password: "",
        username: ""

    })
    const [confirmPassword, setConfirm] = useState("")
    const [checkValue, setCheck] = useState(false)
    const [checkError, setCheckError] = useState(true)


    const changeHandler = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value })

    }
    const changeHandler2 = (e) => {
        setConfirm(e.target.value)
    }

    function toggle(value) {
        setCheckError(!checkError)
        return !value;
    }

    const submit = (e) => {
        e.preventDefault()
        if (userInfo.password == confirmPassword) {
            if (checkValue) {
                addUser(userInfo)
                setCheckError(true)
                history.push("/login")
            }

        }
    }


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">

                    </div>
                    <div className="col-md-4">
                        <h1 className="mb-3 mt-4"> Login Page</h1>
                        <Form onSubmit={submit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="text" name="firstname" placeholder="FirstName" value={userInfo.firstname} onChange={changeHandler} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="text" name="username" placeholder="Enter Username" value={userInfo.username} onChange={changeHandler} />
                                {userInfo.username.length > 12 ? <Form.Text className="text-muted">
                                    <Error type="username" />
                                </Form.Text> : ""
                                }
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword" >
                                <Form.Control type="password" name={"password"} placeholder="Password" value={userInfo.password} onChange={changeHandler} />
                                {userInfo.password.search(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,15}$/) && userInfo.password.length > 10 ? <Form.Text className="text-muted">
                                    <Error type="password" />
                                </Form.Text> : ""
                                }
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword" >
                                <Form.Control type="password" name={"confirmPassword"} placeholder="confirmPassword" value={confirmPassword} onChange={changeHandler2} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <input type="checkbox" className="me-3" checked={checkValue} onChange={() => setCheck(toggle)} />
                                <label>I agree to the Privacy Policy.</label><br/>
                                {!checkError? <Form.Text className="text-muted">
                                    <Error type="checkError" />
                                </Form.Text> : ""
                                }
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Sign Up
                            </Button>
                        </Form>
                        <small className="pt-2 text-warning d-block">Already have an account</small>
                        <Link to="/" className="text-info" style={{ fontSize: "13px", textDecoration: "none" }} >  Sign In</Link>
                    </div>
                    <div className="col-md-4">

                    </div>


                </div>

            </div>

        </>
    )
}


export default SignUp