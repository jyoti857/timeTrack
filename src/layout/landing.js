import React, { Component } from 'react'
import '../styles_S/login.css'
import {Menu} from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

class Landing extends Component {
  componentDidMount(){
    if(this.props.auth.isAuthenticated){
      this.props.history.push("/dashboard")
    }
  }
  render() {
    return (
      <div>
         <div className = "landing">
          <div className = "dark-overlay landing-inner text-light">
            <div className = "container">
              <div className = "row">
                <div className = "col-md-12 text-center">
                  <h1 className = "display-3 mb-4">Time Track and Report Management
                  </h1>
                  <p className = "lead"> Create a Time-track app, Daily, Weekly and Monthly report management.</p>
                  <hr />
                  <Menu.Item to = '/register' as = {NavLink} className = "btn btn-lg btn-info mr-2">Sign Up</Menu.Item>
                  <Menu.Item to  = '/login' as  = {NavLink} className = "btn btn-lg btn-light">Login</Menu.Item>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStoreToProps = store =>{
  return{
    auth : store.auth
  }
}

export default connect(mapStoreToProps)(Landing)
