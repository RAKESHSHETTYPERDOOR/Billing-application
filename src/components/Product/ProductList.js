import { useSelector } from "react-redux"
import ProductItem from './ProductItem'
import { useState } from "react"




const ProductList = () =>{
    

    const products =useSelector((state) => {
        return state.products
    })
  
  return(
      <div> 
        <h1 style={{marginLeft:'680px',color:'blue'}}>Total-Proudcts-{products.length}</h1>
        <ProductItem/>
      </div>
  )

}
export default ProductList