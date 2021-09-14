import { useSelector,useDispatch } from "react-redux"
import {useEffect} from 'react'
import { getcustomers } from "../../actions/customerActions"
import { getProduct } from "../../actions/productActions"
import { allbill } from "../../actions/billsaActions"

const Dashboard =() =>{
   
  const dispatch =useDispatch()

  useEffect(()=>{
    if(localStorage.getItem('token')){
      dispatch(getcustomers())
      dispatch(getProduct())
      dispatch(allbill())
    }
  },[dispatch])

  const customers =useSelector((state)=>{
     return state.customers.reverse()
  })

  console.log('dashboard',customers.slice(0,3))

  const products = useSelector((state)=>{
    return state.products
  })



  const allbills = useSelector((state)=>{
    return state.allbills
  })

  let total = 0
  const totalincome = allbills.map((ele)=>{
     return total+=ele.total
  }) 

  const display = {
     display:'grid',
     gridTemplateColumns:'30% 30% 30%',
     gridGap:'20px',
     marginTop:'20px',
     marginLeft:'30px'
     
  }

    return(
        <div style={display}>
          
          <h1 style={{color:'black',boxShadow:"0 0 10px 0",height:'200px',padding:'30px'}}>Total-Customers-{customers.length}</h1>
          <h1 style={{color:'black',boxShadow:"0 0 10px 0",height:'200px',padding:'30px'}}>Total-Products-{products.length}</h1>
          <h1 style={{color:'black',boxShadow:"0 0 10px 0",padding:'30px'}}>All-Bills-{allbills.length}</h1>
          <h1 style={{color:'black',boxShadow:"0 0 10px 0",height:'200px',padding:'30px'}}>Total income {total}</h1>
        </div>
    )
}
export default Dashboard