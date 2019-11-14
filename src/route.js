/* import { templateLogin } from './views/templateLogin.js';
import { templateRegistry } from './views/templateRegistry.js';*/
import { templateHome } from './views/templateHome.js';
import { templateRegistry, templateLogin } from './views/templateUsers.js';
import { templatemuro } from './views/templatemuro.js'
console.log("esta aqui en rutas");

// si el hash es igual #/home que se ejecute la funcion que me lleva a home asi igual
//para el resto 
export const changeRouter = (hash) => {
    if (hash === '') {
        return showTemplate('#/home');
    }

    if (hash === '#/home') {
        return showTemplate(hash);
    }

    if (hash === '#/login') {
        return showTemplate(hash);
    }
    if (hash === '#/registry') {
        return showTemplate(hash);
    }
    if (hash === '#/muro') {
        return showTemplate(hash);
    }



}




// exportando las funciones 
export const showTemplate = (hash) => {
    const router = hash.substring(2);
    const containerRoot = document.getElementById('root');
    containerRoot.innerHTML = '';


    //abre el hash que se solicito y si no esta el caso  da error
    switch (router) {
        case 'home':
            containerRoot.appendChild(templateHome());
            break;

        case 'login':
            containerRoot.appendChild(templateLogin());
            break;

        case 'muro':
            containerRoot.appendChild(templatemuro());
            break;

        case 'registry':
            containerRoot.appendChild(templateRegistry());
            break;

        default:
            containerRoot.innerHTML = `<p>Error 404</p>`
    }
}


//el hash es la ruta que cambia en mi app
// inicializamos la ruta, al escuchar la funcion changeroute 

// si es que window tiene atributo de cambio agrega locacion de hash
export const initRouter = () => {
    window.addEventListener('load', changeRouter(window.location.hash));

    if ('onhashchange' in window) {
        window.onhashchange = () => {
            changeRouter(window.location.hash);
        }
    }
}