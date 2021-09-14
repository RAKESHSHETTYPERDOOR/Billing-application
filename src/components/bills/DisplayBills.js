import React from 'react'
import {useSelector} from 'react-redux'
import Pdf from 'react-to-pdf' 

const DisplayBills = ()=>{
   
    const products = useSelector((state)=>{
        return state.products
    })

    const customers = useSelector((state)=>{
        return state.customers
    })

    const bills =useSelector((state)=>{
      return state.bills
    })

    const ref =React.createRef()

   let cust = []
   let prod = []

   const displayproduct =(id) => {
      prod= products.filter((ele)=>{
           return ele._id === id
       })
      return prod[0].name
   }

   const displaycustomer = (id)=>{
       console.log(id)
       cust = customers.filter((ele)=>{
           return ele._id === id
       })
      return cust[0].name
   }


    return(
        <div>
            <div ref={ref}>
            { bills.length>=1 &&
            
            <div>
                {bills.map((ele,i)=>{
                    return (
                        <div key={i}>
                            <h2 style={{color:'blue'}}>Customer-{displaycustomer(ele.customer)}</h2>
                            <h2 style={{color:'blue'}}>Date - {ele.date.slice(0,10).split('-').reverse().join('-')}</h2>
                         </div>   
                        
                    )
                })}
            
            <table class="table table-ligth table-striped">
                <thead >
                     <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Sub-Total</th>
                     </tr>
                </thead>
                <tbody>
                   {
                    bills[0].lineItems.map((ele,i)=>{
                        return (
                            <tr key={i}>
                            <td>{displayproduct(ele.product)}</td>
                            <td>{ele.quantity}</td>
                            <td>{prod[0].price}</td>
                            <td>{prod[0].price*parseInt(ele.quantity)}</td>
                            
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
            </div>}
            {bills.map((ele)=>{
                return (
                    <h3 style={{color:'red'}}>Total-{ele.total}</h3>
                )
            })}
            </div>
           { bills.length >=1 &&<Pdf targetRef={ref} filename="code-example.pdf">
            {({ toPdf }) => <button onClick={toPdf} class="btn-primary">Download Pdf</button>}
          </Pdf> }
          
        </div>
    )
}
export default DisplayBills