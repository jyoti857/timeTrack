import {REGISTER, GET_ERRORS, SET_CURRENT_USER} from './types'
import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'
import jwt_decode from 'jwt-decode'

export const registerUser = (userData, history) => dispatch =>{
  axios.post('http://localhost:5000/api/register', userData)
    .then(result => history.push('/login'))
    .catch(err => dispatch({
      type : GET_ERRORS,
      payload : err.response.data
    }))
}


// login user - get token
export const loginUser  = userData => dispatch =>{
axios.post('http://localhost:5000/userTest/login', userData)  // using User_1(having passport) route not user(no passport only jwt.verify())
    .then(res => {
      // save to localstorage 
      const {token} =  res.data
      console.log(res.data.token)
      //set token to localstorage 
      localStorage.setItem('jwtToken', token)
      // set token to auth header
      setAuthToken(token) 

      // decode the token to get user data
      const decoded = jwt_decode(token)
      console.log("*#############################$#*$*@*$*@$*", decoded)
      //set current user
      dispatch(setCurrentUser(decoded)) 

    })
    .catch(err =>
      dispatch({
        type : GET_ERRORS,
        payload : err.response  // was err.response.data
      })
    )
}

// set logged in user
export const setCurrentUser = decoded =>{
  return{
    type : SET_CURRENT_USER,
    payload : decoded
  }
}

// set log user out 

export const logoutUser = _=> dispatch =>{
  // remove the token from localstorage
  localStorage.removeItem('jwtToken')
  // remove the auth header for future request
  setAuthToken(false) // setAuthToken(false)
  // set current user to {} which is also set isAuthenticated to false
  dispatch(setCurrentUser({})) // in authReducers authenticated will be false and user = {}
}