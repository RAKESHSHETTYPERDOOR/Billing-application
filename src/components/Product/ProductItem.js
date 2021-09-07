import { useState } from "react"
import EditProdut from './EditProduct'
import { useDispatch } from "react-redux"
import { deleteproduct } from "../../actions/productActions"
import Modal from 'react-modal'


const ProductItem = (props) =>{
  const {_id,name,price} = props
  const [toggle,setToggle] =useState(false)
  const [modalIsOpen,setOpen] =useState(false)
  
  const dispatch =useDispatch()
  const handletoggle =()=>{
      setToggle(!toggle)
      setOpen(!modalIsOpen)
  }
  const handledelete = (_id) =>{
   dispatch(deleteproduct(_id))
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
                  <h1 style={{color:'blue'}}>Edit-customer</h1>
                  <EditProdut
                  _id={_id}
                  name={name}
                  price={price}
                  handletoggle={handletoggle}
                  />
               <button onClick={handletoggle} class="btn btn-danger" style={{marginTop:'20px',width:'80px'}}>Cancel</button>
               </Modal>
               </div>:
               <div class="container-fluid" style={{width:'70%'}}> 
                 <table class="table table-ligth table-striped">
                 <tbody>
                <tr>
                  <td><b>Name-{name}</b></td>
                  <td><b>Name-{name}</b></td>
                  <td><button onClick={()=>{handledelete(_id)}} onClick={()=>{handledelete(_id)}} class="btn btn-danger">Delete</button></td>
                  <td><button onClick={handletoggle} class="btn btn-primary">Edit</button></td>
                </tr>
                </tbody>
               </table>
             </div>
          }
        </div>
    )
}
export default ProductItem