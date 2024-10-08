import  React  from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalContext';

import './App.css'



function App() {

  return (
    <GlobalProvider>
    <Header />
    <div className="container mt-8 mr-auto ml-auto">
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
    </div>
    </GlobalProvider>
  )
}

export default App
