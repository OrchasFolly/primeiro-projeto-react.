import './Card.css';
import logo from '../assets/unknown-person.svg';

function Card(props) {
  return (
    <card>
      <div className="personnelData">
        <th className="styleHeader">
          Nome:
          <td className="styleData">{props.name}</td>
        </th>

        <th className="styleHeader">
          Data:
          <td className="styleData">{props.date}</td>
        </th>

        <th className="styleHeader">
          Email:
          <td className="styleData">{props.email}</td>
        </th>

        <th className="styleHeader">
          Código:
          <td className="styleData">{props.cod}</td>
        </th>

        <th className="styleHeader">
          Descrição:
          <td className="styleData">{props.desc}</td>
        </th>
      </div>
      <div className="personnelImg">
        <img src={logo} width={75}></img>
      </div>
    </card>
  );
}

export default Card;