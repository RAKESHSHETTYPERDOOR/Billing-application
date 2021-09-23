import { useState } from "react"


const Productform = (props) => {

    const {_id,name:Productname,price:cost,formsubmission} = props
    const [productname,setProductname] =useState(Productname?Productname:'')
    const [price,setPrice] =useState(cost?cost:'')
    const [formerrors,setFormerrors] =useState({})

    const errors = {}

    const runvalidation = () =>{
        if(productname.length === 0){
            errors.productname = 'produtname cannot be empty'
        }
        if(price.length === 0){
            errors.price = 'price cannot be empty'
        }
    }

    const handlechange = (e) =>{
    if(e.target.name === 'productname'){
        setProductname(e.target.value)}
        if(e.target.name === 'price'){
            setPrice(e.target.value)
        }
    
    }

    const handlesubmit = (e) =>{
      e.preventDefault()
      runvalidation()
      const formdata = {
          name:productname,
          price:price
      }
      if(Object.keys(errors).length === 0){
          setFormerrors({})
          formsubmission(_id,formdata)
          setProductname('')
          setPrice('')
      }else {
          setFormerrors(errors)
      }

    }

    const formstyle ={
        paddingTop:'30px',
        marginLeft:'1070px'
    }

    const formstyle1 = {
        paddingTop:"30px"
    }


    return(
        <div>
         <form onSubmit={handlesubmit} class="container-fluid" style={Productname ? formstyle1:formstyle}>
           <h1 style={{color:'blue'}}>{Productname?'Edit Product':'Add Product'}</h1>  
           <input type ='text' placeholder='productname' name='productname' onChange={handlechange} value={productname} class="form-control" style={Productname?{width:'200px',display:'block'}:{width:'250px',display:'inline'}}/> {formerrors.productname ? <span style={{color:'red'}}> <br/> {formerrors.productname}</span>:null}  <br/> 
           <input type='text' placeholder='price' name='price' value={price} onChange={handlechange} class="form-control" style={Productname?{width:'200px',display:'block'}:{width:'250px',display:'inline'}}/> <br/> {formerrors.price ? <span style={{color:'red'}}>{formerrors.price}</span>:null} <br/>
           <input type='submit' value={Productname ?'update' :'add'} class="btn btn-primary" style={{width:"70px"}}/>
         </form>
        </div>
    )
}
export default Productform
