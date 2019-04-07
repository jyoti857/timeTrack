import React from 'react'

const TextGroupField = ({type, placeholder, name, value, onChange, onClick, className}) =>{
  return (
    <div>
      <div className = "form-group">
        <input 
          type={type} 
          className = {className}
          placeholder={placeholder} 
          name={name}
          value = {value} 
          onChange = {onChange}
          onClick = {onClick} />
      </div>
    </div>
  )
}

export default TextGroupField