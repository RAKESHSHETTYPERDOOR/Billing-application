import axios  from "../config/axiosConfig";
import swal from 'sweetalert'

export const register = (data,redirect)=>{
  
    return (dispatch)=>{
        axios.post('/users/register',data)
        .then((Response)=>{
            const data=(Response.data)
            console.log('register',data)
            if(data?.keyValue?.username){
              swal("sorry!, This username is already exists")
            }else if(data?.keyValue?.email) {
              swal("sorry!, This email is already exists")
            }else {
              redirect()
            }
            
        })
        .catch((err)=>{
            alert(err.message)
        })
      }
    }



export const login = (data,hanldelogin,handeredirect)=>{
  return(dispatch)=>{
      axios.post('/users/login',data)
      .then((response)=>{
        const data=response.data
        if(data.hasOwnProperty('errors')){
          swal('invalid email id or password')
        }else {
        swal('sucessfully logged in')
        hanldelogin()
        handeredirect()  
        console.log('token',response.data.token)
       localStorage.setItem('token',response.data.token)
        }
        
      })
      .catch((err)=>{
        alert(err.message)
      })
  }
}

export const getaccount = ()=>{
  return (dispatch)=>{
        axios.get('/users/account',{
          headers:{
            Authorization:`Bearer ${localStorage.getItem('token')}`
          }
        })
        .then((response)=>{
          console.log(response.data)
           dispatch(account(response.data))
        })
        .catch((err)=>{
          alert(err.message)
        })
  }
}

const account = (data)=>{
  return {
    type:"GET_ACCOUNT",
    payload:data
  }
}