import React, { useState } from  'react'
import {login} from '../../actions/authActions'
import validator from 'validator'
import { useDispatch } from 'react-redux'



const Login = (props) =>{
   const {handlelogin} = props 
  
   const [email,setEmail]=useState('')
   const [password,setPassword]=useState('')
   const [formerrors,setFormerrors] =useState({})

   const errors = {}

   const dispatch = useDispatch()

   const runvalidations = () =>{
       if(email.length === 0){
           errors.email = 'email cannot be blanks'
       }if(password.length === 0){
           errors.password = 'password cannot be blank'
       }else if (password.length <8){
           errors.password = 'password must be between 8-128 characters'
       }
   }

   const handleredirect=() =>{
     return (props.history.push('/dashboard'))
   }
   
   const handlesubmit = (e) =>{
     e.preventDefault()
     runvalidations()
     const formdata= {
        email:email,
        password:password
    }
     if(Object.keys(errors).length === 0){
         setEmail('')
         setPassword('')
         setFormerrors({})
         dispatch((login(formdata,handlelogin,handleredirect)))
      }else {
          setFormerrors(errors)
      }
    
    
   }
    
   const handlechange = (e) =>{
       if(e.target.name === 'email'){
           setEmail(e.target.value)
       }if(e.target.name === 'password'){
           setPassword(e.target.value)
       }
   }
    return (
        <div>
          <form onSubmit={handlesubmit}>
             <input type='text' name='email' value ={email} onChange={handlechange} placeholder='email'/> {formerrors.email && <span>{formerrors.email}</span> } <br/>
             <input type='password' name='password' value={password} onChange={handlechange} placeholder='password'/> {formerrors.password && <span>{formerrors.password}</span>} <br/>
             <input type='submit' value='Login'/>
          </form>
        </div>
    )
}
export default Login