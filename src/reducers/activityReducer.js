import {DROPDOWN, CALENDAR, DATA_BY_DATE, INPUT} from '../action/types'
import axios from 'axios'

const initialState = {
  dropdown_value : "",
  date : new Date().toISOString,
  descriptions : ""
}

const ActivityReducer = (state = initialState, action)=>{
  switch(action.type){
    case DROPDOWN :
      const value = action.payload.target.value
      console.log(value)
      return{
        ...state,
        dropdown_value : value
      }
      case CALENDAR:
        const value1 = action.name.value
        console.log(value1)
        return{
          ...state,
          date : value1
        }
      case DATA_BY_DATE : 
        const date = state.date
        const user = {date}
        axios.post("http://localhost:5000/data/data", user)
          .then(data => data.data.data.map(data =>{
            // console.log(data.activity)
            // this.props.activity.activity = data.activity
            // this.dataObject['date'] = data.date
            // this.dataObject['id']  = data._id
            return{
              ...state,
              dropdown_value : data
            }
          }))
      case INPUT : 
          const target2 = action.payload.target
          const value2  = target2.value
          const name2 = target2.name
          return{
            ...state,
            [name2] : value2
          }

    default : return state
  }
}

export default ActivityReducer