import { controllersRegistry, controllersLogin, loginGoogle } from '../controllers/controllersUsers.js'

export const templateLogin = () => {
    const containerLogin = document.createElement("div");
    const contentLogin =
        `
        <article id="signin" class="container">
            <header class="container-circle"><img class="img-fluid" src="./img/avatar_1526901472.png"></header>
           
            <div class="login__row">
                <input id="email" type="email" placeholder="ingrese su email">
            </div>
            <div class="login__row">
                 <input id="password" type="password" placeholder="ingrese su clave">
            <div class="login__row">
            <div>
            <button id="login">INGRESAR</button>
            </div>
            <a href="#/registry"><button>Registrarse</button></a>
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
        <article id="signin" class="container">
        <header class="container-circle"><img class="img-fluid" src="./img/avatar_1526901472.png"></header>
             <p>Crear usuario</p>
         <input id="emailRegistro" type="email" placeholder="ingrese su email">
         <input id="passwordRegistro" type="password" placeholder="ingrese una clave">
        <div>
         <button id="registry">REGISTRARSE</button>
         </div>
         <button id="registryGoogle">REGISTRARSE con google</button>
         
         <p class="login_signin"> ¿Ya tienes una cuenta? <a href="#/login">Iniciar sesion</a></p> 
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