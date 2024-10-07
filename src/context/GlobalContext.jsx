import React, {createContext, useReducer, useEffect} from "react";
import AppReducer from "./AppReducer";
//

// initial state

const initialState = {transactions: []}


 // create global context

 export const GlobalContext = createContext(initialState);

 // provider component 

 export const GlobalProvider = ({children})=>{
     const [state, dispatch] = useReducer(AppReducer, initialState);
     //Link with LocalStorage
     useEffect(()=>{
        if(window.localStorage.State === undefined){
            window.localStorage.setItem("State",JSON.stringify({transactions: []}));     
        }else{
             dispatch({
                type: "SET_DATA",
                payload: JSON.parse(window.localStorage.State)
             });
        }   
    },[]);
    
    useEffect(()=>{
        if(state.transactions.length > 0){

            window.localStorage.State = JSON.stringify(state);
        }
    },[state]);
    
    


     //actions
     function deleteTransaction(id){
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        })
     }

     function addTransaction (transaction){
        dispatch({
            type: "ADD_TRANSACTION",
            payload : transaction
        })
     }

    return (<GlobalContext.Provider value={{transactions: state.transactions, deleteTransaction, addTransaction}}>
        {children}
    </GlobalContext.Provider>);
 }