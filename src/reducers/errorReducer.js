import {GET_ERRORS} from '../action/types'

const initialState = {
  errorFlag : false, // same read the below comment 
  errors : {}
}

const ErrorReducer  = (state = initialState, action)  => {
  switch(action.type){
    case GET_ERRORS :
      return{
        ...state, 
        errorFlag : true, // not required or not implemented, this was made to prevent submit on /register page  but is not elegant enough 
                                // should try in a different way.
        errors : action.payload
      }
    
    default : return state
  }
}

export default ErrorReducer