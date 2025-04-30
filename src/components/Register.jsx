import './Register.css';
import logo from '../assets/asas.svg';
// import logo from '../assets/logo.svg';

function Personal(props) {

  const anonimo = function (event){
    const form = document.getElementById("needs-validation-register");
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
      }, 3500);
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
    register.style.display="none";
    login.style.display="block";
  }

  return (
    <register id="register" className="App">
      <div className='logo-box'>
        <img src={logo} className="App-asas" alt="asas" width={296.5}/>
      </div>
      {/* usar express ou qualquer outro framework semelhante para validação de login com rotas */}
      <form id="needs-validation-register" className="App-header" noValidate>
        <h1 className="title">Registro no sistema</h1>
        <textbox>

          <label className="col-form">
            Nome
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
            Email
            <input type="email" size={30} value={props.value2} required></input>
            <div class="valid-feedback">
              OK!
            </div>
            <div class="invalid-feedback">
              Informe um email.
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
        <textbox>

          <label className="col-form">
            Confirma senha
            <input type="password" size={30} value={props.value2} required></input>
            <div class="valid-feedback">
              OK!
            </div>
            <div class="invalid-feedback">
              Confirme a senha.
            </div>
          </label>

        </textbox>
        <div className="col-btn"> 
          <button type="button" onClick={trocar}>Login?</button>
          <button type="button" onClick={anonimo}>Enviar</button>
          {/* Usar Onsubmit para validações! */}
        </div>
      </form>
    </register>
  );
}

export default Personal;