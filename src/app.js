import { initFire } from '/firebase.js';
import { initRouter } from './route.js';
//Firebase
const init = () => {
    initFire();
    initRouter()
}


window.addEventListener('load', init);