import React from 'react'
import '../styles_S/login.css'
import {NavLink} from 'react-router-dom'
import {Menu} from 'semantic-ui-react'
const Main = () => {
  return (
    <div className = "login1">
      <Menu.Item  to = '/login' as  = {NavLink} >login</Menu.Item>
    </div>
  )
}

export default Main
