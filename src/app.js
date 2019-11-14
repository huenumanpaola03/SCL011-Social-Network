// Routes
import { initialFirebase } from './utils/configFirebase.js'
import { initRouter } from './route.js';
// import { observer } from './observer.js'

console.log("inicializando firebase, rutas y observador");
/* init será la función que llame a initRouter apenas cargue el sitio */
const init = () => {
    initialFirebase();
    initRouter();
    // observer();
}
window.addEventListener('load', init);