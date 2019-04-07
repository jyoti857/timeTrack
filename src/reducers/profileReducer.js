import {GET_PROFILE, PROFILE_LOADING, CLEAR_CURRENT_PROFILE,
INPUT, CALENDAR, DROPDOWN, GET_ALL_PROFILE} from "../action/types"
import { now } from "moment";


const initialState = {
  profile  : [],
  profiles : [],
  loading : false,
  //''''''''''''''''''''''''''''''
  displayAllProfiles : [],
  //==============.=======================================================
  // trying to do something that may be the cause of the code damage
  platforms : "",
  application : "",
  others : "",
  date : new Date().getDate().toString() + "-" + (new Date().getMonth()+1).toString()+ "-" + new Date().getFullYear().toString(), //new Date().toISOString,
  descriptions : "",
  hours : 0

}

const ProfileReducer = (state = initialState, action) =>{
  switch(action.type){
    case PROFILE_LOADING : 
      return{
        ...state,
        loading : true
      }
    case GET_PROFILE : 
      return{
        ...state, 
        profile : action.payload,
        profiles : [...state.profiles, state.profile],  // added profile to the profiles array, is not tested yet
        loading : false,
        platforms : "",
        application : "",
        others : "",
      }
    case CLEAR_CURRENT_PROFILE:
      return{
        ...state, 
        profile : {}
      }

    //==================================
    case INPUT :
      const target = action.payload.target
      const name = target.name
      const value = target.value
      return{
        ...state,
        [name] : value
      }
    case CALENDAR : 
     const date  = action.name.value
     return{
       ...state, 
       date
     }
    case DROPDOWN : 
     const target1 = action.payload.target
     const value1 = target1.value
     const name1 = target1.name
     return{
       ...state, 
       [name1] : value1
      //  platforms,
      //  application,
      //  others
     }

    // get all profiles of a user
     case GET_ALL_PROFILE : 
      return{
        ...state, 
        displayAllProfiles : action.payload,
        loading : false
      }
    default : return state
  }
}

export default ProfileReducer
