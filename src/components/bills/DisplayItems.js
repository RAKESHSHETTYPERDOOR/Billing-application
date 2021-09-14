import { useEffect, useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import { delteitems } from "../../actions/billsaActions"


const DisplayItems = (props) => {
    const {status} =props
    
    const dispatch = useDispatch()

    const linesItems  =useSelector((state)=>{
         return state.items
    })
   
    const products =useSelector((state)=>{
        return state.products
    })

    let arr = []

    const displayname = (id)=>{
        arr =products.filter((ele)=>{
            return ele._id === id
        })
        return arr[0].name
    }


    const handledelete =(id)=>{
        console.log(id)
        dispatch(delteitems(id))
    }
  
    return (
         <div>
           {linesItems.length>=1 && !status &&<table class="table table-ligth table-striped">
                <thead>
                  <tr class='table'>
                    <td>Name</td>
                    <td>Quantity</td>
                    <td>Price</td>
                    <td>Total</td>
                  </tr>
                </thead>
                <tbody>
                    {
                        linesItems.map((ele,i)=>{
                            return (<tr key={i}>
                                     <th>{displayname(ele.product)}</th>
                                     <th>{ele.quantity}</th>
                                     <th>{arr[0].price}</th>   
                                     <th>{arr[0].price*parseInt(ele.quantity)}</th>      
                                     <th><button onClick={()=>{handledelete(ele.product)}} class="btn btn-danger"  >Delete</button></th>                              
                                  </tr>)
                        })
                    }
                 </tbody>
             </table>}
 


         </div>
    )
   
    
}
export default DisplayItems