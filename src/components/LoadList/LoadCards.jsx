
import Card from '../Card.jsx';

function LoadCards(props){
  if(props.person){
    const data = props.person.employees;
    let count = [];
    for(let i of data){
      count.push(
        <Card list={i}/>
      )
    }
    return count
  }
}

export default LoadCards