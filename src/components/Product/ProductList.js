import { useSelector } from "react-redux"
import ProductItem from './ProductItem'
import { useState } from "react"




const ProductList = () =>{
    

    const products =useSelector((state) => {
        return state.products
    })
  
  return(
      <div> 
        <ProductItem/>
      </div>
  )

}
export default ProductList