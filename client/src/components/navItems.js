import React,{useContext} from "react" 
import Navitem from "./navItem"
import Button from "./button"
import {Link} from "react-router-dom"
import {Auth0Context} from "../context/auth0context"

const Navitems = () => {
    const { logout } = useContext(Auth0Context);
    return(
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <Navitem>
                    <Link to="/saved">
                        <Button className="btn btn-dark my-2 my-sm-1 mr-3">SAVED</Button>
                    </Link>
                </Navitem>
                    
                <Navitem>
                    <Link to="/search">
                        <Button className="btn btn-dark my-2 my-sm-1 mr-3">SEARCH</Button>
                    </Link>
                </Navitem>
                <Navitem>
                    <Link to="/saved">
                        <Button className="btn btn-dark my-2 my-sm-1 mr-3" onClickHandler={logout}>LOGOUT</Button>
                    </Link>
                </Navitem>
            </ul>
        </div>
    )
}

export default Navitems