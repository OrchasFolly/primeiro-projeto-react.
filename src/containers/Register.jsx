import './Register.css';
import logo from '../assets/asas.svg';
import ButtonPrimary from '../components/ButtonPrimary';
import ClassCheckbox from '../components/CheckBox/ClassCheckbox';
import FunctCheckbox from '../components/CheckBox/FunctCheckbox';

function Personal(){
  const handleValidation = (event) => {
    const form = document.getElementById("needs-validation-register");
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
      }, 3500);
    }
  }

  const submit = () => {
    window.open("/personnel", "_self");
  }

  return (
    <div id="register">
      <div className='logo-box'>
        <img src={logo} className="App-asas" alt="asas" width={296.5}/>
      </div>

      {/* usar express ou qualquer outro framework semelhante para validação de login com rotas */}
      <form id="needs-validation-register" className="App-header" noValidate>
        <h1 className="title">Registro no sistema</h1>

        <textbox>
          <label className="col-form">
            Nome
            <input type="text" size={30} required></input>
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
            <input type="email" size={30} required></input>
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
            <input type="password" size={30} required></input>
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
            <input type="password" size={30} required></input>
            <div class="valid-feedback">
              OK!
            </div>
            <div class="invalid-feedback">
              Confirme a senha.
            </div>
          </label>
        </textbox>
        <textbox>
          <FunctCheckbox title={"Evento por função"}/>
          <ClassCheckbox title={"Evento por classe"}/>
        </textbox>
        <div> 
          <ButtonPrimary title={"Login"} anyEvent={() => {
            window.open("/", "_self");
          }}/>
          <ButtonPrimary title={"Enviar"} anyEvent={handleValidation}/>
          {/* Usar Onsubmit para validações! */}
        </div>
      </form>

    </div>
  );
}

export default Personal;