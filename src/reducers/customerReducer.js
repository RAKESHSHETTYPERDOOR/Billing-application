const initialstate = []
 
export const customerReducer = (state=initialstate,action)=>{
  switch(action.type){
   case "ADD_CUSTOMER":{
       return [...state,action.payload]
   } 
   case "GET_CUSTOMERS":{
     return [...action.payload]
   }
    
   case "DELETE_CUSTOMERS" :{
     return state.filter((ele)=>{
       return ele._id !== action.payload
     })
   }

   case "EDIT_CUSTOMERS" :{
     return state.map((ele)=>{
       if(ele._id === action.payload.id){
         return {...ele, ...action.payload.data}
       }
       else {
          return {...ele}
       }
     })
   }
   
    default :{
        return [...state]
    }
  }
}
