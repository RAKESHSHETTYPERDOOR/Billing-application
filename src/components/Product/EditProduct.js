import { useDispatch } from "react-redux"
import Productform from "./Productform"
import { editproduct } from "../../actions/productActions"

const EditProduct = (props) =>{

   const {_id,name,price,handletoggle}=props
   const dispatch =useDispatch()

   const formsubmission = (id,data) =>{
     dispatch(editproduct(id,data))
     handletoggle()
   }


    return(
        <div>
           <Productform 
           _id={_id}
           name={name}
           price={price}
           formsubmission={formsubmission}
           />
        </div>
    )
}
export default EditProduct