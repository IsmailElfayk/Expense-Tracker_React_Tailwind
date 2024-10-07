import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

const Balance = () => {
    const {transactions} = useContext(GlobalContext);
    let balance = 0;
    for(let transaction of transactions){
      balance = balance + transaction.amount;
    }
  return (
    <>
      <h4 className='text-xl font-bold'>Your Balance</h4>
      <h1 id='balance' className='text-4xl font-bold'>{balance < 0 ? "-": ""}${balance.toFixed(2)}</h1>
    </>
  )
}

export default Balance
