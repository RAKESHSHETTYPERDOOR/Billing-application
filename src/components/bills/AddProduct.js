import { useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { additems } from "../../actions/billsaActions"
import DisplayItems from "./DisplayItems"
import swal from 'sweetalert'




const AddProduct = () =>{

 const [product,setProduct] =useState('')
 const [quantity,setQuantity] =useState(0)
 const [status,setStatus]=useState(false)
 
 const dispatch =useDispatch()

 const products = useSelector((state)=>{
    return state.products
})

const addcart = () => {
    
        dispatch(additems({
            product:product,
            quantity:quantity
        }))
        setProduct('')
        setQuantity(0)
        setStatus(true) 
}

 const handlesubmit = (e)=>{
     e.preventDefault()
 }
 
 const handlechange = (e)=>{
     setProduct(e.target.value)
 }


    return(
        <div>
            {/* <h1>SELECT-PRODUCT</h1> */}
            <select onChange={handlechange} value={product}>
             <option value="">Select-Product</option>
              {products.map((ele,i)=>{
                 return <option value={ele._id} key={i} >{ele.name}</option>
              })}
           </select>        
           <button onClick={()=>{setQuantity(quantity-1)}}>-1</button>  <button onClick={()=>{setQuantity(quantity+1)}}>+1</button>
           <button onClick={()=>{addcart()}}>Add</button>
        </div>
    )
}
export default AddProduct