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
     return state.customers
  })

  const products = useSelector((state)=>{
    return state.products
  })

  const allbills = useSelector((state)=>{
    return state.allbills
  })


    return(
        <div>
          <h1>Customers-{customers.length}</h1>
          <h1>Products-{products.length}</h1>
          <h1>All-Bills-{allbills.length}</h1>
        </div>
    )
}
export default Dashboard