import React, { Component } from 'react'
import '../../styles_S/login.css'

export default class HandleHandle extends Component {

  
  render() {
    return (
      <div>
        {
          this.props.strict ? <HandleInput name = {this.props.name}
                                            value = {this.props.handle}
                                            onChange = {this.props.onChange}/> 

                              : <HandleSpan value = {this.props.handle} />
        }
        
      </div>
    )
  }
}


export const HandleInput = props =>{
  return(
    <>
      <input  className = 'form-control' 
              type = 'text' 
              placeholder = 'handle'
              name = {props.name} 
              value = {props.value} 
              onChange = {props.onChange}
              style = {{width : "15%", margin : " 10px 5px 5px 15px"}}/>
    </>
  )
}


export const HandleSpan = props =>{
  return(
    <>
      <span>{props.value} </span>
    </>
  )
}