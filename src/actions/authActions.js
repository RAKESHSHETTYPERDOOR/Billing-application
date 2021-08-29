import axios  from "axios";

export const register = (data,redirect)=>{
  
    return (dispatch)=>{
        axios.post('http://dct-billing-app.herokuapp.com/api/users/register',data)
        .then((Response)=>{
            console.log(Response.data)
            redirect()
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}

export const login =(data,hanldelogin,handeredirect)=>{
  return(dispatch)=>{
      axios.post('http://dct-billing-app.herokuapp.com/api/users/login',data)
      .then((response)=>{
        hanldelogin()
        handeredirect()  
        console.log(response.data)
      })
      .catch((err)=>{
        alert(err.message)
      })
  }
}