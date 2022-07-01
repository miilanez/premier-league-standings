import React from "react";
import Api from "./components/Api";
import Tabela from "./components/Tabela";
import './App.css';

export default function App() {

  return (
    <div className="App">
      <p>Premier League Standings</p>

      <Tabela />

    </div>
  );
}