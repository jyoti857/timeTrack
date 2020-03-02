import React, { Component } from 'react'
import {Dropdown} from "semantic-ui-react"
import '../styles_S/login.css'
import { connect } from 'react-redux'
import {selectFromDropdown} from '../action/dropdownAction'
import {calendarHandleChange} from '../action/calendarActions'
import {inputAll} from '../action/loginActions'
import {withRouter} from 'react-router-dom'
import {updateProfile} from '../action/profileActions'
import TextGroupField from './common/textGroupField'
import {createProfile} from '../action/profileActions'
import HanldleHanldle from '../components/common/handleHandle' 

import axios from 'axios'
//
import {DateInput} from 'semantic-ui-calendar-react'
import HandleHandle from '../components/common/handleHandle';

class Create_profile extends Component {

  activeStyle = {
    width : "20%"
  }

  createProfileHelper = value =>{
    if(!value) return ''
    return value
  }
  onUpdate = () =>{
    const {profile, profiles, loading,  date, platforms, application, others, descriptions} = this.props.profile
    // const {platforms, application, } = profile.profile
    const {calendarHandleChange} = this.props
    const updateTheProfile = {
      platforms, application, others, date, descriptions
    }
    this.props.updateProfile(updateTheProfile, this.props.history)
  }
  onSubmit = () =>{
    const {profile, date, platforms, others, descriptions, application, hours} = this.props.profile
    const {handle} = this.props.handle
    if(platforms == 'platforms') platforms = ''
    if(application == 'applications') application = ''
    if(others == 'Others') others = ''
    const newProfile = {
      platforms, application, others, date, descriptions, handle, hours
    }
    this.props.createProfile(newProfile, this.props.history)
  }
  render() {
    const {platforms, application, others, date, descriptions, hours} = this.props.profile
    return (
      <div>
      
        <DateInput className = 'dateInput' name = "date" placeholder = "Date" value = {date}
            iconPosition = 'left' onChange = {this.props.calendarHandleChange} />
      <div className = 'main'>
        <div className = 'drops'>
            <select className = "ui dropdown" id = "dropdownID" onChange = {this.props.selectFromDropdown} 
              value = {platforms} name = "platforms">
              <option>Platforms</option>
              <option value="Android">Android</option>
              <option value="iOS">iOS</option>
              <option value = "Windows">Windows</option>
            </select> <br /><br />
            {/* <input type = 'submit' className = 'btn btn-primary btn-md' onClick = {this.onDemoDataPost} />                   */}
          </div>
        <div  className = 'drops'>
        <select className = "ui dropdown" id = "dropdownID" onChange = {this.props.selectFromDropdown} 
          value = {application} name = "application">
          <option>Applications</option>
          <option value = "FINLALCAD">FINLALCAD</option>
          <option value = "FINALCAD Live">FINALCAD Live</option>
        </select> <br /><br />
        {/* <input type = 'submit' className = 'btn btn-primary btn-md' onClick = {this.onDemoDataPost}/>                   */}
      </div>
      <div className  = 'drops'>
        {/* <DateInput className = 'dateInput' name = "date" placeholder = "Date" value = {this.props.activity.date}
          iconPosition = 'left' onChange = {this.props.calendarHandleChange} /> // 8280948073*/}   
        <select className = "ui dropdown" id = "dropdownID" onChange = {this.props.selectFromDropdown} 
          value = {others} name = "others">     
          <option>Others</option>
          <option name = "Dashboard" value = "Dashboard">Dashboard</option>
          <option value = "Old Manager">Old Manager</option>
          <option value = "New Manager">New Magnager</option>
          <option value = "Forms M2">Forms M2</option>
          <option value = "Drawings M2">Drawings M2</option>
          <option value = "FC_Documentation">FC_Documentation</option>
        </select> <br /><br />
      </div>
    </div>
    <div className = "textAreahour">
      <input type = 'number' className = "form-control" 
        placeholder = "hours"
        id = "hours"
        name = 'hours'
        value = {hours}
        onChange = {this.props.inputAll}
        // style = {{width : "20%", margin : " 20px 800px", borderRadius : "blue"}}
        />

    {/* this is for handle section */}
    <HandleHandle 
                  strict  = {this.props.handle.strict}
                  handle  = {this.props.handle.handle}
                  onChange = {this.props.inputAll}
                  name  = 'handle' />


      <textarea 
        type = 'text' 
        id  = "textArea"
        className = "form-control" 
        rows = '5' 
        placeholder = "Details for this day" 
        name = 'descriptions' 
        value = {descriptions} 
        onChange  ={this.props.inputAll} 
        style = {{width : "50%", margin : " 10px 5px 5px 15px"}}/>

      <button type = 'edit' style = {{margin : '10px 5px 5px 15px'}}
      className = "btn btn-secondary btn-md" id = "edit_button" >Edit</button>
    </div>
    <hr />
    <button  className = 'btn btn-primary btn-md' 
      style = {{margin : '10px 5px 5px 15px'}} onClick = {this.onUpdate}>updateProfile</button>    
      <button  className = 'btn btn-primary btn-md' 
      style = {{margin : '10px 5px 5px 15px'}} onClick = {this.onSubmit}>submit</button>                
    </div>
    )
  }
}

const mapStateToProps = store =>{
  return{
    activity : store.activityRed,
    profile : store.profile,
    handle : store.handle
  }
}
export default connect(mapStateToProps, {selectFromDropdown, calendarHandleChange, inputAll,
        updateProfile, createProfile})(withRouter(Create_profile))