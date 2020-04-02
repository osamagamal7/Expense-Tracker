import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer'
const initialState = {
    transactions: [
        {id: 1, text: 'Flower', amount: -20},
        {id: 2, text: 'Salary', amount: 300},
        {id: 3, text: 'Book', amount: -10},
        {id: 4, text: 'Camera', amount: 150},
    ]
}

export const GlobalContext = createContext()


export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    //we can pass global functions to child components by 2 ways declare the function here and dispatch
    //the action, and destructure the function in the components.
    //or we can pass dispatch to value prop and use dispatch directly in child components by destructuring it.
    const addTransaction = (transaction) =>{
        dispatch({type: "ADD_TRANSACTION", transaction: transaction})
    
    }
    
    return (
        <GlobalContext.Provider value={{transactions: state.transactions, dispatch, addTransaction}}>
            {props.children}
        </GlobalContext.Provider>
    )
}
