//Manejo del dom, extracion de valores para guardar en firebase y conexion con funcion
import { writePost } from '../models/mpost.js';

export const templatePublish = () => {
    //Se crea un elemento div y lo guardo en containerPublish
    const containerPublish = document.createElement('div');
    //Guardo el template en la variable contePublish
    const contePublish = `
    <p><input id="publish" type="text" name="nombre" size="40"></p>
    <button id="btnPost">Publicar</button>
    `
        //Guardo en el div (containerPublish) el template (contePublish)
    containerPublish.innerHTML = contePublish;

    //Boton
    const btn = containerPublish.querySelector('#btnPost');
    btn.addEventListener('click', () => {

        let publication = document.querySelector("#publish").value;
        console.log("boton funcionando");
        console.log(publication);
        writePost(publish);
        return publication;

    })

    return containerPublish;
}