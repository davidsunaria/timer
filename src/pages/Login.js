import React ,{useState}from "react";
import { Form, Button } from "react-bootstrap"
import {Link,useHistory} from "react-router-dom";
import { useStoreActions, useStoreState } from "easy-peasy";



const Login = () => {
    let setlogin = useStoreActions((action)=>action.authentication.setlogin)

    let history = useHistory();

    const [ loginData, setLogin] = useState({
        password:"",
        user:""
    })

    const changeHandler =(e)=>{
        setLogin({...loginData,[e.target.name]:e.target.value})
    }

    let localData= localStorage.getItem("userDetail")

    const submit = (e) =>{
        e.preventDefault()
      let result=  JSON.parse(localData).some((value)=>{
            return value.password === loginData.password && value.username === loginData.user;
        })

        if(result){
            console.log("rsult",result)
            localStorage.setItem("isLogin",true)
            setlogin(true)
           history.push("/home")
        }
    }

  
   console.log("localData",localData)


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
                                <Form.Control type="text" name="user" placeholder="Enter email" value={loginData.user} onChange={changeHandler}/>
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" name="password" placeholder="Password"  value={loginData.password} onChange={changeHandler} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                        </Form>
                        <small className="pt-2 text-warning d-block">Don't have an account?</small>
                        <Link to="/signup" className="text-info" style={{fontSize:"13px", textDecoration:"none"}} >  Sign Up</Link>
                    </div>
                    <div className="col-md-4">
                      
                    </div>


                </div>

            </div>

        </>
    )
}


export default Login