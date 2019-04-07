import {combineReducers} from 'redux'
import LoginReducer from './loginReducer'
import ActivityReducer from './activityReducer';
import AuthReducer from './authReducer'
import ErrorReducer from './errorReducer'
import ProfileReducer from './profileReducer'
import DisplayProfileReducer from './displayProfileReducer' 
import HandleReducer from './handleReducer'

export default combineReducers(
    {
    loginRed : LoginReducer, 
    activityRed : ActivityReducer,
    auth : AuthReducer,
    error : ErrorReducer,
    profile : ProfileReducer,
    dislayProfile : DisplayProfileReducer,
    handle : HandleReducer
  }
) 