import {REGISTER, SET_CURRENT_USER } from '../action/types'
import isEmpty from '../validation/isEmpty'

const initialState = {
  isAuthenticated : false,
  user : {}
}

export default function(state = initialState, action){
  switch(action.type){
    case REGISTER :
      return{
        isAuthenticated : true,
        user : action.payload
      }
    case SET_CURRENT_USER : 
      return{
        ...state, 
        isAuthenticated : !isEmpty(action.payload),
        user : action.payload
      }
    default : return state
  }
}