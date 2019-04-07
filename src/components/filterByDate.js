import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import {getDataFromDate} from '../action/dateActions'
import {inputAll} from '../action/loginActions'

class FilterByDate extends Component {
     // onSubmitDate = _ =>{
    //   axios.get(`localhost:5000/data/${this.props.activity.date}`).then(result => console.log(result))
    //     .catch(err => console.log(err))
    // }
    dataObject = {

    }
    onSubmitByDate = _ =>{
      const date = this.props.activity.date
      const user = {date}
      axios.post("http://localhost:5000/data/data", user)
        .then(data => data.data.data.map(data =>{
          // console.log(data.activity)      
          // this.props.activity.dropdown_value = data.activity
          // this.dataObject['date'] = data.date
          // this.dataObject['id']  = data._id
        }))
    }
  render() {
    return (
      <div>
        <input type = "submit" onClick = {this.props.getDataFromDate} className = "btn btn-default btn-lg m-3" />
        <div> {this.onSubmitByDate()}</div>
        <span>this is : {this.props.activity.dropdown_value}</span>
      </div>
    )
  }
}

const mapPropsToStore  = store =>{
  return{
    activity : store.activityRed
  }
}

export default connect(mapPropsToStore, {getDataFromDate, inputAll})(FilterByDate)