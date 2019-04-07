import React, { Component } from 'react';
import './App.css';
import Login from './components/login'
import {Provider} from 'react-redux'
import {BrowserRouter} from "react-router-dom"
import store from './store'
import Template_1 from "./components/template_1"
import FilterByDate from './components/filterByDate'
import All from './navigation/all'
import Navigation from './navigation/navigation'
import Main from './navigation/main'
import  NavBar from './layout/navbar'
import Landing from './layout/landing'
import Footer  from './layout/footer'

// pdf 
// import PDF_1 from './components/common/pdf_1'

// to make user stay after a reload
import jwt_decode from 'jwt-decode'
import setAuthToken from './utils/setAuthToken'
import {setCurrentUser} from './action/authActions'
import {logoutUser} from './action/authActions'


//Check for token
  if(localStorage.jwtToken){
    //set auth token header auth
    setAuthToken(localStorage.jwtToken)
    // decode token and get user info
    const decoded = jwt_decode(localStorage.jwtToken)
    // set user and authenticated
    store.dispatch(setCurrentUser(decoded))

    // check out for expired token
    const currentTime  = Date.now() / 1000
    if(decoded.exp < currentTime){
      // logout the user
      store.dispatch(logoutUser())
      // TODO : clear current user profile

      // Redirect to login page 
      window.location.href = '/login'
    }
  }

class App extends Component {
  render() {
    return (
      <Provider store = {store}><BrowserRouter>
      <div className="App">
        <NavBar />
        {/* <Landing /> */}
        {/* <Login /> */}
        {/* <Template_1 /> */}
        {/* <FilterByDate /> */}
        {/* <Navigation /> */}
        <All />
        <Footer />
      </div></BrowserRouter></Provider>
    );
  }
}

export default App;
