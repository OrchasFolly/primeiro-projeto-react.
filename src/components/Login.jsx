import './Login.css';
import logo from '../assets/logo.svg';
// import logo from '../assets/asas.svg';

function Login(props) {

  const anonimo = function (event){
    const form = document.getElementById("needs-validation-login");
    if (!form.checkValidity()){
      event.preventDefault();
      event.stopPropagation();
      form.classList.add('was-validated');
      message();
    }
    else{
      form.classList.add('was-validated');
      enviado();
    }
  
    function message() {
      setTimeout(() => {
        form.classList.remove('was-validated');
      }, 3000);
    }
  }

  const enviado = function (){
    const register = document.getElementById("register");
    const login = document.getElementById("login");
    const nav = document.getElementById("nav");
    const AppHeader = document.getElementById("head");
    register.style.display="none";
    login.style.display="none";
    nav.style.display="flex";
    AppHeader.style.justifyContent="start";
  }

  const trocar = function (){
    const register = document.getElementById("register");
    const login = document.getElementById("login");
    register.style.display="block";
    login.style.display="none";
  }

  return (
    <login id="login" className="App">
      <div className='logo-box'>
        <img src={logo} className="App-logo" alt="logo"/>
      </div>
      {/* usar express ou qualquer outro framework semelhante para validação de login com rotas */}
      <form id="needs-validation-login" className="App-header" noValidate>
        <h1 className="title">Login no sistema</h1>
        <textbox>

          <label className="col-form">
            Nome ou email
            <input type="text" size={30} value={props.value1} name="nameLogin" required></input>
            <div class="valid-feedback">
              OK!
            </div>
            <div class="invalid-feedback">
              Nome ou email incorreto ou não existe.
            </div>
          </label>

        </textbox>
        <textbox>

          <label className="col-form">
            Senha
            <input type="password" size={30} value={props.value2} name="passLogin" required></input>
            <div class="valid-feedback">
              OK!
            </div>
            <div class="invalid-feedback">
              Senha incorreta ou não existe.
            </div>
          </label>

        </textbox>
        <div className="col-btn"> 
          <button type="button" onClick={trocar}>Registrar?</button>
          <button type="button" onClick={anonimo}>Enviar</button>
          {/* Usar Onsubmit para validações! */}
        </div>
      </form>
    </login>
  );
}

export default Login;