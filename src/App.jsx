import React from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';
import MainRouter from './router/MainRouter';
import Navbar from './components/navbar/Navbar';

function App() {


  return (
    <>
    <HashRouter>
        <Navbar />
        <MainRouter />
    </HashRouter>
    </>
  );
}

export default App;
