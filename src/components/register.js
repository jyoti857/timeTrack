import React, { Component } from 'react'
import {Button, Checkbox, Form, Menu} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import '../styles_S/login.css'
import {inputAll, toggleSubmit} from '../action/loginActions'
import {connect} from 'react-redux'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import {registerUser} from '../action/authActions'
import classnames from 'classnames'

class Register extends Component {

  onRegister = event =>{
    event.preventDefault()
    const {firstName, lastName, email, password} = this.props.login
    const newUser = {firstName, lastName, email, password}
    // axios.post('http://localhost:5000/api/register', newUser).then(result => console.log(result))
    //       .catch(err => console.log(err))
    //if(this.props.errors.errorFlag){
      this.props.registerUser(newUser, this.props.history)  // here what does "this.props.history" do is to allow to
    // go to the redirect within  the registerUser action
    //}
  }
  componentDidMount(){
    if(this.props.auth.isAuthenticated){
      this.props.history.push("/dashboard")
    }
  }
  render () {
    return(
    // this.props.login.logginToggle ? 
    <div>
        <RegisterForm inputAll = {this.props.inputAll} 
          email  = {this.props.login.email}
          password = {this.props.login.password}
          firstName  = {this.props.login.firstName}
          lastName = {this.props.login.lastName}
          toggleSubmit = {this.props.toggleSubmit} 
          onRegister = {this.onRegister}
          errorsFirstName = {this.props.errors.firstName}/>
          
      </div>
    )}
}

export const RegisterForm = props =>{
  return(
        // <Form className = "Form">
        //   <Form.Field>
        //     <input placeholder='firstName' onChange = {props.inputAll} name = "firstName" 
        //       value = {props.firstName} />
        //   </Form.Field>
        //   <Form.Field>
        //     <input placeholder='lastName' onChange = {props.inputAll} name = "lastName" 
        //       value = {props.lastName} />
        //   </Form.Field>
        //   <Form.Field>
        //     <input placeholder='Email' onChange = {props.inputAll} name = "email" 
        //       value = {props.email} />
        //   </Form.Field>
        //   <Form.Field>
        //     <input placeholder='Password' type = "password" onChange = {props.inputAll} name = "password" 
        //       value = {props.password} />
        //   </Form.Field>
        //   <Form.Field>
        //     <input placeholder='Confirm password' type = "password" onChange = {props.inputAll} name = "password" 
        //       value = {props.password} />
        //   </Form.Field>
        //   <Button type='submit' onClick ={props.onRegister}> Register</Button>

        //         <Menu.Item to  = "/login" as  = {NavLink}>Login</Menu.Item>
        // </Form>
        <div className = "register">
          <div className = "container">
            <div className = "row">
              <div className = "col-md-8 m-auto">
                <h1 className = "display-4 text-center">Sign Up</h1>
                <p className = "lead text-center">Create your SheetTrack account</p>
                <form action="create-profile.html">
                  <div className = "form-group">
                    <input type="text" 
                      className = {classnames("form-control form-control-lg", {
                        'is-invalid' : props.errorsFirstName
                      })}
                      placeholder="First Name" name = "firstName"
                      onChange = {props.inputAll} 
                      value = {props.firstName} required />
                  </div>
                  <div className = "form-group">
                    <input type="text" className = "form-control form-control-lg" placeholder="Last Name" name = "lastName" 
                      onChange = {props.inputAll} value = {props.lastName} required />
                  </div>
                  <div className = "form-group">
                    <input type="email" className = "form-control form-control-lg" placeholder="Email Address" name="email"
                      onChange = {props.inputAll} value = {props.email} />
                    {/* <small className ="form-text text-muted">This site uses Gravatar so if you want a profile image, use a Gravatar email</small> */}
                  </div>
                  <div className = "form-group">
                    <input type="password" className = "form-control form-control-lg" placeholder="Password" name="password"
                      onChange = {props.inputAll} value = {props.password} />
                  </div>
                  <div className = "form-group">
                    <input type="password" className = "form-control form-control-lg" placeholder="Confirm Password" name="password" 
                      onChange = {props.inputAll} value = {props.password} />
                  </div>
                  <input type="submit" className = "btn btn-info btn-block mt-4" onClick = {props.onRegister} />
                </form>
              </div>
            </div>
          </div>
        </div>
  )
}

const mapPropsToStore = store =>{
  return{
    login : store.loginRed,
    auth : store.auth,
    errors : store.error
  }
}

export default connect(mapPropsToStore, {inputAll, toggleSubmit, registerUser})(Register)