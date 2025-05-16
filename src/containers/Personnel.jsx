import './Personnel.css';
import '../components/Card.jsx';
import LoadCards from '../components/LoadList/LoadCards.jsx';

import React, { useState } from 'react';

function Personnel(props) {
  // Carregador
  const [load, loadComponent] = useState(false);
  const handleCheck = () => {
      loadComponent(!load)
  }
  let checkboxStatus = "Abrir?"
  let loadCheck = !load ? <LoadCards person={props.person}/> : null
  checkboxStatus = !load ? "Aberto" : "Abrir"

  return (
    <div id="personnel" className="navigator">
      <h1 className="titleEmployee">Funcionários</h1>
      <div className="filterSpace">
        <div className="alignFilters">
          <label style={{color: load ? "#ca6d6d" : "white"}}>
              <input type="checkbox" checked={!load} onChange={handleCheck}/>
              {checkboxStatus}
          </label>
        </div>
        <div className="alignFilters">
          <label>L1</label>
          <label>L2</label>
          <label>L3</label>
          <label>L4</label>
          <label>L5</label>
        </div>
      </div>
      <table className="tabScroll">
        <tbody>
          {loadCheck}
        </tbody>
      </table>
    </div>
  );
}

export default Personnel;