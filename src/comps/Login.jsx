import logo from '../assets/logo.svg';
// import logo from '../assets/asas.svg';

function Login(props) {
  const anonimo = function (event){
    let form = document.getElementById("needs-validation-login");
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
    register.style.display="block"
    login.style.display="none"
  }

  return (
    <login id="login" className="App">
      <div className='logo-box'>
        <img src={logo} className="App-logo" alt="logo"/>
      </div>
      {/* usar express ou qualquer outro framework semelhante para validação de login com rotas */}
      <form method="POST" action="#" id="needs-validation-login" className="App-header" noValidate>
        <h1 className="title">Login no sistema</h1>
        <textbox>

          <label className="col-form">
            Login
            <input type="text" size={30} value={props.value1} required></input>
            <div class="valid-feedback">
              OK!
            </div>
            <div class="invalid-feedback">
              Nome incorreto ou não existe.
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
              Senha incorreta ou não existe.
            </div>
          </label>

        </textbox>
        <div className="col-btn"> 
          <button type="button" onClick={trocar}>Registrar?</button>
          <button type="submit" onClick={anonimo}>Enviar</button>
        </div>
      </form>
    </login>
  );
}

export default Login;