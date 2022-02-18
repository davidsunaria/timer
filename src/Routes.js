import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import SignUp from "./pages/SignUp.js"
import Login from "./pages/Login"
import Home from "./pages/Home"
import { useStoreActions, useStoreState } from "easy-peasy";



const Routes = () => {
    console.log("working routes")
    const login = useStoreState((state) => state.common.login);
    

    let isLogin = localStorage.getItem("isLogin")
    console.log("isLogin",isLogin)

     const PrivateRoute = ({component: Component, ...rest}) => {
         return (

            //   Show the component only when the user is logged in
            //   Otherwise, redirect the user to /signin page
             <Route {...rest} render={props => (
                isLogin ?
                     <Component {...props} />
                 : <Redirect to="/login" />
             )} />
         );
     };
   

    const PublicRoute = ({ component: Component, restricted, ...rest }) => {
        return (
            // restricted = false meaning public route
            // restricted = true meaning restricted route
            <Route {...rest} render={props => (
                isLogin && login && restricted ?
                    <Redirect to="/home" />
                    : <Component {...props} />
            )} />
        );
    };


    return (
        <>
            <BrowserRouter>
                <Switch>
                    <PublicRoute restricted={true} component={Login} path="/login" exact />
                    <PrivateRoute component={Home} path="/home" exact />
                    <Route path={"/signup"} component={SignUp} />
                    {/* <Route path={"/home"} component={Home} /> */}
                    <Route
                        path="/"
                        render={() => <Redirect to="/login" />}
                        exact
                    />
                    {/* <Route  path={"/"} component={Login}/> */}


                </Switch>
            </BrowserRouter>
        </>
    )
}


export default Routes