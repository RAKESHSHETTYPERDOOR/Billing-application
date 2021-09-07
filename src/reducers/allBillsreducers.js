const initialstate =[]
export const allbillsreducers = (state=initialstate,action)=>{
   switch(action.type){
       case "ALL_BILLS":{
           return action.payload
       }

       default :{
        return [...state]
     }
   }
}