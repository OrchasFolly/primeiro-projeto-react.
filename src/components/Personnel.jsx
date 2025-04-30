import './Personnel.css';
import './Card.jsx';
import Card from './Card.jsx';

function Personnel(props) {
  if(props.person){
    const dados = props.person;
    let card = [];
    for(let i = 0; i < dados.length; i++){
      card.push(<Card 
                  name={dados[i].name} 
                  date={dados[i].date}
                  email={dados[i].email}
                  cod={dados[i].cod} 
                  desc={dados[i].desc}
                />);
    }
    return (
      <personnel id="nav" className="navigator">
        <div>
          <h1 className="titleEmployee">Funcionários</h1>
        </div>
        <table className="cardsPersonal tabScroll">
          <tbody>
            <tr className="align">
              {card}
            </tr>
          </tbody>
        </table>
      </personnel>
    );
  }
}

export default Personnel;