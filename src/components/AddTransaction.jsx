import React, {useState, useContext, useRef} from 'react'
import { GlobalContext } from '../context/GlobalContext';

const AddTransaction = () => {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);
    const {transactions , addTransaction} = useContext(GlobalContext);
    const inputsRef = useRef([]);


    
    const onSubmit = (e) => {
      e.preventDefault();

      if(inputsRef.current[0].value != ""){
        const newTransaction = {
          id: transactions.length > 0 ? (transactions[transactions.length - 1].id + 1) : 1,
          text,
          amount: +amount
        }

      console.log(inputsRef.current[0])

        addTransaction(newTransaction);
      }

    }


  return (
    <>
    <h3 className='text-xl font-bold mt-10 mb-2.5 border-b border-solid border-bbb pb-2.5'>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
            <label htmlFor="text" className='block my-2.5'>Text</label>
            <input ref={el => inputsRef.current[0] = el} className='outline-none shadow w-full p-2.5' type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder='Enter Text...' />
        </div>
        <div className="form-control">
            <label className='block my-2.5' htmlFor="amount">Amount<br/>(negative - expense, positive - income)</label>
            <input ref={el => inputsRef.current[1] = el} className='outline-none shadow w-full p-2.5' type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder='Enter Amount...' />
        </div>
        <button className="btn shadow text-white w-full p-2.5 text-base cursor-pointer mt-2.5 mb-8">Add Transaction</button>
      </form>
    </>
  )
}

export default AddTransaction
