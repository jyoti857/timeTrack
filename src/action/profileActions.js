import {GET_PROFILE, PROFILE_LOADING, CLEAR_CURRENT_PROFILE, GET_ERRORS, 
  GET_ALL_PROFILE} from './types'

import axios from 'axios'

// Get Current profile
export const getCurrentProfile = () => dispatch =>{
  dispatch(setProfileLoading())
  console.log("this is from getcurrent profile function")
  axios.get('http://localhost:5000/profile/api/test')
    .then(response =>{
      console.log(response)
      dispatch({
        type : GET_PROFILE,
        payload : response.data 
      })}
    ).catch(err =>  // If no profile presents 
      dispatch({
        type : GET_PROFILE,  
        payload : {}
      })  
    )
  }

  // display all profiles of a user
export const displayProfile = ()  => dispatch => {
  dispatch(setProfileLoading())
  console.log("this shows all profile for a user.", )
  axios.get("http://localhost:5000/profile/api/all1/")
    .then(response => {
      console.log(response)
      dispatch({
      type : GET_ALL_PROFILE,
      payload : response.data.jyoti   //  is not working, dont know why?
    })}
  ).catch(err =>dispatch({
      type : GET_ALL_PROFILE,
      payload : {}
   }) 
  )
} 


//Profile loading
export const setProfileLoading = () =>{
  return{
    type : PROFILE_LOADING
  }
}

// clear current profile
export const clearCurrentProfile = () =>{
  return {
    type : CLEAR_CURRENT_PROFILE
  }
}

// update current user profile
 export const updateProfile = (profileData, history) => dispatch =>{
   axios.post('http://localhost:5000/profile/api/update_profile', profileData)
    .then(response => {
      console.log(response.data)
      history.push('/dashboard')
    })
    .catch(err =>{
      dispatch({
        type : GET_ERRORS,
        payload : {}
      })
  })
}

// create a profile
export const createProfile = (profileData, history) => dispatch =>{
  axios.post('http://localhost:5000/profile/api/create_profile', profileData)
    .then(response => {
      console.log(response)
      history.push('/dashboard')
    })
    .catch(err => {
      dispatch({
        type : GET_ERRORS,
        payload : {}
      })
    })
}

