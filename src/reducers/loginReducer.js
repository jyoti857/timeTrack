import {INPUT, TOGGLE} from '../action/types'

const initialState = {
  email : "",
  password : "",
  checkbox : "",
  loginToggle : true
}

const LoginReducer = (state = initialState, action)=>{
  switch(action.type){
    case INPUT:
      const target = action.payload.target
      const value  = target.value
      const name = target.name
      console.log(value)
      return{
        ...state,
        [name] : value
      }
    case TOGGLE: 
      console.log("toggle called!", state.loginToggle)
      return{
        ...state, 
        loginToggle : !state.loginToggle
      }
    default : return state
  }
}

export default LoginReducer