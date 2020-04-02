import React, { useContext } from 'react'
import {GlobalContext} from "../context/GlobalState"


export const Transaction = (props) => {
    const {dispatch} = useContext(GlobalContext)

    let sign = props.transaction.amount < 0? '-' : '+';
    return (
        <li onClick={() => dispatch({type: "DELETE_TRANSACTION", id: props.transaction.id})} className={props.transaction.amount < 0? 'minus' : 'plus'}>
            {props.transaction.text} <span>{sign}${Math.abs(props.transaction.amount)}</span><button className="delete-btn">x</button>
        </li> 
    )
}
