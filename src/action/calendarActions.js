import {CALENDAR} from './types'

export const calendarHandleChange = (event, name) =>{
  return{
    type : CALENDAR,
    payload : event,
    name : name
  }
} 