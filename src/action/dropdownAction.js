import {DROPDOWN} from './types'

export const selectFromDropdown = event =>{
  return{
    type : DROPDOWN,
    payload : event
  }
}