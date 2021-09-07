const initialstate =[]
export const accountReducer = (state=initialstate,action)=>{
  switch(action.type){
    case "GET_ACCOUNT":{
        return [{...action.payload}]
    }
    default :{
        return [...state]
    }
  }
}