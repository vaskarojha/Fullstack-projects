import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonOne from './components/ButttonOne';
import { CounterProvider } from './context/CounterContext';

function App() {
  return(<div className='App'>
        <ButtonOne onClick={()=>alert('Button Clicked!!')} text = "Click"/>
        <ButtonOne onClick={()=>alert('Button Clicked!!')} text = "Click, Optional"/>
      </div>);

}

export default App;
