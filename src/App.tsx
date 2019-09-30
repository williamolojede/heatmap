import React from "react";

import './App.css';

import { formatByDailyNetTransaction } from './utils/formatByDailyNetTransaction';
import transactions from './transactions-carter.json';

import Months from './components/Months';
import Days from './components/Days'
import Cells  from './components/Cells';

const App: React.FC = () => {
  const dailyNetTransactions = formatByDailyNetTransaction(transactions);
  const dates = Object.keys(dailyNetTransactions).sort((a, b) => {
    return new Date(a).getTime() - new Date(b).getTime()
  });
  const startDate = dates[0];
  const endDate = dates[dates.length - 1];
  

  
  return (
    <div className="App">
      <Days startDate={startDate} />
      <Months startDate={startDate}/>
      <Cells 
        startDate={startDate} 
        endDate={endDate} 
        dailyNetTransactions={dailyNetTransactions} 
      />
    </div>
  );
};

export default App;
