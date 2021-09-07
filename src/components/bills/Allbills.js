import {useSelector,useDispatch} from 'react-redux'
import DisplayAll from './DisplayAll'
import { useEffect } from 'react'
import { allbill } from '../../actions/billsaActions'

const Allbills = ()=>{


 const dispatch = useDispatch()

 useEffect(()=>{
 if(localStorage.getItem('token')){
   dispatch(allbill())
 }
 },[])

 const allbills = useSelector((state)=>{
     return state.allbills
 })
 

    return (
          <div>
              {allbills.map((allbill,i)=>{
                  return <DisplayAll allbill={allbill} key={i}/>
              })}
             
          </div>
    )
}
export default Allbills