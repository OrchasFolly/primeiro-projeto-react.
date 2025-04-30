// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Personnel from './components/Personnel.jsx';

function App() {
  let lista = {
    "funcionarios": [
      {
      "name": "Dr.Francis W",
      "date": "██/██/1981",
      "email": "nomail@email.com",
      "cod": 17962,
      "desc": "Descrição1"
      },
      {
        "name": "Jack B",
        "date": "██/██/████",
        "email": "nomail@email.com",
        "cod": 14385,
        "desc": "Descrição2"
      },
      {
        "name": "Dr.Sraeg Selrahc",
        "date": "08/18/1956",
        "email": "nomail@email.com",
        "cod": 16822,
        "desc": "Descrição3"
      },
      {
        "name": "Dr.Benjamin H",
        "date": "01/22/1968",
        "email": "nomail@email.com",
        "cod": 12745,
        "desc": "Descrição4"
      },
      {
        "name": "Dr.Benjamin H",
        "date": "01/22/1968",
        "email": "nomail@email.com",
        "cod": 12745,
        "desc": "Descrição4"
      },
    ]
  }
  
  return (
    <div className="App">
      <header id="head" className="App-header">
        <main className="colum">
          <Login/>
          <Register/>
          <article>
            <Personnel person={lista.funcionarios}/>
          </article>
        </main>
      </header>
    </div>
  )
}

export default App
