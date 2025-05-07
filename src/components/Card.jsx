import './Card.css';
function Card(props) {
  return (
    <tr className="cardBase">
      <th className="personnelData">
        <div className="styleHeader">
          Nome:
          <p className="styleData">{props.list.name}</p>
        </div>

        <div className="styleHeader">
          Nascimento:
          <p className="styleData">{props.list.date}</p>
        </div>

        <div className="styleHeader">
          Email:
          <p className="styleData">{props.list.email}</p>
        </div>

        <div className="styleHeader">
          Código:
          <p className="styleData">{props.list.cod}</p>
        </div>

        <div className="styleHeader">
          <p className="styleStatus">{props.list.status}</p>
        </div>
      </th>
      <th className="personnelImg">
        <img width={75}></img>
      </th>
      <th className="backDescription">
        <table className="tabScrollDesc">
          <tbody>
            <tr>
              <td>
                <p>{props.list.desc}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </th>
    </tr>
  );
}

export default Card;