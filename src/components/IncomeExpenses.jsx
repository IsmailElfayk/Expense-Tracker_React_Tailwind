import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

const IncomeExpenses = () => {
  const {transactions} = useContext(GlobalContext);

  const Amounts = transactions.map((transaction)=>{return transaction.amount});


  const Income = Amounts.filter(Amount => Amount > 0).reduce((acc, item) => (acc += item) , 0);

  const Expense = Amounts.filter(Amount => Amount < 0).reduce((acc, item) => (acc + item) , 0);
  return (
    <div className='flex bg-white p-6 mt-6 mb-6 shadow'>
        <div className='flex-1 border-r border-solid border-bbb'>
            <h4 className='font-bold text-lg uppercase text-center'>Income</h4>
            <p id='money-plus' className='money plus text-xl text-center '>$ {Income.toFixed(2)}</p>
        </div>
        <div className='flex-1 justify-center items-center'>
            <h4 className='font-bold text-lg uppercase text-center'>Expense</h4>
            <p id="money-minus" className="money minus text-xl text-center ">$ {-Expense.toFixed(2)}</p>
        </div>
      
    </div>
  )
}

export default IncomeExpenses
