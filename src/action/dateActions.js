import {DATA_BY_DATE, DATE} from './types'

export const getDataFromDate = _ =>{
  return{
    type : DATA_BY_DATE,
    payload : ""
  }
}

export const addDate = _ =>{
  return{
    type : DATE,
    payload : ""
  }
}