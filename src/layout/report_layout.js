import React, {Component} from 'react'
import {
  Layout,
  Header,
  Navigation, Drawer, Content
} from 'react-mdl'
import {Link, NavLink} from 'react-router-dom'
import {Menu} from 'semantic-ui-react'
import '../styles_S/report.css'

import {displayProfile} from '../action/profileActions'
import {connect} from 'react-redux'
import { selectFromDropdown } from '../action/dropdownAction';
import '../styles_S/report.css'
import Loading from '../components/common/loading'
import uuid from "uuid"
import {inputAll} from '../action/loginActions'
import Filter_report_layout from './filter_report_layout';

class  Report_layout extends Component  {
  state = {
    data : [],
    editLocalFlag : false,
  }
  // componentDidMount(){
  //   // const {displayAllProfiles} = this.props.profile
  //   if(!this.props.displayProfile()) {
  //     this.setState({data : []})
  //   }else this.setState({data : this.props.displayProfile()})
  //   console.log("this is from component did", this.state.data)
  // }

  reportSubmit = () => {
    this.setState({data : this.props.displayProfile()})
    // this.state.data.map(m=>console.log(m.descriptions))
    console.log("2389977&*&*#&Q*&#**#&Q*&#*   ",  this.props.profile.displayAllProfiles)
  }

  toggleLocalEdit = () =>{
    this.setState({editLocalFlag : !this.state.editLocalFlag})
  }


  render(){
    const { displayAllProfiles, loading } = this.props.profile
    return (
      <div>

        {/* <div className ="container">
          <div className ="row align-items-start">
            
            <div className ="col">
              Platforms
              
            </div>
            <div className ="col">
              Application
            </div>
            <div className ="col">
              Others
            </div>
            <div className ="col">
              hours
            </div>
            <div className ="col">
              Date
            </div>
          </div>
        </div> */}
       <Filter_report_layout
          date = {this.props.profile.date} />
      
        <table className = 'table'>
              <thead>
                <tr>
                  <th >Platforms</th>
                  <th >Applications</th>
                  <th >Others</th>
                  <th >Date</th>
                  <th >hours</th>
                  <th />
                  <th />
                  <th><button className = "btn btn-secondary btn-sm" onClick = {this.reportSubmit}>Get Report</button></th>
                </tr>
              </thead>
              { loading ? <Loading /> :
              <tbody className = 'tbody'>
                {displayAllProfiles.map(displayAllProfile =>{
                  return !this.editLocalFlag ?  (
                    
                    <tr key = {uuid()}>
                      <td>{displayAllProfile.platforms}</td>
                      <td>{displayAllProfile.application}</td>
                      <td>{displayAllProfile.others}</td>
                      {/* <td>{displayAllProfile.user.firstName}</td> */}
                      <td>{displayAllProfile.date}</td>
                      <td>{displayAllProfile.hours}</td>
                      <td> 
                      </td>
                      <td><button  className = 'btn-primary btn-default btn-sm' onClick = {this.toggleLocalEdit}>Edit</button></td>
                    </tr>): 
                    (<tr>
                      <td><input className = 'form-control' type = 'text' name = 'platforms' value = {displayAllProfile.platforms} onChange = {this.props.inputAll}/></td>
                      <td><input className = 'form-control' type = 'text' name = 'application' value = {displayAllProfile.application} onChange = {this.props.inputAll}/></td>
                      <td><input className = 'form-control' type = 'text' name = 'others' value = {displayAllProfile.others} onChange = {this.props.inputAll}/></td>
                      <td><input className = 'form-control' type = 'text' name = 'date' value = {displayAllProfile.data} onChange = {this.props.inputAll}/></td>
                      <td><input className = 'form-control' type = 'number' name = 'hours' value = {displayAllProfile.hours} onChange = {this.props.inputAll}/></td>
                    </tr>)}
                )}
              </tbody> }
            </table>
    

        {/* <nav className = "navbar navbar-expand-sm navbar-dark bg-dark mb-4">
                <div className = "container">
                  <Menu.Item className = "navbar-brand" to = '/' as = {NavLink}>Jyoti</Menu.Item>
                  <button className = "navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                    <span className = "navbar-toggler-icon"></span>
                  </button>

                  <div className = "collapse navbar-collapse" id="mobile-nav">
                    <ul className = "navbar-nav mr-auto">
                      <li className = "nav-item">
                        <a className = "nav-link" href="profiles.html">
                        report  
                        </a>
                      </li>
                    </ul>
                    
                    <ul className = "navbar-nav ml-auto">
                    
                    </ul>
                  </div>
                </div>
            </nav> */}
      </div>
    )
  }
}

const mapStoreToProps = store =>{
  return{
    profile : store.profile
  }
}
export default connect(mapStoreToProps, {displayProfile, inputAll})(Report_layout)