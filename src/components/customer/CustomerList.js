import { useSelector } from "react-redux"
import CustomerItem from "./CustomerItem"
import { useState } from "react"

const CustomerList = () =>{
    
   
    const customers =useSelector((state)=>{
        return state.customers
    })
    console.log('component',customers)

    
    return (
        <div>
           
            <h1 style={{marginLeft:'650px',color:'blue'}}>Total-Customers-{customers.length}</h1>
            <CustomerItem/>
        </div>
    )
}
export default CustomerList