import './App.css';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Personnel from './containers/Personnel/Personnel.jsx';
import Nav from './components/Nav.jsx';
import React, { useState } from 'react';

function App() {
  const [change, changePage] = useState(true);
  const group = {
    employees: [
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
    <div className="App-header">
      <Login change={change} changePage={changePage}/>
      <Register change={change} changePage={changePage}/>
      <header id="head" className="colum">
        <Nav/>
        <main>
          <article>
            <Personnel person={group}/>
          </article>
        </main>
      </header>
    </div>
  )
}

export default App
