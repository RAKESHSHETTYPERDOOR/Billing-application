import Customerform from "./Customerform"
import { useDispatch } from "react-redux"
import { editcustomer } from "../../actions/customerActions"
import Modal from 'react-modal'


const EditCustomer = (props) =>{
  const {_id,name,mobile,email,user,handletoggle} = props
  const dispatch =useDispatch()

  const formsubmission =(_id,data) =>{
    dispatch(editcustomer(_id,data)) 
    handletoggle()  
  }
    return(
        <div>
         
         <Customerform
           _id={_id}
           name={name}
           mobile={mobile}
           email={email}
           formsubmission = {formsubmission}
           /> 
        </div>
    )
}
export default EditCustomer