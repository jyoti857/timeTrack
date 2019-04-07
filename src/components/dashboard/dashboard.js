import React, { Component } from 'react'
import {connect} from "react-redux"
import {getCurrentProfile} from "../../action/profileActions"
import Loading from '../common/loading'
import {Link, withRouter} from 'react-router-dom'

import {createProfile} from '../../action/profileActions'
import {displayProfile} from '../../action/profileActions'


class Dashboard extends Component {

  // componentDidMount(){
  //   this.props.getCurrentProfile() 
  // }

  displayProfile1(profile){
    // if(!profile.platforms && !profile.application && !profile.others){
    //   return " "
    // }else return profile
    // const id = profile.user._id
    // this.props.displayProfile()
  }

  displayValue(value){
    if(!value) return "" 
    return value.map(val => val)
  }
  displayUsername(value){
    if(!value) return ''
    return value.firstName + " " + value.lastName
  }
  displayDate(value){
    if(!value) return new Date().toISOString
    return value.date
  }
  displayDescriptions(value){
    if(!value) return ''
    return value.descriptions
  }
  render(){
    const {profile, profiles, displayAllProfiles, loading, date } = this.props.profile
    const platforms = profile.platforms
    const applications = profile.application
    // const date = profile.date
    const descriptions = profile.descriptions
    const others = profile.others
    const user = profile.user
    // const lastName = "" || profile.user


    // from displayProfileReducers
    const profileFromDisplayProfileReducer = this.props.displayProfile.profiles
    const flagFromDisplayProfileReducer = this.props.displayProfile.flag

    return (
      
      <div>
        <h1> Dashboard </h1>
        {/* <div>Platforms: <span>this is not working {this.props.profile.profile.platforms.map(platform =>{
          return <span>{platform}</span>
        })}</span></div> */}
        {/* <div><span>loading : {this.props.profile.platforms.map(platform => <p>{platform}</p>)}</span></div> */}
        {loading ? (<Loading />) :  <div>{!flagFromDisplayProfileReducer ? 
        <div>
          {displayAllProfiles.map(displayProfile =>{
            return (
              <p>Platforms   : {displayProfile.platforms} <br />
              application  : {displayProfile.application} <br />
              Descriptions   : {displayProfile.descriptions} <br />
              Others   : {displayProfile.others}  <br />
              User  : {displayProfile.user.firstName} </p>
              )
          })}
        </div> :  //"jyoti"}

        //======================================================================
              <div>
                {profiles.map((index, profile)=>{
                  const platforms = profile.platforms
                  const applications = profile.application
                  const descriptions = profile.descriptions
                  const others = profile.others
                  const user = profile.user
                  // this is just for checking
                  // if(!platforms && !applications && !descriptions && !others){
                  //   return ""
                  // }else 
                  return (
                  <div className = 'profile_style'  key = {index}> 
                    <span className = "span_style" key = {index}>
                      {/* index : {index} <br /> */}
                      flag from displayProfile : {flagFromDisplayProfileReducer} <br />
                      Platforms :{this.displayValue(platforms)} <br />
                      Applications : {this.displayValue(applications)}<br />
                      {/* Date : {this.displayDate(date)}<br />
                      Descriptions : {this.displayDescriptions(descriptions)} <br />
                      Others : {this.displayDescriptions(others)}<br />
                      Users : {this.displayUsername(user)} */}
                      Others : {others} <br />
                      Descriptions : {descriptions}<br/>
                      Date : {date}
                </span><hr /></div>)}
              )}</div>  

              //==========================
            }</div>
            }
              <br />
        <button type = "button" className = "btn btn-primary btn-lg md-2" style = {{margin : "20px"}} 
          onClick = {this.props.getCurrentProfile}>Get profile</button><br />

        {/*this is just for testing.*/}
        <button type  = "button" className = "btn btn-danger btn-lg md-2" style = {{margin : "20px"}}
                
          
          >   <Link to  = "/report" onClick = {this.props.displayProfile}>Display profile</Link></button>

          <hr />
        <button type = "button" className = 'btn btn-secondary btn-lg md-2' 
            style = {{margin : "20px"}}><Link to = '/create_profile' >profiles</Link></button>
        <button type = "button" className = 'btn btn-secondary btn-lg md-2' 
            style = {{margin : "20px"}}><Link to = '/create_profile' >Create profile</Link></button>
      </div>
    )
  }
}

const mapStoreToProps = (store) =>{
  return{
    profile : store.profile,
    displayProfile : store.displayProfile
  }
} 

export default connect(mapStoreToProps, {getCurrentProfile, createProfile,
   displayProfile})(withRouter(Dashboard))