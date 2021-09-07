import { useState } from "react"



const Productform = (props) =>{
    const {_id,name:username,price:cost,formsubmission} =props
    const [productname,setProductname] =useState(username?username:'')
    const [price,setPrice] =useState(cost?cost:'')
    const [formerrors,setFormerrors] =useState({})

    const errors ={}

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
      }if(Object.keys(errors).length >1){
          setFormerrors(errors)
      }

    }

    const formstyle ={
        paddingTop:'30px'
    }


    return(
        <div>
         <form onSubmit={handlesubmit} class="container-fluid" style={formstyle}>
           <h1 style={{color:'blue'}}>Add-Product</h1>  
           <input type ='text' placeholder='productname' name='productname' onChange={handlechange} value={productname} class="form-control" style={{width:'250px'}}/> 
           {formerrors &&<span style={{color:'blue'}}>{formerrors.productname}</span>} <br/>
           <input type='text' placeholder='price' name='price' value={price} onChange={handlechange} class="form-control" style={{width:'250px'}}/> {formerrors&&<span style={{color:'blue'}}>{formerrors.price}</span>} <br/>
           <input type='submit' value='add' class="btn btn-primary" style={{width:"50px"}}/>
         </form>
        </div>
    )
}
export default Productform
