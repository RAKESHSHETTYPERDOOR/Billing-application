import { useSelector } from "react-redux"
import CustomerItem from "./CustomerItem"
import { useState } from "react"

const CustomerList = () =>{
    const [search,setSearch] =useState('')
   
    const customers =useSelector((state)=>{
        return state.customers.filter((ele)=>{
            if(ele.name.includes(search)){
                return {...ele}
            }
        })
    })
    console.log('component',customers)

    const handlechange =(e)=>{
        setSearch(e.target.value)
    }
    return (
        <div>
            <input type="text" value={search} onChange={handlechange} class="form-control" placeholder="Search" style={{width:'250px',marginLeft:'700px'}}/>
            <h1 style={{marginLeft:'650px',color:'blue'}}>Total-Customers-{customers.length}</h1>
            {
                customers.map((ele,i)=>{
                    return (
                     <CustomerItem {...ele} key={i}/>        
                    )
                })
            }
        </div>
    )
}
export default CustomerList