import { templatePublish } from './views/templatePublish.js';
//si el hash es igual #/home que se ejecute la funcion que me lleva a home asi igual
//para el resto 
const changeRouter = (hash) => {

    if (hash === '#/publish') {
        return showTemplate(hash);
    }

}

// exportando las funcion
export const showTemplate = (hash) => {
    const router = hash.substring(2);
    const containerRoot = document.getElementById('root');
    containerRoot.innerHTML = '';

    //abre el hash que se solicito y si no esta el caso  da error
    switch (router) {
        case 'publish':
            containerRoot.appendChild(templatePublish())
            break;
        default:
            containerRoot.innerHTML = `<p>Error 404</p>`
    }
}


//el hash es la ruta que cambia en mi app
// inicializamos la ruta, al escuchar tre la funcion changeroute 

// si es que window tiene atributo de cambio agrega location de hash
export const initRouter = () => {
    window.addEventListener('load', changeRouter(window.location.hash));

    if ('onhashchange' in window) {
        window.onhashchange = () => {
            changeRouter(window.location.hash);
        }
    }
}