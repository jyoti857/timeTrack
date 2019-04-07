import React, { Component } from 'react'
import Login from '../components/login'
import {Link, NavLink} from 'react-router-dom'
import {Menu} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {logoutUser} from '../action/authActions'
import {clearCurrentProfile} from '../action/profileActions'

class Navbar extends Component {
  onLogoutUser = event =>{
    event.preventDefault()
    this.props.clearCurrentProfile()
    this.props.logoutUser()
  }
  render() {
    const {user, isAuthenticated } = this.props.auth
    return (
      <div>
             <nav className = "navbar navbar-expand-sm navbar-dark bg-dark mb-4">
              <div className = "container">
                <Menu.Item className = "navbar-brand" to = '/' as = {NavLink}>TrackSheet</Menu.Item>
                <button className = "navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                  <span className = "navbar-toggler-icon"></span>
                </button>

                <div className = "collapse navbar-collapse" id="mobile-nav">
                  <ul className = "navbar-nav mr-auto">
                    <li className = "nav-item">
                      <a className = "nav-link" href="profiles.html">
                       {user.firstName}
                      </a>
                    </li>
                  </ul>
                  {isAuthenticated ? 
                   <ul className = "navbar-nav ml-auto">
                  <li className = "nav-item">
                        <img className = 'rounded-circle'
                        src = {user.avtar} alt = {user.firstName} style = {{width : '25px', marginRight : '5px'}}/>
                        <Link  to  = '/register' //as = {NavLink}
                         onClick = {this.onLogoutUser} >Logout</Link>
                         
                    </li></ul> : 
                  <ul className = "navbar-nav ml-auto">
                    <li className = "nav-item">
                      <Menu.Item className = "nav-link" to = '/register' as = {NavLink}>Sign Up</Menu.Item>
                    </li>
                    <li className = "nav-item">
                      <Menu.Item className = "nav-link" to  = '/login' as  = {NavLink}>Login</Menu.Item>
                    </li>
                  </ul>}
                </div>
              </div>
          </nav>
      </div>
    )
  }
}
const mapStoreToProps = store =>{
  return{
    auth : store.auth
  }
}

export default connect(mapStoreToProps, {logoutUser, clearCurrentProfile})(Navbar)