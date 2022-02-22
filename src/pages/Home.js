import React from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import CustomButton from "../component/CustomButton"



const Home = () => {

    const [count, setCount] = React.useState(1)

    let clear = useStoreActions((action) => action.authentication.clear)

    const counter  =() => {
        console.log("counter")
            setCount((prev) => (prev + 1))
    }

    let intervalId
    const demo = (callbackdata) => {
        if (callbackdata == "Play") {
         intervalId=setInterval(counter, 1000);
        // return () => clearInterval(intervalId);
        // setInterval(()=>{
        //     if(count<10){
        //         setInterval(counter, 1000);
        //     }
        // }, 1000);
        }
        if (callbackdata == "Pause") {
             clearInterval(intervalId);
        }

        if (callbackdata == "Log Out") {
            clear(false)
        }

    }





    return (
        <>
            <h1>Welcome to Home Page</h1>
            <CustomButton label="Play" clickme={demo} customStyle={{ "color": "bg-success" }} /><br /><br />
            <CustomButton label="Pause" clickme={demo} customStyle={{ "color": "bg-danger" }} /><br /><br />
            <CustomButton label="Log Out" clickme={demo} customStyle={{ "color": "bg-info" }} /><br /><br />
            <div style={{ height: "100px", border: "2px solid black", width: "20%", margin: "0px auto" }}>
                <h1>{count} </h1>
            </div>
        </>
    )
}


export default Home