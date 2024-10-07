import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalContext'

const Transaction = ({transaction}) => {
  const {deleteTransaction} = useContext(GlobalContext);

  return (
    <li  className = {` bg-white p-2.5 mt-2.5 mb-2.5 flex justify-between items-center relative group ${transaction.amount >= 0? "right-green-border":"right-red-border"}`}>
            {transaction.text} <span>{transaction.amount >= 0? "+":"-"}${Math.abs(transaction.amount)}</span>
            <button onClick={()=> deleteTransaction(transaction.id)} className="delete-btn absolute top-1/2 left-0 text-xl py-0.5 px-1.5 text-white opacity-0 group-hover:opacity-100 duration-300">x</button>
        </li>
  )
}

export default Transaction
