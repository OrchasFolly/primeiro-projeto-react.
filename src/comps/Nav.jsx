import './Nav.css';
import './Card.jsx';
import Card from './Card.jsx';

function Nav() {

  return (
    <nav id="nav" className="navigator">
      <h1>title</h1>
      <table className="cardsPersonal tabScroll">
        <tr>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </tr>
        <tr>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </tr>
        <tr>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </tr>
        <tr>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </tr>
      </table>
    </nav>
  );
}

export default Nav;