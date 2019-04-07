import React, { Component } from 'react'
import {Button, Checkbox, Form, Menu} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import '../styles_S/login.css'
import {inputAll, toggleSubmit} from '../action/loginActions'
import {connect} from 'react-redux'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import {loginUser} from '../action/authActions'
import TextGroupField from './common/textGroupField'
class Login extends Component {

  getLoginDetails = event =>{
    event.preventDefault()
    axios.get("http://localhost:5000/api/").then(response => response.data).then(data =>{
      for(let i of data){
        console.log(i)
        let email  = i.email
        let password = i.password
        if(email === this.props.login.email && password === this.props.login.password) console.log("login success")
        // console.log("login failed")
      }
    })
  }

  onLoginSubmit = event =>{
    event.preventDefault()
    const {email, password} = this.props.login
    const userData = {email, password}
    this.props.loginUser(userData)  
  }
  componentDidMount(){
    // check if user is logged in
    if(this.props.auth.isAuthenticated){
      this.props.history.push('/dashboard')
    }
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.auth.isAuthenticated){
      this.props.history.push('/dashboard')
    }
  }
  render () {
    return(
    // this.props.login.logginToggle ? 
    <div>
      <LoginForm inputAll = {this.props.inputAll}
          getLoginDetails = {this.getLoginDetails}
          email = {this.props.login.email}
          password = {this.props.login.password}
          toggleSubmit = {this.props.toggleSubmit}
          onLoginSubmit = {this.onLoginSubmit}
           /> 
           {/* : */}
        {/* <RegisterForm inputAll = {this.props.inputAll} 
          email  = {this.props.login.email}
          password = {this.props.login.password}
          firstName  = {this.props.login.firstName}
          lastName = {this.props.login.lastName}
          toggleSubmit = {this.props.toggleSubmit} 
          onRegister = {this.onRegister}/> */}
      </div>
    )}
}

export const LoginForm  = props =>{
  return(
  //       <Form className = "Form">
  //         <Form.Field>
  //           <input placeholder='Email' onChange = {props.inputAll} name = "email" 
  //             value = {props.email} />
  //         </Form.Field>
  //         <Form.Field>
  //           <input placeholder='Password' type = 'password'
  //             name = "password" value = {props.password}
  //             onChange = {props.inputAll} />
  //         </Form.Field>
  //         {/* <Form.Field>
  //           <Checkbox label='I agree to the Terms and Conditions' />
  //         </Form.Field> */}
  //         <Button type = 'submit' onClick ={props.getLoginDetails} to = "/template" as = {NavLink}>
  //            Login</Button>
  //         <Menu.Item to = '/register' as  = {NavLink}>Resister</Menu.Item>
  //       </Form>
  // )
          <div className = "login">
            <div className = "container">
              <div className = "row">
                <div className = "col-md-8 m-auto">
                  <h1 className = "display-4 text-center">Log In</h1>
                  <p className = "lead text-center">Sign in to your TrackSheet account</p>
                  <form action="dashboard.html">
                      <TextGroupField 
                        type="email" 
                        className = "form-control form-control-lg" 
                        placeholder="Email Address" 
                        name="email"
                        value = {props.email} 
                        onChange = {props.inputAll} />
                      <TextGroupField 
                        type="password" 
                        className = "form-control form-control-lg" 
                        placeholder="Password" 
                        name="password"
                        value = {props.password} 
                        onChange = {props.inputAll} />
                      <TextGroupField 
                        type="submit" 
                        className = "btn btn-info btn-block mt-4"
                        onClick = {props.onLoginSubmit} />
                  </form>
                </div>
              </div>
            </div>
          </div>
  )
}

// export const RegisterForm = props =>{
//   return(
//         <Form className = "Form">
//           <Form.Field>
//             <input placeholder='firstName' onChange = {props.inputAll} name = "firstName" 
//               value = {props.firstName} />
//           </Form.Field>
//           <Form.Field>
//             <input placeholder='lastName' onChange = {props.inputAll} name = "lastName" 
//               value = {props.lastName} />
//           </Form.Field>
//           <Form.Field>
//             <input placeholder='Email' onChange = {props.inputAll} name = "email" 
//               value = {props.email} />
//           </Form.Field>
//           <Form.Field>
//             <input placeholder='Password' type = "password" onChange = {props.inputAll} name = "password" 
//               value = {props.password} />
//           </Form.Field>
//           <Form.Field>
//             <input placeholder='Confirm password' type = "password" onChange = {props.inputAll} name = "password" 
//               value = {props.password} />
//           </Form.Field>
//           <Button type='submit' on  Click ={props.onRegister}> Register

//                 <Menu.Item to  = "/login" as  = {NavLink}>Login</Menu.Item></Button>
//         </Form>
//   )
// }

const mapPropsToStore = store =>{
  return{
    login : store.loginRed,
    auth : store.auth,
    errors : store.error
  }
}

export default connect(mapPropsToStore, {inputAll, toggleSubmit, loginUser})(Login)