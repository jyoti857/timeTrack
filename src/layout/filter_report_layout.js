import React from 'react'
import {DateInput} from 'semantic-ui-calendar-react'
import {calendarHandleChange} from '../action/calendarActions'


const Filter_report_layout = (props) => 
  <div>
    <DateInput 
      className = 'dateInput11' 
        name = "date" 
        placeholder = "Date" 
        value = {props.date}
        iconPosition = 'left' 
        onChange = {calendarHandleChange} />
        <DateInput 
        className = 'dateInput11' 
          name = "date" 
          placeholder = "Date" 
          value = {props.date}
          iconPosition = 'left' 
          onChange = {calendarHandleChange} />
    </div>

const styles = {

}
export default Filter_report_layout;