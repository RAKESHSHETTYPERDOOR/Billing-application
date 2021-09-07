import React from 'react'
import Addproduct from './Addproduct'
import ProductList from './ProductList'
import { useDispatch } from 'react-redux'
import { getcustomers } from '../../actions/customerActions'
import { getProduct } from '../../actions/productActions'

const Product = (props) =>{
 
    const dispatch =useDispatch()

    if(localStorage.getItem('token')){
       dispatch(getcustomers())
       dispatch(getProduct())
    }

    return(
        <div>
          <Addproduct/>
          <ProductList/>
       </div>
    )
}
export default Product