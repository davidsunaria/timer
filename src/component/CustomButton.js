import React from "react";
import { useStoreActions, useStoreState } from "easy-peasy";



const CustomButton = (props) => {


    let { label, customStyle,disableBtn } = props
    let { color} = customStyle

    const demo = () => {
        props.clickme(label)
    }


    return (
        <>

            <button className="btn btn-info" onClick={demo} className={`btn ${color } ${disableBtn}`}>{label}</button>

        </>
    )
}


export default CustomButton