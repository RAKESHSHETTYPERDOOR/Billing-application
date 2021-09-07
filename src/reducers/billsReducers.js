const initialstate =[]

export const billsReducers = (state=initialstate,action) =>{
 switch (action.type){
     case "ADD_BILLS":{
         return [...state,{...action.payload}]
     }
    default : {
        return [...state] 
    }
 }
}