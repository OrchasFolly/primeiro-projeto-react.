import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Login from './containers/Login.jsx';
import Register from './containers/Register.jsx';
import Personnel from './containers/Personnel.jsx';

function App() {
  const group = {
    employees: [
      {
        "name": "Dr.Francis W",
        "date": "00/00/0000",
        "email": "nomail@email.com",
        "Level": 4,
        "cod": 17962,
        "desc": "Descrição1",
        "status": "Ativo"
      },
      {
        "name": "Jack B",
        "date": "00/00/0000",
        "email": "nomail@email.com",
        "cod": 14385,
        "desc": "Descrição2",
        "status": "Ativo"
      },
      {
        "name": "Dr.Sraeg Selrahc",
        "date": "08/18/1956",
        "email": "nomail@email.com",
        "cod": 16822,
        "desc": "Descrição3",
        "status": "Ativo"
      },
      {
        "name": "Dr.Benjamin H",
        "date": "01/22/1968",
        "email": "nomail@email.com",
        "cod": 12745,
        "desc": "Descrição4",
        "status": "Inativo"
      },
    ]
  }
  
  return (
    <div className="App-header">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/personnel" element={<Personnel person={group}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
