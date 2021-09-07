import { useState } from "react"
import { useDispatch } from "react-redux"
import validator from "validator"



const Customerform = (props) =>{
    const {_id,name:user,email:useremail,mobile:userphone,formsubmission} = props

  const [name,setName] = useState(user?user:'')
  const [email,setEmail] = useState(useremail?useremail:'')
  const [phone,setPhone] = useState(userphone?userphone:'')
  const [formerrors,setFormerrors] =useState({})

  const dispatch = useDispatch()
  const errors={}
  
  const runvalidation =() =>{
      if(name.trim().length === 0){
          errors.name = 'name cannot be blank'
      }if(email.trim().length === 0){
          errors.email = 'email cannot be blank'
      }else if(!validator.isEmail(email)){
          errors.email='Invalid email format'
      }
      if(phone.trim().length === 0){
          errors.phone ='phone cannot be blank'
      }
  }
   
  const handlechange = (e)=>{
      if(e.target.name === 'name'){
          console.log(e.target.value)
          setName(e.target.value)
      }if(e.target.name === 'email'){
          setEmail(e.target.value)
      }if(e.target.name === 'phone'){
          setPhone(e.target.value)
      }
  }

  const handlesubmit =(e)=>{
   e.preventDefault()
   runvalidation()
   if(Object.keys(errors).length ===0){
   const formdata= {
       name:name,
       email:email,
       mobile:phone
   }
   formsubmission(_id,formdata)
}else {
    setFormerrors(errors)
}
  }

  const formstyle ={
      paddingTop:'30px'
  }

    return(
        <div class="container-fluid" style={formstyle}>
            <h1 style={{color:'blue'}}>Add-Customer</h1>
            <form onSubmit={handlesubmit} >
              <input type='text' placeholder='name' name='name' onChange={handlechange} value={name} class="form-control" style={{width:'250px'}}/> {formerrors.name&& <span style={{color:'red'}}>{formerrors.name}</span>}
              <input type='text' placeholder='email' name='email' onChange={handlechange} value={email} class="form-control" style={{width:'250px'}}/> {formerrors.email&& <span style={{color:'red'}}>{formerrors.email}</span>}
              <input type='text' placeholder='phone' name='phone' onChange={handlechange} value={phone} class="form-control" style={{width:'250px'}}/>  {formerrors.phone&&<span style={{color:'red'}}>{formerrors.phone}</span>} <br/>
              <input type='submit' value='add' class="btn btn-primary" style={{width:"50px"}}/>
            </form>
        </div>
    )
}
export default Customerform