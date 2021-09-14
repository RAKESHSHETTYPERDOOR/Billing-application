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
            <CustomerItem/>
        </div>
    )
}
export default CustomerList