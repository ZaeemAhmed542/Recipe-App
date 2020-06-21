import React, {useContext} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import UserContextProvider from "./context/userContext"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Search from "./pages/Search"
import Saved from "./pages/Saved"
import {Auth0Context} from "./context/auth0context"

const App = () => {
  const { isLoading, user, loginWithRedirect } = useContext(Auth0Context)
  return (
    <div className="App">
    {!isLoading && user && (
      <UserContextProvider>
        <Router>
          <Route path='/' exact component={Home} user={user}/>
          <Route path='/search' exact component={Search} />
          <Route path='/saved' component={Saved}/>
        </Router>
      </UserContextProvider>  
    )}
    {!isLoading && !user && (
        <Login login={loginWithRedirect}/>
    )}
    </div>
    
  )
}

export default App;
