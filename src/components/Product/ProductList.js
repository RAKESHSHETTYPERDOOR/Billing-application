import { useSelector } from "react-redux"
import ProductItem from './ProductItem'
import { useState } from "react"




const ProductList = () =>{
    const [search,setSearch] =useState('')
   
    const products =useSelector((state)=>{
        return state.products.filter((ele)=>{
            if(ele.name.includes(search)){
                return {...ele}
            }
        })
    })

  
  const handlechange = (e)=>{
    setSearch(e.target.value)
  }  

  
  return(
      <div>
          <input type="text" value={search} onChange={handlechange} placeholder='search' class="form-control" style={{width:'250px',marginLeft:'700px'}}/>
          <h1 style={{marginLeft:'680px',color:'blue'}}>Total-Proudcts-{products.length}</h1>
          {products.map((ele,i)=>{
              return (
                  <ProductItem key={i} {...ele}/>
              )
          })}
      </div>
  )

}
export default ProductList