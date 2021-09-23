import { useState } from "react"
import EditCustomer from "./EditCustomer"
import { useDispatch,useSelector} from "react-redux"
import { deletecustomer } from "../../actions/customerActions"
import Modal from  'react-modal'
import CustomerTable from "./CustomerTable"


const CustomerItem = (props) =>{

  const {_id,name,mobile,email,user} = props
  const [data,setdata] =useState({})
  const [search,setSearch] =useState('')
  const [toggle,setToggle] = useState(false)
  const [modalIsOpen,setOpen] =useState(false)
  const dispatch = useDispatch()

  const handledelete = (id) =>{
      dispatch(deletecustomer(id))
  }

  const customers = useSelector((state)=>{
        return state.customers.reverse().filter((ele)=>{
            if(ele.name.includes(search)){
                return {...ele}
            }
        })
  })

  const handtoggle = (id,name,mobile,email,user) => {
      setdata({
          id:id,
          name:name,
          mobile:mobile,
          email:email,
          user:user
      })
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

  const handlechange =(e)=>{
    setSearch(e.target.value)
}


    return(
        <div>
        <div class="container-fluid">
            {
                toggle ?
                <div>
              <Modal isOpen={modalIsOpen} style={customStyles}>
                   <EditCustomer
                   _id={data.id?data.id:""}
                    name={data.name?data.name:''}
                    mobile={data.mobile?data.mobile:''}
                    email={data.email?data.email:''}
                    user={data.user?data.user:''}
                    handletoggle={handtoggle}
                   />
                   <button onClick={handtoggle} class="btn btn-danger" style={{marginTop:'20px',width:'80px'}}>Cancel</button>
                   </Modal> 
               </div>
             
                :
                <div class="container-fluid" style={{width:'70%',marginTop:'-230px',marginRight:'400px'}}>
                 <input type="text" value={search} onChange={handlechange} class="form-control" placeholder="Search" style={{width:'240px'}}/>    
                  <h1 style={{color:'blue'}}>Total-Customers-{customers.length}</h1> 
                 <table class="table table-ligth table-striped">
                 <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Delete</th>
                      <th>Edit</th>
                    </tr>
                 </thead>
                 <tbody>
                    {customers.map((ele)=>{
                      
                     return (
                         <tr>
                          <td>{ele.name}</td>
                          <td>{ele.email}</td>
                          <td><button onClick={()=>{handledelete(ele._id)}} class="btn btn-danger">Delete</button></td>
                          <td><button onClick={()=>{handtoggle(ele._id,ele.name,ele.mobile,ele.email,ele.user)}} class="btn btn-primary">Edit</button></td>
                         </tr>
                     )
                    
                    
                    })} 
                    
                 </tbody>
               </table>
                </div>
                   
            }
            </div>
        </div>
    )
}
export default CustomerItem
