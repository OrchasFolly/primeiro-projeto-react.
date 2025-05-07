import './Personnel.css';
import '../components/Card.jsx';
import LoadCards from '../components/LoadList/LoadCards.jsx';

function Personnel(props) {
  

  return (
    <div id="personnel" className="navigator">
      <h1 className="titleEmployee">Funcionários</h1>
      <label>
          <input type="checkbox"/>
          Testando
      </label>
      <table className="tabScroll">
        <tbody>
          <LoadCards person={props.person}/>
        </tbody>
      </table>
    </div>
  );
}

export default Personnel;