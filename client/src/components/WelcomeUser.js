import React,{useContext,useEffect} from "react"
import {useMutation} from "@apollo/react-hooks"
import {Auth0Context} from "../context/auth0context"
import {createUser} from "../ApolloClient/queries"
import { ContainerStyle } from "../helpers/helper"

const WelcomeUser = () => {
    const {user} = useContext(Auth0Context)
    const [getuser] = useMutation(createUser)

    useEffect( () => {
        getuser( {variables : {
            name:user.name, 
            email:user.email}})
    }, [user])
    
    return(
        <div style={ContainerStyle} >
            <h1 className="display-4">WELCOME {user.name}</h1>
            <img src={user.picture} className="img-fluid" alt="Responsive image"></img>
        </div>
    )
}

export default WelcomeUser