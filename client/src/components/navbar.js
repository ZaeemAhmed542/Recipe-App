import React from "react"
import Logo from "./logo"
import Navitems from "./navItems"

const Navbar = () => {
    return(
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
                <div className="container">
                    <Logo/>
                    <Navitems/>
                </div>    
            </nav>  
        </React.Fragment>
    )
}
export default Navbar
        