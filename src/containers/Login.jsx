import './Login.css';
import logo from '../assets/logo.svg';
import ButtonPrimary from '../components/ButtonPrimary';

function Login() {
  const handleValidation = (event) => {
    const form = document.getElementById("needs-validation-login");
    if (!form.checkValidity()){
      event.preventDefault();
      event.stopPropagation();
      form.classList.add('was-validated');
      removeMessage();
    }
    else{
      form.classList.add('was-validated');
      submit();
    }
  
    function removeMessage(){
      setTimeout(() => {
        form.classList.remove('was-validated');
      }, 3000);
    }
  }

  const submit = () => {
    window.open("/personnel", "_self");
  }

  return (
    <div id="login">
      <div className='logo-box'>
        <img src={logo} className="App-logo App-logo-login" alt="logo"/>
      </div>
      
      {/* usar express ou qualquer outro framework semelhante para validação de login com rotas */}
      <form id="needs-validation-login" className="App-header App-header-login" noValidate>
        <h1 className="title">Login no sistema</h1>

        <textbox>
          <label className="col-form">
            Nome ou email
            <input type="text" size={30} name="nameLogin" required></input>
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
            <input type="password" size={30} name="passLogin" required></input>
            <div class="valid-feedback">
              OK!
            </div>
            <div class="invalid-feedback">
              Senha incorreta.
            </div>
          </label>
        </textbox>
        <div> 
          <ButtonPrimary title={"Registrar?"} anyEvent={() => {
            window.open("/register", "_self");
          }}/>
          <ButtonPrimary title={"Enviar"} anyEvent={handleValidation}/>
          {/* Usar Onsubmit para validações! */}
        </div>
      </form>

    </div>
  );
}

export default Login;