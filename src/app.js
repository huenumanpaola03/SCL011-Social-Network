// Routes
import { initRouter } from './route.js';
import { observer }  from './observer.js'

/* init será la función que llame a initRouter apenas cargue el sitio */
const init = () => {
  initRouter();
  observer();
}
window.addEventListener('load', init);


