import { useState } from "react"
import EditCustomer from "./EditCustomer"
import { useDispatch } from "react-redux"
import { deletecustomer } from "../../actions/customerActions"
import Modal from  'react-modal'
import CustomerTable from "./CustomerTable"
const CustomerItem = (props) =>{
  const {_id,name,mobile,email,user} = props
  const [toggle,setToggle] = useState(false)
  const [modalIsOpen,setOpen] =useState(false)
  const dispatch = useDispatch()
  const handledelete = (id) =>{
      dispatch(deletecustomer(id))
  }

  const handtoggle = () =>{
      setToggle(!toggle)  
      setOpen(!modalIsOpen)
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
        <div class="container-fluid">
            {
                toggle ?
                <div>
              <Modal isOpen={modalIsOpen} style={customStyles}>
                  <h1 style={{color:'blue'}}>Edit-customer</h1>
                   <EditCustomer
                   _id={_id}
                    name={name}
                    mobile={mobile}
                    email={email}
                    user={user}
                    handletoggle={handtoggle}
                   />
                   <button onClick={handtoggle} class="btn btn-danger" style={{marginTop:'20px',width:'80px'}}>Cancel</button>
                   </Modal> 
               </div>
             
                :
                <div class="container-fluid" style={{width:'70%'}}>
                <table class="table table-ligth table-striped">
                   <tbody>
                       <tr >
                          <td><b>Name-</b>{name}</td>
                          <td><b>Email</b>-{email}</td>
                          <td><button onClick={()=>{handledelete(_id)}} class="btn btn-danger">Delete</button></td>
                          <td><button onClick={handtoggle} class="btn btn-primary" >Edit</button></td>
                       </tr>
                   </tbody>
                </table>
                </div>
                   
            }
            </div>
        </div>
    )
}
export default CustomerItem
