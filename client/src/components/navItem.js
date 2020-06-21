import React from "react"


const Navitem = ({children}) => {
    return (
        <li className="nav-item active mr-3">
            {children}
        </li>
    )
}

export default Navitem