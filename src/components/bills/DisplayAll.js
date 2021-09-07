import {useSelector,useDispatch} from 'react-redux'
import { deletebill } from '../../actions/billsaActions'


const DisplayAll = (props)=>{
   const {allbill} =props
   const dispatch =useDispatch()
   console.log('display-all',allbill)
   const customers = useSelector((state)=>{
       return state.customers
   })

   const products = useSelector((state)=>{
       return state.products
   })
  
   let cust = []
   let prod = []
 
   const displaycust =(id)=>{
     let customer = customers.filter((ele)=>{
         return ele._id === id
     })
     return customer[0].name
   }

   const displayprod = (id)=>{
        prod =products.filter((ele)=>{
            return ele._id === id
        })
        return prod[0].name
   }


   const handledelete =(id)=>{
       dispatch(deletebill(id))
   }


    return(
        <div>
            <h3>{displaycust(allbill.customer)}</h3>
            {allbill.lineItems.map((ele)=>{
                return (
                  <div>
                   <p>Product-{displayprod(ele.product)}</p>
                   <p>Quantity-{ele.quantity}</p>
                   <p>price-{prod[0].price}</p>
                   <p>Subtotal-{prod[0].price* parseInt(ele.quantity)}</p>
                  </div>
                )
            })}
            <h4>{allbill.total}</h4>
            <button onClick={()=>{handledelete(allbill._id)}}>Delete</button><hr/>
        </div>
    )
}
export default DisplayAll