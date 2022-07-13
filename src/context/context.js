import React,{useContext,useEffect,useReducer} from 'react'
import axios from "axios";
import reducer from './reducer.js'
import {START_FETCH,
    ERROR_FETCH,
    FINISH_FETCH,
    CHANGE_QUERY,
    SELECTED_COCKTAIL_DETAIL,
    OPEN_SIDEBAR,
    CLOSE_SIDEBAR} from './actions'
const AppContext = React.createContext();

const initialState = {
    drinks :[],
    loading:false,
    error:false,
    cocktailDetail:{},
    query:'negroni',
    sidebar : false
}

function AppProvider({children}) {

    const closeSidebar = ()=>{
        dispatch({type:CLOSE_SIDEBAR})
    }

    const openCloseSidebar = ()=>{
        dispatch({type:OPEN_SIDEBAR})
    }

    const changeQuery = (query)=>{
        dispatch({type:CHANGE_QUERY,payload:query});
    }
    
    const [state,dispatch] = useReducer(reducer,initialState);
    
    const fetchData =  async(query) =>{
        try{
            dispatch({type:START_FETCH})
            const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?";
            const response = await axios.get(url + `s=${query}`);
            
            dispatch({type:FINISH_FETCH,payload:response.data.drinks})

        }catch(err){
            dispatch({type:ERROR_FETCH})
            
        }
       
    }

    const fetchSingleCocktail =  async(id) =>{
        try{
            const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?";
            const response = await axios.get(url + `i=${id}`);
            dispatch({type:SELECTED_COCKTAIL_DETAIL,payload:response.data.drinks[0]});

        }catch(err){
            console.log(err);
            
        }
          
    }
    useEffect(()=>{
        fetchData(state.query);
    },[state.query])

    return (
        <AppContext.Provider value={{...state,fetchData,changeQuery,fetchSingleCocktail,openCloseSidebar,closeSidebar}}>
            {children}
        </AppContext.Provider>
    )
}
const useGlobalContext = ()=>{
    return useContext(AppContext);
}

export {AppProvider,useGlobalContext}