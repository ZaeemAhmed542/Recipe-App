import React from "react"
import {Link} from "react-router-dom"
import Button from "./button"

const Logo = () => {
    return (
        <React.Fragment>
            <Link to="/">
                <h1 className="navbar-brand ml-5 display-1">FORKIFY</h1>
            </Link>
           <Button className="navbar-toggler" dataToggle="collapse" dataTarget="#navbarSupportedContent">
                <span className="navbar-toggler-icon"></span>
            </Button>
        </React.Fragment>
    )
}

export default Logo