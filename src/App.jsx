// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import './comps/login-register.css'
import Login from './comps/Login.jsx'
import Register from './comps/Register.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="colum">
          <Login/>
          <Register/>
        </div>
      </header>
    </div>
  )
}

export default App
