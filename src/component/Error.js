import React from "react";
import { useStoreActions, useStoreState } from "easy-peasy";



const Error = (props) => {




    return (
        <>
            {
                props.type == "username" && <span>Username must be at least 9 character</span>
            }
            {
                props.type == "password" && <span>at least one numeric digit and a special character</span>

            }

            {
                props.type == "checkError" && <span>You must agree to privacy policy</span>

            }



        </>
    )
}


export default Error