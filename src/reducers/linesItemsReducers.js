const initialstate = []
export const linesItemsReducers = (state=initialstate,action)=>{
    switch(action.type){
      case "ADD_LINEITEMS":{
         return  [...state,{...action.payload}]
      }
      
      case "DELETE_ITEMS":{
         return state.filter((ele)=>{
            return (ele.product !== action.payload)
         })
      }
      default :{
          return [...state]
      }  
    }
}