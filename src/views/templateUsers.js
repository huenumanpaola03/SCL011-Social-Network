import { controllersRegistry, controllersLogin, loginGoogle } from '../controllers/controllersUsers.js'

export const templateLogin = () => {
    const containerLogin = document.createElement("div");
    const contentLogin =
`
<article id="signin" class="containerLogin">
<div class="textLogin">
<h1>Sing In</h1>

</div>                     
<div class="login__row">
<a>ingrese su email</a>
<input class="inputEmail" id="email" type="email" placeholder="Email">
<a>ingrese su clave</a>
<input class="inputPassword" id="password" type="password" placeholder="Password">
</div>

<div class="btnsLogin">

<button class="btnLogin" id="login">INGRESAR</button>

<div class="routerRegistry">
<a>¿no tienes cuenta?<a/>
 <a class="aRegistry" href="#/registry">Registrate</a> 
</div>

</div>

</article>
`
    containerLogin.innerHTML = contentLogin;

    //llamamos al boton del div dinamico 
    const btn = containerLogin.querySelector("#login");
    btn.addEventListener("click", () => {
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        controllersLogin(email, password);
    })
    return containerLogin;
}




export const templateRegistry = () => {
    const containerRegistry = document.createElement("div");

    const contentRegistry =
        `
 <article  class="containerRegistry">

    <div class="textRegistry">
        <h1>Crear usuario</h1>
    </div>
       
    <div class="inputsRegistry">
    <a>ingrese su email<a/>
        <input  id="emailRegistro" type="email" placeholder="Email">
    <a>cree una clave<a/>  
        <input  id="passwordRegistro" type="password" placeholder="Password">
    </div>
     

    <div class="BtnRegistry">
        <button id="registry">REGISTRARSE</button>
    </div>
    
<div class="optionsR">
    <div class="rGogle">
    <a> registrarse con <a id="registryGoogle">google</a> </a>
    </div>
  
         
    <div class="rLogin">
        <a> ¿Ya tienes una cuenta? 
            <a id="A-iniciarsesion" href="#/login">Iniciar sesion</a>
        </a> 
    </div>
</div>

         </article>
    `;
    containerRegistry.innerHTML = contentRegistry;

    //llamamos al boton del div dinamico 
    const btn = containerRegistry.querySelector("#registry");
    btn.addEventListener("click", () => {
        let emailRegistry = document.getElementById("emailRegistro").value;
        let passwordRegistry = document.getElementById("passwordRegistro").value;


        controllersRegistry(emailRegistry, passwordRegistry);
    });

    const btnGoogle = containerRegistry.querySelector('#registryGoogle');
    // evento del botón que llama a la autentificación de google.
    btnGoogle.addEventListener('click', () => {
        loginGoogle();
    })



    return containerRegistry;
}