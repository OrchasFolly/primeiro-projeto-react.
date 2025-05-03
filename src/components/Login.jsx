import './Login.css';
import logo from '../assets/logo.svg';

function Login(props) {
  const handleChange = function(){
    props.changePage(!props.change)
  }

  const handleValidation = function (event){
    const form = document.getElementById("needs-validation-login");
    if (!form.checkValidity()){
      event.preventDefault();
      event.stopPropagation();
      form.classList.add('was-validated');
      message();
    }
    else{
      form.classList.add('was-validated');
      submit();
    }
  
    function message(){
      setTimeout(() => {
        form.classList.remove('was-validated');
      }, 3000);
    }
  }

  const submit = function (){
    const register = document.getElementById("register");
    const login = document.getElementById("login");
    const personnel = document.getElementById("personnel");
    const AppHeader = document.getElementById("head");
    register.style.display="none";
    login.style.display="none";
    personnel.style.display="flex";
    AppHeader.style.display="block";
    AppHeader.style.justifyContent="start";
  }

  return (
    <login id="login" style={{display: props.change ? "block" : "none"}}>
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
              Nome ou email incorreto.
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
              Senha incorreta.
            </div>
          </label>

        </textbox>
        <div className="col-btn"> 
          <button type="button" onClick={handleChange}>Registrar?</button>
          <button type="button" onClick={handleValidation}>Enviar</button>
          {/* Usar Onsubmit para validações! */}
        </div>
      </form>
    </login>
  );
}

export default Login;