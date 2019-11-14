import { SignOff } from '../controllers/controllersStart.js'

export const sesionIniciada = () =>{

  
    const containerCreate = document.createElement("div");
    

  
       const contentCreate = 
    `<p> sesion iniciada ya dentro de la aplicacion </p>
    <button id="close">cerrar sesion</button>`;
    containerCreate.innerHTML = contentCreate;

    const btnClose = containerCreate.querySelector("#close");
    btnClose.addEventListener("click",()=>{
       
      SignOff();

    })
    
    
    return containerCreate;
    }
  

   
