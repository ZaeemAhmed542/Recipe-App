import React, {createContext, useContext, useEffect} from "react"
import {useQuery} from "@apollo/react-hooks"
import {Auth0Context} from "./auth0context"
import {findUser} from "../ApolloClient/queries"

export const userContext = createContext()

const UserContextProvider = (props) => {
    const {user} = useContext(Auth0Context)

    const {data,refetch} = useQuery(findUser,{
        variables:{email:user.email}
    })
    
    useEffect(() => {
        refetch()
    },[data])

    return(
        <userContext.Provider value={data ? data.findUser: ""}>
            {props.children}
        </userContext.Provider>
    )
}

export default UserContextProvider