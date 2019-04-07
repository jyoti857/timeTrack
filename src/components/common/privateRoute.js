import React from 'react'
import {connect} from 'react-redux'
import {Route, Redirect} from 'react-router-dom'

const PrivateRoute = ({component : Component, auth, ...rest}) => {
  return (
    <div>
       <Route 
       {...rest}
       render = {props=>
        auth.isAuthenticated ===true ? (<Component {...props}/>) : (
          <Redirect to = '/login' />
        )
       }/> 
    </div>
  )
}

const mapStoreToProps = store =>{
  return{
    auth : store.auth
  }
}

export default connect(mapStoreToProps)(PrivateRoute)