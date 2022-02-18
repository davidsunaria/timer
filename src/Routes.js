import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import SignUp from "./pages/SignUp.js"
import Login from "./pages/Login"
import Home from "./pages/Home"



const Routes = () =>{



    return(
        <>
        <BrowserRouter>
             <Switch>
                   <Route  path={"/signup"} component={SignUp}/>
                   <Route  path={"/home"} component={Home}/>
                   <Route  path={"/"} component={Login}/>
                   

             </Switch>
             </BrowserRouter>
        </>
    )
}


export default Routes