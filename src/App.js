import Expenses from './components/Expenses';

function App() {

  const expenses = [
    {
      id:'e1', 
    title:'Toilet Paper', 
    amount:10000, 
    date: new Date(2020, 7, 14),
  },
    {
      id:'e2', title:'LG TV', amount:20000, date: new Date(2022, 2, 12)  },
    {
      id:'e3', 
    title:'Car Insurance', 
    amount:25000, 
    date: new Date(2022, 2, 28)
  },
    {
      id:'e4',
     title:'New Desk (Wooden)', 
     amount:1000, 
     date: new Date(2022, 2, 28)
    },
    
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
      </div>
  );
}

export default App;