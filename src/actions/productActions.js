import axios from 'axios'

export const getProduct = ()=>{
  return(dispatch)=>{
      axios.get('https://dct-billing-app.herokuapp.com/api/products',{
          headers:{
              Authorization:`Bearer ${localStorage.getItem('token')}`
          }
      })
      .then((response)=>{
          console.log('get',response.data)
          dispatch(getproduct(response.data))
      })
      .catch((err)=>{
          alert(err.message)
      })
  }
}

export const addproduct =(data)=>{
  return(dispatch)=>{
    axios.post('https://dct-billing-app.herokuapp.com/api/products',data,{
        headers:{
            Authorization:`Bearer ${localStorage.getItem('token')}`
      }
    })
    .then((response)=>{
        dispatch(startaddproduct(response.data))
    })
    .catch((err)=>{
        alert(err.message)
    })
  }
}

export const deleteproduct = (id)=>{
    return(dispatch)=>{
        dispatch(startdeleteproduct(id))
        axios.delete(`https://dct-billing-app.herokuapp.com/api/products/${id}`,{
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

export const editproduct = (id,data)=>{
    return(dispatch)=>{
        dispatch(starteditproduct(id,data))
        axios.put(`https://dct-billing-app.herokuapp.com/api/products/${id}`,data,{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response)=>{
            console.log(response.data)
        })
    }
}

const getproduct = (data) =>{
  return {
      type:'GET_PRODUCTS',
      payload:data
  }
}

const startaddproduct = (data)=>{
    return{
        type:"ADD_PRODUCT",
        payload:data
    }
}


const startdeleteproduct = (id)=>{
    return{
        type:'DELETE_PRODUCT',
        payload:id
    }
}

const starteditproduct = (id,data)=>{
    return{
        type:"EDIT_PRODUCT",
        payload:{
            id:id,
            data,data
        }
    }
}