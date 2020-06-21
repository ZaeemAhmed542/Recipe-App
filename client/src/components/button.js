import React from "react"


const Button = ({className, onClickHandler, children, dataToggle, dataTarget}) => {
      return(
        <button className={className} data-toggle={dataToggle} data-target={dataTarget} onClick={onClickHandler}>
            {children}
        </button>
      )
}
export default Button
        