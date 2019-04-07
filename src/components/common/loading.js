import React from 'react'
import loading from '../../img/loading.gif'
export default function Loading() {
  return (
    <>
      <img src  = {loading}
      alt = 'loading...'
      style = {{width : "110px", borderRadius : "50%", margin : "auto", display : 'block'}} />
    </>
  )
}
