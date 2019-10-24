console.log('Iniciando aplicación...');
import { initFire } from './utils/firebase.js';
import { initRouter } from './route.js';
// //Firebase
const init = () => {
    initFire();
    initRouter()
}


window.addEventListener('load', init);