import { useState } from "react"
import { register}  from "../../actions/authActions"
import { useDispatch } from "react-redux"
import validator from "validator"



const Register = (props) =>{
    const [username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [business,setBusiness]=useState('')
    const [address,setAddress] = useState('')
    const [formerrors,setFormerrors] = useState({})

    const errors = {}
    const dispatch = useDispatch()

    const runvalidations = () =>{
        if(username.trim().length === 0){
            errors.username = 'name cannot be blank'
        }if(email.length === 0){
            errors.email = 'email cannot be blank'
        }else if(!validator.isEmail(email)){
            errors.email ='Invalid email format'
        }
        if(password.length === 0 ){
          errors.password ='password cannot be blank'
        }else if(password.length <8){
            errors.password = 'password must be between 8-128 charcters'
        }
        if(business.length === 0){
            errors.business = 'business cannot be blank'
        }if(address.length === 0){
            errors.address = 'address cannot be blank'
        }
    }
  
     const handeredirect = () =>{
         return (props.history.push('/login'))
     } 



    const handlesubmit =(e) =>{
        e.preventDefault()
        runvalidations()
        const formdata = {
            username:username,
            email:email,
            password:password,
            businessName:business,
            address:address,
        }
        if(Object.keys(errors).length === 0){
            dispatch(register(formdata,handeredirect))
            setFormerrors({})
        }else{
            setFormerrors(errors)
        }
      
       
    }
    
    const handlechange =(e) =>{
      if(e.target.name === 'username'){
          setUsername(e.target.value)
      }if(e.target.name === 'email'){
          setEmail(e.target.value)
      }if (e.target.name === 'password'){
          setPassword(e.target.value)
      }if (e.target.name === 'address'){
          setAddress(e.target.value)
      }if (e.target.name === 'business'){
          setBusiness(e.target.value)
      }
    }

    const style={
        marginLeft:'20%',
        padding:'40px',
        background:"white",
        paddingLeft:"330px",
        allignItems:'center',
        top:'50%',
        marginTop:"40px",
        marginBottom:"200px",
        marginRight:"250px",
        boxShadow:"0 0 10px 0"
    }

  return(
      <div style={style}>
         <form onSubmit={handlesubmit}>
           <h1 style={{color:'blue'}}>Register</h1>  
           <input type ='text' 
           class="form-control"
           style={{width:'250px'}}
           onChange={handlechange} 
           name='username'
           value={username}
           placeholder='username'/> 
           <span style={{color:'red'}}>{formerrors.username}</span>  <br/>
           <input type='text' onChange={handlechange} name='email' value ={email} placeholder='email'  class="form-control"
           style={{width:'250px'}}/> 
           <span style={{color:'red'}}>{formerrors.email}</span>  <br/>   
           <input type='password' onChange={handlechange} name='password' value={password} placeholder='password'  class="form-control"
           style={{width:'250px'}}/>  
           <span style={{color:'red'}}>{formerrors.password}</span><br/>
           <textarea    onChange={handlechange} name='business' value={business} placeholder='businessname'  class="form-control"
           style={{width:'250px'}}/>
           <span style={{color:'red'}}>{formerrors.business}</span>  <br/>
            <br/>
           <textarea  onChange={handlechange} name='address' value ={address} placeholder='address'  class="form-control"
           style={{width:'250px'}}/> <br/>
           <span style={{color:'red'}}>{formerrors.address}</span><br/>
           <input type='submit' value='Register'  class="btn btn-primary"/>
         </form>
      </div>
  )
}
export default Register