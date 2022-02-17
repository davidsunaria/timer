import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import {SignUp} from "./pages/SignUp.js"



const Routes = () =>{



    return(
        <>
        <BrowserRouter>
             <Switch>
                   <Route  path={"/signup"} component={SignUp}/>

             </Switch>
             </BrowserRouter>
        </>
    )
}


export default Routes