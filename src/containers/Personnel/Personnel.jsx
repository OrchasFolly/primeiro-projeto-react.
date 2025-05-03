import './Personnel.css';
import '../../components/Card.jsx';
import Card from '../../components/Card.jsx';

function Personnel(props) {
  function LoadList(){
    if(props.person){
      const data = props.person.employees;
      let list = []
      for(let i of data){
        list.push(
          <Card 
            name={i.name} 
            date={i.date}
            email={i.email}
            cod={i.cod} 
            desc={i.desc}
          />
        )
      }
      return list
    }
  }
  return (
    <personnel id="personnel" className="navigator">
      <h1 className="titleEmployee">Funcionários</h1>
      <table className="cardsPersonal tabScroll">
        <tbody>
          <LoadList/>
        </tbody>
      </table>
    </personnel>
  );
}

export default Personnel;