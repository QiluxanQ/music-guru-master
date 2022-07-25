import React from 'react';
import './App.css';
import Header from "./client/blocks/header/Header";
import Info from "./client/blocks/info/info";
import { store } from './client/store';


function App() {
  const { headerData,
       infoData} = store;


  return (
    <div className="App">
      <Header {...headerData} />
      <Info {...infoData} />
    </div>
  );
}

export default App;
