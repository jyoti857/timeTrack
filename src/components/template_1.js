import React, { Component } from 'react'
import {Dropdown} from "semantic-ui-react"
import '../styles_S/login.css'
import { connect } from 'react-redux'
import {selectFromDropdown} from '../action/dropdownAction'
import {calendarHandleChange} from '../action/calendarActions'
import {inputAll} from '../action/loginActions'

import axios from 'axios'
//
import {DateInput} from 'semantic-ui-calendar-react'

class Template_1 extends Component {

  onDemoDataPost = _ => {
    const {date, dropdown_value, descriptions} = this.props.activity
    const newDemoData = {date, data : dropdown_value, descriptions}
    axios.post('http://localhost:5000/data/date', newDemoData).then(result => console.log(result))
      .catch(err => console.log(err))
  }
  onDemoDataEdit = _ =>{
    // const 
    // axios.post(`http://localhost:5000/data/${}`)
  }
  render() {
    return (
      <div>
      <div className = 'main'>
        <DateInput className = 'dateInput' name = "date" placeholder = "Date" value = {this.props.activity.date}
            iconPosition = 'left' onChange = {this.props.calendarHandleChange} />
        <div className = 'drops'>
            <select className = "ui dropdown" onChange = {this.props.selectFromDropdown} 
              value = {this.props.activity.dropdown_value} >
              <option>Activity</option>
              <option value="ACT_1">Act_1</option>
              <option value="ACT_2">Act_2</option>
            </select> <br /><br />
            {/* <input type = 'submit' className = 'btn btn-primary btn-md' onClick = {this.onDemoDataPost} />                   */}
          </div>
        <div  className = 'drops'>
        <select className = "ui dropdown" onChange = {this.props.selectFromDropdown} 
          value = {this.props.activity.dropdown_value} >
          <option>Activity</option>
          <option value = "ACT_3">Act_3</option>
          <option value = "ACT_4">Act_4</option>
        </select> <br /><br />
        {/* <input type = 'submit' className = 'btn btn-primary btn-md' onClick = {this.onDemoDataPost}/>                   */}
      </div>
      <div className  = 'drops'>
        {/* <DateInput className = 'dateInput' name = "date" placeholder = "Date" value = {this.props.activity.date}
          iconPosition = 'left' onChange = {this.props.calendarHandleChange} /> */}
        <select className = "ui dropdown" onChange = {this.props.selectFromDropdown} 
          value = {this.props.activity.dropdown_value} >
          <option>Activity</option>
          <option value="ACT_5">Act_5</option>
          <option value="ACT_6">Act_6</option>
        </select> <br /><br />
      </div>
    </div>
    <textarea 
      type = 'text' 
      className = "form-control" 
      rows = '5' 
      placeholder = "Details for the day" 
      name = 'descriptions' 
      value = {this.props.activity.descriptions} 
      onChange  ={this.props.inputAll} 
      style = {{width : "50%", margin : " 10px 5px 5px 15px"}}/>
    <button type = 'edit' style = {{margin : '10px 5px 5px 15px'}}
    className = "btn btn-secondary btn-md" id = "edit_button" >Edit</button>
    <hr />
    <input type = 'submit' className = 'btn btn-primary btn-md' 
      style = {{margin : '10px 5px 5px 15px'}} onClick = {this.onDemoDataPost}/>                  
    </div>
    )
  }
}

const mapStateToProps = store =>{
  return{
    activity : store.activityRed
  }
}
export default connect(mapStateToProps, {selectFromDropdown, calendarHandleChange, inputAll})(Template_1)