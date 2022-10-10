import './styles/index.css';
import React from "react";
import Home from './components/Home';
import {Route, Routes} from "react-router-dom";
import Create from './components/Create';
import Edit from './components/Edit';
import { DataProvider } from './context/DataContext';
import Download from './components/Download';

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/create" element={<Create/>}/>
        <Route exact path="/edit" element={<Edit/>}/>
        <Route exact path="/download" element={<Download/>}/>
      </Routes>
    </DataProvider>
  );
}


export default App;
