import React from "react";
import { useStoreActions, useStoreState } from "easy-peasy";



const Home = () => {

    let clear = useStoreActions((action)=>action.authentication.clear)

   
    const logout = () =>{
        clear(false)
   }
   


    return (
        <>
            <h1>Welcome to Home Page</h1>
            <button className="btn btn-info" onClick={logout}>Log Out</button>

        </>
    )
}


export default Home