const initialstate =[]
export const allbillsreducers = (state=initialstate,action)=>{
   switch(action.type){
       case "ALL_BILLS":{
           return action.payload
       }
       case  "DELETE_BILLS":{
            return state.filter((ele)=>{
                return ele._id !== action.payload
            })
       }
       default :{
        return [...state]
     }
   }
}
