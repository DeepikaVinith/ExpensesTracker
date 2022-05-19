import React,{useState} from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpenses from "./Components/NewExpenses/NewExpenses";

const DUMMY= [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const[expenses,setExpenses]=useState(DUMMY)
  
  const addExpenses = (expense) => {
    setExpenses(prev=>{
      return [expense,...prev];
    });
    // console.log(expense)
    
    
  };
  // console.log(expenses)

  return (
    <div>
      <NewExpenses onAddExpenses={addExpenses} />
      
      <Expenses items={expenses}/>
    </div>
  );
};
export default App;
