import React from 'react';
import './App.css';
// import Button from './Button';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

function App(props) {
  return (
    <div className="App container">
      <h1 className="title"> FIGHT COVID-19 & PUT YOUR STORY ON THE MAP</h1>
      <Fab style={{background: "#EA2027"}} aria-label="add" href="/onboard" size="large" className="fab">
        <AddIcon />
      </Fab>
    </div>
  );
}

export default App;
