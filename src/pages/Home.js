import React, { useEffect } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import CustomButton from "../component/CustomButton"


let intervalId
let count = 0

const Home = () => {

    const [toogle, setToogle] = React.useState(false)
    const [disable, setDisable] = React.useState("")

    let clear = useStoreActions((action) => action.authentication.clear)

    const counter = () => {
        count++;
        setToogle(_ => !_)
    }

    const demo = (callbackdata) => {
        if (callbackdata == "Play") {
            intervalId = setInterval(() => {
                if (count > 9) {
                    clearInterval(intervalId);
                } else counter()
            }, 1000);
            setDisable("Play")
        }
        if (callbackdata == "Pause") {
            clearInterval(intervalId);
            setDisable("Pause")
        }

        if (callbackdata == "Reset") {
            count = 0
            clearInterval(intervalId);
            setDisable("Reset")
        }


        if (callbackdata == "Log Out") {
            clear(false)
            count = 0

        }

    }

    useEffect(() => {
        return () => {
            clearInterval(intervalId);
            count = 0

        }
    }, [])



console.log("coutn",count)
                             
    return (
        <>
            <h1>Welcome to Home Page</h1>
            <CustomButton label="Play" clickme={demo} disableBtn={ disable == "Play" && "disabled"} customStyle={{ "color": "bg-success"}} /><br /><br />
            <CustomButton label="Pause" clickme={demo} disableBtn={ disable == "Pause" && "disabled"} customStyle={{ "color": "bg-danger"}} /><br /><br />
            <CustomButton label="Reset" clickme={demo} disableBtn={ disable == "Reset" && "disabled"} customStyle={{ "color": "bg-warning"}} /><br /><br />
            <CustomButton label="Log Out" clickme={demo} customStyle={{ "color": "bg-info"}} /><br /><br />
            <div style={{ height: "100px", border: "2px solid black", width: "20%", margin: "0px auto" }}>
                <h1>{count} </h1>
            </div>
        </>
    )
}


export default Home