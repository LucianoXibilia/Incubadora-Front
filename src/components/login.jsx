import "./login.css";

function Login() {
  return (
    <>
      <div className="login">
        <form action="" class="form_login">
          <h2 class="titulo titulo-form">Ingresar</h2>
          <input
            type="text"
            name=""
            id=""
            placeholder="Usuario"
            class="form_login_input"
          ></input>
          <input
            type="password"
            placeholder="Contraseña"
            class="form_login_input"
          ></input>
          <button class="form-button">Ingresar</button>
        </form>
      </div>
    </>
  );
}

export default Login;
