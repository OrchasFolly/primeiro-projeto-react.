import './Card.css';
import logo from '../assets/unknown-person.svg';

function Card(props) {
  return (
    <tr className="cardBase">
      <th className="personnelData">
        <div className="styleHeader">
          Nome:
          <p className="styleData">{props.name}</p>
        </div>

        <div className="styleHeader">
          Data:
          <p className="styleData">{props.date}</p>
        </div>

        <div className="styleHeader">
          Email:
          <p className="styleData">{props.email}</p>
        </div>

        <div className="styleHeader">
          Código:
          <p className="styleData">{props.cod}</p>
        </div>

        <div className="styleHeader">
          Descrição:
          <p className="styleData">{props.desc}</p>
        </div>
      </th>
      <th className="personnelImg">
        <img src={logo} width={75}></img>
      </th>
    </tr>
  );
}

export default Card;