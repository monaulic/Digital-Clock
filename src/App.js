import React, { useState } from 'react';
import './App.css'

const App = () => {

  let time = new Date().toLocaleTimeString();
  let date = new Date().toLocaleDateString();

  const [ctime, setCtime] = useState(time);
  const [cDate, setDate] = useState(date);

  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  }

  const updateDate = () => {
    date = new Date().toLocaleDateString();
    setDate(date);
  }
  setInterval(updateDate, 86400000);
  setInterval(updateTime, 1000);
  return (
    <div className='clock-design'>
      <span className='time'>{ctime}</span> <br />
      <span className='date'>{cDate}</span> 
    </div>
  );
};

export default App;
