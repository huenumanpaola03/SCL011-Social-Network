import {controllersRegistry, controllersLogin, loginGoogle} from '../controllers/controllersUsers.js'



export const templateLogin = () => {

const containerLogin = document.createElement("div");

const contentLogin = 
`
 <input id="email" type="email" placeholder="ingrese su email">
<input id="password" type="password" placeholder="ingrese su clave">
<button id="login">INGRESAR</button>
<a href="#/registry"><button>Registrarse</button></a>

`;
containerLogin.innerHTML = contentLogin;

//llamamos al boton del div dinamico 
const btn = containerLogin.querySelector("#login");
btn.addEventListener("click", () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    controllersLogin(email,password);
})
return containerLogin;
}










export const templateRegistry = () => {
    const containerRegistry = document.createElement("div");
    
    const contentRegistry = 
    `
    <P>Crear usuario</P>
    <input id="emailRegistro" type="email" placeholder="ingrese su email">
    <input id="passwordRegistro" type="password" placeholder="ingrese una clave">
    <button id="registry">REGISTRARSE</button>
    <button id="registryGoogle">REGISTRARSE con google</button>
    `;
    containerRegistry.innerHTML = contentRegistry;
    
    //llamamos al boton del div dinamico 
    const btn = containerRegistry.querySelector("#registry");
    btn.addEventListener("click", ()=>{
        let emailRegistry = document.getElementById("emailRegistro").value;
        let passwordRegistry = document.getElementById("passwordRegistro").value;
    
      
        controllersRegistry(emailRegistry,passwordRegistry); 
     });

     const btnGoogle = containerRegistry.querySelector('#registryGoogle');
     // evento del botón que llama a la autentificación de google.
     btnGoogle.addEventListener('click', () => {
       loginGoogle();
     })
  

  
    return containerRegistry;
    }
    

