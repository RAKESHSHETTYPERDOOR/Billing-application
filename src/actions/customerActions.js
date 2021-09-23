import axios from 'axios'

export const getcustomers = () =>{
    return(dispatch)=>{
        axios.get('https://dct-billing-app.herokuapp.com/api/customers',{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
             }
         })
        .then((response)=>{
            console.log(response.data)
            dispatch(startgetcustomers(response.data))
        })
        .catch((err)=>{
         alert(err.message)
        })
    }
}

export const addcustomer = (data)=>{
     
    return (dispatch)=>{
         axios.post('https://dct-billing-app.herokuapp.com/api/customers',data,{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
             }
         })
         .then((response)=>{
          console.log(response.data)
          dispatch(customers(response.data))
         })
         .catch((err)=>{
           alert(err.message)
         })    
    }
} 

export const deletecustomer = (id)=>{
    return (dispatch) =>{
        axios.delete(`https://dct-billing-app.herokuapp.com/api/customers/${id}`,{
         headers:{
             Authorization:`Bearer ${localStorage.getItem('token')}`
         }
        })
        .then((response)=>{
         dispatch(startdeletecustomers(response.data._id))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}


export const editcustomer = (id,data) =>{
    return (dispatch) =>{
        dispatch(starteditcustomers(id,data))
      axios.put(`https://dct-billing-app.herokuapp.com/api/customers/${id}`,data,{
        headers:{
            Authorization:`Bearer ${localStorage.getItem('token')}`
        }
       })
      .then((response)=>{
      console.log(response.data)
      
      })
      .catch((err)=>{
          alert(err.message)
      })
    }   
}


const customers= (data)=>{
    return{
        type:'ADD_CUSTOMER',
        payload:data
    }
}

const startgetcustomers =(data)=>{
    return{
        type:'GET_CUSTOMERS',
        payload:data
    }
}

const startdeletecustomers = (id) =>{
    return{
        type:'DELETE_CUSTOMERS',
        payload:id
    }
}

const starteditcustomers = (id,data)=>{
  return {
      type:"EDIT_CUSTOMERS",
      payload:{
          id:id,
          data:data
      }
  }
}