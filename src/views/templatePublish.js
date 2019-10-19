//Manejo del dom, extracion de valores para guardar en firebase y conexion con funcion

export const templatePublish = () => {

    const containerPublish = document.createElement('div');
    const contePublish = `
    
    <p id="publish">Nombre: <input type="text" name="nombre" size="40"></p>

    `
    containerPublish.innerHTML = contePublish;

    const btn = containerPublish.querySelector('#publish');
    btn.addEventListener('click', ()=>{
      
    })
}