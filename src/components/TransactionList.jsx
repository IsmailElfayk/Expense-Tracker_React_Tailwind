import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalContext'
import Transaction from './Transaction';


const TransactionList = () => {
  const {transactions} = useContext(GlobalContext);
  return (
    <>
      <h3 className='text-xl font-bold mt-10 mb-2.5 border-b border-solid border-bbb pb-2.5'>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction)=><Transaction key={transaction.id} transaction={transaction} />)}
      </ul>
    </>
  )
}

export default TransactionList
