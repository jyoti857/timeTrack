import {INPUT, TOGGLE} from './types'

export const inputAll = event =>{
  return{
    type : INPUT,
    payload : event
  }
}

export const toggleSubmit = _ =>{
  return{
    type : TOGGLE,
    payload : ""
  }
}