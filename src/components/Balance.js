import React, { useContext } from 'react'
import {GlobalContext} from "../context/GlobalState"

export const Balance = () => {
    const {transactions} = useContext(GlobalContext)

    const amount = transactions.map((transaction) => (
        transaction.amount
    ))

    const total = amount.reduce((passedIn, item) =>(
        passedIn += item
    ), 0).toFixed(1)
    return (
        <>
            <h4>Your Balance</h4>
            <h1>${total}</h1>
        </>
    )
}
