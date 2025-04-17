import './block-register.css';
import logo from '../assets/asas.svg';
// import logo from '../assets/logo.svg';

function Personal(props) {
  const anonimo = function (event){
    let form = document.getElementById("needs-validation-register");
    if (!form.checkValidity()){
      event.preventDefault();
      event.stopPropagation();
      form.classList.add('was-validated');
    }
    else{
      form.classList.add('was-validated');
    }
  }

  const trocar = function (){
    let register = document.getElementById("register")
    let login = document.getElementById("login")
    register.style.display="none"
    login.style.display="block"
  }

  return (
    <register id="register" className="App">
      <div className='logo-box'>
        <img src={logo} className="App-logo" alt="asas" width={296.5}/>
      </div>
      {/* usar express ou qualquer outro framework semelhante para validação de login com rotas */}
      <form method="POST" action="#" id="needs-validation-register" className="App-header" noValidate>
        <h1 className="title">Registro no sistema</h1>
        <textbox>

          <label className="col-form">
            Login
            <input type="text" size={30} value={props.value1} required></input>
            <div class="valid-feedback">
              OK!
            </div>
            <div class="invalid-feedback">
              Informe um nome.
            </div>
          </label>

        </textbox>
        <textbox>

          <label className="col-form">
            Senha
            <input type="password" size={30} value={props.value2} required></input>
            <div class="valid-feedback">
              OK!
            </div>
            <div class="invalid-feedback">
              Informe uma senha.
            </div>
          </label>

        </textbox>
        <div className="col-btn"> 
          <button type="button" onClick={trocar}>Login?</button>
          <button type="submit" onClick={anonimo}>Enviar</button>
        </div>
      </form>
    </register>
  );
}

export default Personal;