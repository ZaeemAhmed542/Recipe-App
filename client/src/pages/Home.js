import React from "react" 
import Navbar from "../components/navbar"
import WelcomeUser from "../components/WelcomeUser"

const Home = () => {
     return(
         <React.Fragment>
            <Navbar/>
            <WelcomeUser/>
         </React.Fragment> 
     )
}

export default Home