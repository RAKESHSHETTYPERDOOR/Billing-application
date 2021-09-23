import { useState } from "react"
import EditProdut from './EditProduct'
import { useDispatch,useSelector } from "react-redux"
import { deleteproduct } from "../../actions/productActions"
import Modal from 'react-modal'


const ProductItem = (props) =>{
  const {_id,name,price} = props
  const [data,setdata] =useState({})
  const [search,setSearch] =useState('')
  const [toggle,setToggle] =useState(false)
  const [modalIsOpen,setOpen] =useState(false)


  const products = useSelector((state)=>{
    return state.products.reverse().filter((ele)=>{
      if(ele.name.includes(search)){
          return {...ele}
      }
  })
  })
  
  const dispatch =useDispatch()
  const handletoggle =(id,name,price)=>{
      setdata({
        id:id,
        name:name,
        price:price
      })
      setToggle(!toggle)
      setOpen(!modalIsOpen)
  }
  const handledelete = (_id) =>{
   dispatch(deleteproduct(_id))
} 

const handlechange = (e)=>{
  setSearch(e.target.value)
} 


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

    return(
        <div>
         
          {
            toggle ?
            <div>
               <Modal isOpen={modalIsOpen} style={customStyles}>         
                  <EditProdut
                  _id={data.id?data.id:''}
                  name={data.name?data.name:''}
                  price={data.price?data.price:''}
                  handletoggle={handletoggle}
                  />
               <button onClick={handletoggle} class="btn btn-danger" style={{marginTop:'20px',width:'80px'}}>Cancel</button>
               </Modal>
               </div>:
               <div class="container-fluid" style={{width:'70%',marginTop:'-180px',marginRight:'400px'}}> 
                <input type="text" value={search} onChange={handlechange} placeholder='search' class="form-control" style={{width:'240px'}}/>
               <h1 style={{color:'blue'}}>Total-Proudcts-{products.length}</h1>
                 <table class="table table-ligth table-striped">
                  <thead>
                      <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Delete</th>
                        <th>Edit</th>
                      </tr>
                  </thead>
                  <tbody>
                    {products.map((ele)=>{
                       return (
                         <tr>
                           <td>{ele.name}</td>
                           <td>{ele.price}</td>
                           <td><button class="btn btn-danger" onClick={()=>{handledelete(ele._id)}}>Delete</button></td>
                           <td><button onClick={()=>{handletoggle(ele._id,ele.name,ele.price)}} class="btn btn-primary">Edit</button></td>
                         </tr>
                       )
                    })}
                  </tbody>
                 </table>
             </div>
          }
        </div>
    )
}
export default ProductItem