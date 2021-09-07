const initialstate =[]

export const productReducers = (state=initialstate,action)=>{
    switch(action.type){
    case "GET_PRODUCTS":{
        return [...action.payload]
    }
    case "ADD_PRODUCT":{
        return[...state,action.payload]
    }
 
    case "DELETE_PRODUCT":{
        return state.filter((ele)=>{
            return ele._id !== action.payload
        })
    }
    case "EDIT_PRODUCT":{
        return state.map((ele)=>{
            if(ele._id === action.payload.id){
                return {...ele, ...action.payload.data}
            }else {
                return {...ele}
            }
        })
    }

        default :{
            return [...state]
        }
    }



}