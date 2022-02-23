import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import SignUp from "./pages/SignUp.js"
import Login from "./pages/Login"
import Home from "./pages/Home"
import { useStoreActions, useStoreState } from "easy-peasy";






const PrivateRoute = ({component: Component, reduxlogin,...rest}) => {
    console.log("private route",reduxlogin)
    return (

       //   Show the component only when the user is logged in
       //   Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            reduxlogin?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />
    );
};


const PublicRoute = ({ component: Component, restricted,reduxlogin, ...rest }) => {
    console.log("public route",reduxlogin)
   return (
       // restricted = false meaning public route
       // restricted = true meaning restricted route
       <Route {...rest} render={props => (
             reduxlogin && restricted ?
               <Redirect to="/home" />
               : <Component {...props} />
       )} />
   );
};




const Routes = () => {

    let reduxlogin = useStoreState((state)=>state.authentication.reduxlogin)

   
  
   

    return (
        <>
            <BrowserRouter>
                <Switch>
                    <PublicRoute restricted={true} component={Login} path="/login"  reduxlogin={reduxlogin} exact />
                    <PrivateRoute component={Home} path="/home"  reduxlogin={reduxlogin} exact />
                    <PublicRoute path={"/signup"}  reduxlogin={reduxlogin} component={SignUp} />
                    <Route
                        path="/"
                        render={() => <Redirect to="/login" />}
                        exact
                    />


                </Switch>
            </BrowserRouter>
        </>
    )
}


export default Routes