import React from "react"
import { ContainerStyle } from "../helpers/helper"


const Login= (props) => {
    const {login} = props
    return(
        <div className="bg-dark" style={ContainerStyle}>
            <button className="btn btn-danger btn-lg mr-3" onClick={login}> LOGIN </button>
        </div>
    )
}

export default Login