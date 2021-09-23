import Productform from "./Productform"
import { useDispatch } from "react-redux"
import { addproduct } from "../../actions/productActions"


const Addproduct = () =>{
   
    const dispatch =useDispatch()
  
    const formsubmission = (id,data) => {
      dispatch(addproduct(data))
    }
    return(
      <div>
        <Productform formsubmission={formsubmission}/>
      </div>
    )
}
export default Addproduct