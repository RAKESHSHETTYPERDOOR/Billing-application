import { useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import {withRouter} from 'react-router-dom'
import { addbill } from "../../actions/billsaActions"
import AddProduct from "./AddProduct"
import swal from "sweetalert"
import DisplayItems from "./DisplayItems"
import { additems } from "../../actions/billsaActions"
import DisplayBills from "./DisplayBills"




const Billgenerator = (props) =>{

  const [date,setDate] =useState('')
  const [customer,setcustomers]=useState('')
  const [product,setProduct] =useState('')
  const [quantity,setQuantity] =useState(1)
  const [status,setStatus] =useState(false)

  const dispatch = useDispatch()
  
  
  console.log(date.length)
 
  const customers=useSelector((state)=>{
      return state.customers
  })

  const lineItems = useSelector((state)=>{
     return state.items
  })


  const addcart = () => {
    setStatus(false)
      if(product.length > 1&& quantity>=1){
          dispatch(additems({
              product:product,
              quantity:quantity
          }))
          swal('added to cart sucessfully')
          setProduct('')
          setQuantity(0)
      }
  }
  
 
  const handlesubmit = (e)=>{
    e.preventDefault()
    if(status){
    if(customer.length >=1&&date.length>=10){
    const formdata ={
        date:date,
        customer:customer,
        lineItems:lineItems
   }
    swal('bill generated')
    dispatch((addbill(formdata)))
  }
  }
}

  const handlechange = (e) => {
      setDate(e.target.value)
  }

  const handleselect =(e)=>{
      if(e.target.name === 'customer'){
      console.log(e.target.value)
      setcustomers(e.target.value)
    }
  }

  const handleproduct = (e) => {
    setProduct(e.target.value)
  }


  const products = useSelector((state) => {
    return state.products
})

const handlequantity = () => {
  setQuantity(quantity+1)
  setStatus(false)
}


const quantityminus = ()=>{
  if(quantity<=1){
    setQuantity(1)
  }else {
  setQuantity(quantity-1)
  }
  setStatus(false)
}
  

const billstyle = {
  marginLeft:'25%',
       padding:'40px',
       background:"white",
       paddingLeft:"10px",
       allignItems:'center',
       top:'50%',
       marginTop:"40px",
       marginBottom:"200px",
       marginRight:"240px",
       
  }

    return(
        <div style={billstyle}>
          <h1>Generate A Bill</h1>
            <form onSubmit={handlesubmit}>
              <label>Select Date</label>
                <input type="date" className="form-control"  value={date} onChange={handlechange} style={{border: '1px solid #c4c4c4border: 1px solid #c4c4c4',borderRadius:'5px',backgroundColor:'#fff',width:'190px',color:'black'}}/> <br/>
                 <label>Customers</label> 
                  <select name='customer' value={customer} onChange={handleselect} class="form-select"  style={{width:'150px',we:"10px"}}>
                     <option value="">Select Customer</option>
                     {
                         customers.map((ele,i)=>{
                             return <option value={ele._id} key={i}>{ele.name}</option>
                     })
                    }
                     </select> <br/>
                         <label>Products</label>
                          <select onChange={handleproduct} value={product} class="form-control" style={{width:'150px'}}>
                           <option value="">Select Product</option>
                             {products.map((ele,i)=>{
                               return <option value={ele._id} key={i} >{ele.name}</option>
                             })}
                    </select>  <br/>       
                   <button onClick={quantityminus} class="btn btn-danger" style={{marginRight:'20px'}}>-1</button><b style={{fontSize:"20px"}}>{quantity}</b><button onClick={handlequantity} class="btn btn-primary" style={{marginLeft:'20px'}}>+1</button>
              <button onClick={addcart} style={{marginLeft:'20px'}} class="btn btn-primary" >Add</button>
            <DisplayItems status={status}/>
        <button onClick={()=>{setStatus(true)}} class="btn btn-primary" style={{marginTop:'20px'}}>Generate</button>
    </form>
    <DisplayBills/>
        </div>
   )
}
export default withRouter(Billgenerator)

                
                