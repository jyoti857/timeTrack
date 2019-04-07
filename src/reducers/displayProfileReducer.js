import {GET_ALL_PROFILE} from '../action/types'

const initialState = {
  profiles : [],
  flag : true
}

const DisplayProfileReducer = (state = initialState, action) =>{
  switch(action.type){
    case GET_ALL_PROFILE : 
      return{
        ...state,
        profiles : action.payload,
        flag : true
      }
    default : return state;
  }
}

export default DisplayProfileReducer