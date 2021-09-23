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
       }else if(!validator.isEmail(email)){
           errors.email ='Invalid email format'
       }
       if(password.length === 0){
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

   const style={
       marginLeft:'25%',
       padding:'40px',
       background:"white",
       paddingLeft:"290px",
       allignItems:'center',
       top:'50%',
       marginTop:"40px",
       marginBottom:"200px",
       marginRight:"240px",
       boxShadow:"0 0 10px 0"
   }

    return (
       <div> 
        <div style={style} >
          <form onSubmit={handlesubmit}>
          <h1 style={{color:'blue'}}>Login</h1>   
             <input type='text' name='email' value ={email} onChange={handlechange} placeholder='email' class="form-control"
           style={{width:'250px'}}/> {formerrors.email && <span  style={{color:'red'}}>{formerrors.email}</span> } <br/>
             <input type='password' name='password' value={password} onChange={handlechange} placeholder='password' class="form-control"
           style={{width:'250px'}}/> {formerrors.password && <span  style={{color:'red'}}>{formerrors.password}</span>} <br/>
             <input type='submit' value='Login'  class="btn btn-primary"/>
          </form>
        </div>
       </div> 
    )
}
export default Login