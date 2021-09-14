import {useSelector,useDispatch} from 'react-redux'
import DisplayAll from './DisplayAll'
import { useEffect, useState } from 'react'
import { allbill, deletebill } from '../../actions/billsaActions'
import Modal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width:'700px',
    transform: 'translate(-50%, -50%)',
  },
};


const Allbills = ()=>{

  const [open,setOpen] =useState(false)
  const [items,setItems] =useState([])


 const dispatch = useDispatch()

 useEffect(()=>{
 if(localStorage.getItem('token')){
   dispatch(allbill())
 }
 },[])

 const allbills = useSelector((state)=>{
     return state.allbills.reverse()
 })

 const customers = useSelector((state)=>{
     return state.customers
 })

 const products = useSelector((state)=>{
     return state.products
 })

 let prod = []
 let cust = []

 const displayprod = (id)=>{
     prod = products.filter((ele)=>{
         return ele._id === id
     })
      return prod.length >=1 && prod[0].name
 }

 const displaycust = (id)=>{
     console.log(id)
     cust =customers.filter((ele)=>{
         return ele._id === id
     })
     return cust.length >=1 && cust[0].name
 }

 const handledelte = (id) =>{
     console.log('delete_id',id)
    dispatch(deletebill(id))
 }

 const viewddetails = (details) =>{
   console.log(details)
   setOpen(true)
   details.length >=1 && setItems(details)

 }
 

    return (
          <div class="container">
              <table class="table table-ligth table-striped" style={{width:'80%'}}>
                <thead >
                   <tr>
                       <th>Name</th>
                       <th>Date</th>
                       <th>View details</th>
                       <th>Total</th>
                       <th>Delete</th>
                   </tr>
                </thead>
                <tbody>
                    {allbills.map((ele,i)=>{
                      return (
                        <tr key={i}>
                          <td>{displaycust(ele.customer)}</td>
                          <td>{ele.date.slice(0,10).split('-').reverse().join('-')}</td>
                           <td><button onClick={()=>{viewddetails(ele.lineItems)}} class="btn btn-primary">View details</button></td> 
                           <td>{ele.total}</td>            
                           <td><button onClick={()=>{handledelte(ele._id)}} class='btn-danger'>Delete</button></td>
                    </tr>    
                     )
                    })}
                </tbody>
              </table>
              <Modal isOpen={open} style={customStyles}>
                  { items.map((prod,i)=>{
                     return (
                       <div key={i}>
                       <h1>Product {displayprod(prod.product)}</h1>
                       <h4>Quantity {prod.quantity}</h4>
                       <h4>Price {prod.price}</h4>
                      </div>   
                     )
                  }) }
                    
                    <button onClick={()=>{setOpen(false)}} class="btn btn-danger">Close</button>
              </Modal>
          </div>
    )
}
export default Allbills