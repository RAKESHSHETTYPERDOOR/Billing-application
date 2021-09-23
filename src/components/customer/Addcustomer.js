import Customerform from "./Customerform"
import { addcustomer } from "../../actions/customerActions"
import { useDispatch } from "react-redux"

const Addcustomer = () =>{
 
 const dispatch =useDispatch()   

 const formsubmission =(id,data) =>{
     dispatch(addcustomer(data))
 }

    return (
         <div>
            <Customerform formsubmission={formsubmission}/>
         </div>
    )
}
export default Addcustomer