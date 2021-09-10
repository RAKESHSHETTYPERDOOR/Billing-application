import axios from "axios";


export const additems = (data)=>{
    return{
        type:"ADD_LINEITEMS",
        payload:data
    }
}

export const delteitems = (id)=>{
    return{
        type:"DELETE_ITEMS",
        payload:id
    }
}

export const addbill = (data)=>{
 return (dispatch)=>{
     axios.post('http://dct-billing-app.herokuapp.com/api/bills/',data,{
         headers:{
            Authorization:`Bearer ${localStorage.getItem('token')}`
         }
     })
     .then((response)=>{
        dispatch(addbills(response.data))
        console.log('server-bill-add',response.data)
     })
     .catch((err)=>{
         alert(err.message)
     })
 }
}


export const allbill = ()=>{
  return (dispatch) =>{
    axios.get('http://dct-billing-app.herokuapp.com/api/bills/',{
        headers:{
            Authorization:`Bearer ${localStorage.getItem('token')}`
        }
    })
    .then((response)=>{
        console.log('all-bills',response.data)
        dispatch(allbills(response.data))
       
    })
    .catch((err)=>{
        alert(err.message)
    })
      
  }

}

export const deletebill = (id)=>{
    return (dispatch)=>{
        dispatch(deletebills(id))
     axios.delete(`http://dct-billing-app.herokuapp.com/api/bills/${id}`,{
         headers:{
             Authorization:`Bearer ${localStorage.getItem('token')}`
         }
     })
     .then((response)=>[
         console.log('all-delete',response.data)
     ])

    }
}


const addbills =(data)=>{
  return {
      type:"ADD_BILLS",
      payload:data
  }
}

const allbills = (data)=>{
  return {
      type:'ALL_BILLS',
      payload:data
  }
}

const deletebills= (id) => {
    return {
        type:'DELETE_BILLS',
        payload:id
    }
}