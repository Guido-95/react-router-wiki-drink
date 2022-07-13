import { START_FETCH,ERROR_FETCH,FINISH_FETCH,CHANGE_QUERY,SELECTED_COCKTAIL_DETAIL,OPEN_SIDEBAR,CLOSE_SIDEBAR } from "./actions";
const reducer =(state,action)=>{
    if(action.type === START_FETCH){
       
        return {...state, loading:true, error:false}

    }
    if(action.type === ERROR_FETCH){
        console.log(ERROR_FETCH);
        return {...state, loading:false, error:true}
    }
    if(action.type === FINISH_FETCH){
      
        return {...state,loading:false,error:false, drinks : action.payload}
        
    }
    if(action.type === CHANGE_QUERY){
         
        return {...state, query : action.payload}
    }
    if(action.type === SELECTED_COCKTAIL_DETAIL){
        return {...state,loading:false,error:false,cocktailDetail:action.payload}
    }
    if(action.type === OPEN_SIDEBAR){
  
        return {...state,sidebar:true}
    }

    if(action.type === CLOSE_SIDEBAR){
     
        return {...state,sidebar:false}
    }
  
  
    return state;
}


export default reducer