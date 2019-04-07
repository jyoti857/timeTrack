import React from 'react'
import {Switch, Route} from "react-router-dom"
import Login from '../components/login'
import Template_1 from '../components/template_1'
import Register from '../components/register'
import Landing from '../layout/landing'
import Dashboard from '../components/dashboard/dashboard'
import Report_layout from '../layout/report_layout'

import PrivateRoute from '../components/common/privateRoute'
import Create_profile from '../components/create_profile'

const All = props => {
  return (
      <div>
        <Switch>
          <Route exact path  = '/' component = {Landing} /> 
          <Route exact path = "/login" component = {Login} />  
          <Route path = '/register' component = {Register} />
          <Route path = '/template' component = {Template_1} />
          <Route path = '/report' component = {Report_layout} /> 
          <PrivateRoute exact path = "/dashboard" component = {Dashboard} />
          <Route path =  '/create_profile' component = {Create_profile} />
        </Switch>
      </div>    
  )
}

export default All