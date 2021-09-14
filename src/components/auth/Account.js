import {useSelector,useDispatch} from 'react-redux'
import {useEffect} from 'react'
import { getaccount } from '../../actions/authActions'

const Account = ()=>{
  
    const dispatch =useDispatch()

    useEffect(() => {
        if(localStorage.getItem('token')){
         dispatch(getaccount())
        }
    },[])
    

  const account = useSelector((state)=>{
      return state.account
  })
 
  
    return (
     
         <div>
               {account.map((ele,i)=>{
                   return (
                       <div key={i}>
                       <h1>User-{ele.username.toUpperCase()}</h1>
                       <h4>Address-{ele.address}</h4>
                       <h4>Business-{ele.businessName}</h4>
                       </div>
                   )
               })}
         </div>
    )
}

export default Account