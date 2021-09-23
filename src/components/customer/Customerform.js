import { useState } from "react"
import validator from "validator"



const Customerform = (props) => {
  const {_id,name:user,mobile:userphone,email:useremail,formsubmission} = props
  console.log('mobile-number',userphone)

  const [name,setName]   = useState(user? user: '')
  const [email,setEmail] = useState(useremail?useremail:'')
  const [phone,setPhone] = useState(userphone?userphone:'')
  const [formerrors,setFormerrors] =useState({})

  

  const errors = {}
  
  const runvalidation =() => {
      if(name.trim().length === 0){
          errors.name = 'name cannot be blank'
      }if(email.trim().length === 0){
          errors.email = 'email cannot be blank'
      }else if(!validator.isEmail(email)){
          errors.email='Invalid email format'
      }
      if(phone.trim().length === 0){
          errors.phone = 'phone cannot be blank'
      }
  }
   
  const handlechange = (e) => {
      if(e.target.name === 'name'){
          console.log(e.target.name)
         
          setName(e.target.value)
      }if(e.target.name === 'email'){
          console.log(e.target.name)
          setEmail(e.target.value)
      }if(e.target.name === 'phone'){
          console.log(e.target.name)
          setPhone(e.target.value)
      }
    }

  const handlesubmit = (e) => {
   e.preventDefault()
   runvalidation()
   if(Object.keys(errors).length === 0){
   const formdata = {
       name:name,
       email:email,
       mobile:phone
   }
   formsubmission(_id,formdata)
   setName('')
   setPhone('')
   setEmail('')
  } 
  else {
    setFormerrors(errors)
 }
}

  const formstyle = {
      paddingTop:'30px',
      marginLeft:'1070px'
  }
  
  const formstyle1 = {
      paddingTop:'30px'
  }
    return(
        <div style={user?formstyle1:formstyle}>
            <h1 style={{color:'blue'}}>{user ? 'Edit Customer' : 'Add Customer'}</h1>
           <div class="mb-3"> 
            <form onSubmit={handlesubmit}> 
              <input type="text" onChange={handlechange}  value={name} class="form-control" placeholder='name'  name='name'  style={user?{width:'200px',display:'block'}:{width:'250px',display:'inline'}}/>  {formerrors.name ?<span style={{color:'red'}}>{formerrors.name}</span>:null}    
              <input type="email"  class="form-control" placeholder='email' name='email'  onChange={handlechange} value={email}  style={user?{width:'200px',display:'block'}:{width:'250px',display:'inline'}}/>  {formerrors.email ?<span style={{color:'red'}}>{formerrors.email}</span>:null}
              <input type="text"  class="form-control" placeholder='phone' name='phone'  onChange={handlechange} value={phone}  style={user?{width:'200px',display:'block'}:{width:'250px',display:'inline'}}/>   {formerrors.phone ?<span style={{color:'red'}}>{formerrors.phone}</span>:null} <br/>
              <input type='submit' value={user ? "update":'add'} class="btn btn-primary" style={{width:"70px"}}/>
            </form>
          </div>  
        </div>
    )
}
export default Customerform