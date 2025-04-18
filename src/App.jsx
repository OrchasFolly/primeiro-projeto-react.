// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import Login from './comps/Login.jsx';
import Register from './comps/Register.jsx';
import Nav from './comps/Nav.jsx'

function App() {
  return (
    <div className="App">
      <header id="head" className="App-header">
        <Nav/>
        <div className="colum">
          {/* <Login/>
          <Register/> */}
        </div>
      </header>
    </div>
  )
}

export default App
