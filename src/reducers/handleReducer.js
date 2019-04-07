import {HANDLE_CONSTANT, INPUT} from '../action/types'

const initialState = {
  handle : '',
  strict : true
}

const HanldleReducer = (state  = initialState, action) =>{
  switch(action.type){
    case HANDLE_CONSTANT : 
      if(state.handle) return{
        ...state, 
        strict : false
      }
      case INPUT : 
        const target  = action.payload.target
        const name = target.name
        const value = target.value
        return{
          ...state,
          [name] : value
        }
     default : return state
  }
}

export default HanldleReducer