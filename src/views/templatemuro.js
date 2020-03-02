import { toPost, readPost, deletepost, updatepost } from '../models/mpost.js'
import { SignOff } from '../controllers/controllersStart.js'


export const templatemuro = () => {
    const contenTempMuro = document.createElement("section");
    const templateMuro = `
    <div class="muro">

    
    <header> 
        <div class="routerMuro"> 
        <a href="#">Inicio</a>
        <a href="#">Perfil</a>
        <a href="#"id="close">cerrar sesion</a>
        </div>
    </header>

   <div class="createPost">
        <h2> create post </h2>
    </div>
    
    <article>
 
       
    <textarea id="newPost" placeholder="Escribe aqui"></textarea>
       <div class="btnsPost">
        <button id="btnPost">Publicar</button>
        <button id="btnUpdate">Actualizar</button>
       </div>
    </article>

    <table>
    <thead>
        <tr>
        <th>Publicacion</th>
        </tr>
    </thead>

    <tbody id="templdata">
    
    </tbody
    
    </table>
    
    </div>
`
    contenTempMuro.innerHTML = templateMuro;

    // Boton
    const btn = contenTempMuro.querySelector('#btnPost');
    btn.addEventListener('click', () => {

        //metodo de firebase que permite saber si 
        // el usuario esta autentificado
        const user = firebase.auth().currentUser //obtengo el id del usuario

        if (user == null) {
            alert('Debes autenticarte para realizar un post')
        }

        let uid = firebase.auth().currentUser.uid
        let post = document.querySelector("#newPost").value;
        let table = document.querySelector("#templdata");

        //Llamando a la funcion que crea el post en firebase
        toPost(uid, post);
        document.querySelector("#newPost").value = "";


        readPost()
            .then(array => {
                table.innerHTML = "";
                array.forEach((element) => {
                    console.log(element.id);
                    table.innerHTML +=
                        `
                  <article id="container${element.id}">

                        <span id="post${element.id}">${element.data().post}</span> 
                        <div class="btnsEdit">
                        <button id="dele${element.id}" class="btnDelete" >Eliminar</button>
                        <button id="upda${element.id,element.data().post}" class="btnEdit">Editar</button>
                        </div>
                  </article>
                  
                 `
                });

                return array

            })
            .then(array => {
                //Boton Eliminar
                array.forEach((element) => {
                    const btndelete = document.getElementById("dele" + element.id);
                    const container = document.getElementById("container" + element.id);
                    btndelete.addEventListener('click', () => {
                        deletepost(element.id);
                        container.innerHTML = "";

                    })


                })

                return array

            }).then(array => {
                //Boton Update
                array.forEach((element) => {
                    console.log(element.data().post);
                    //Guardo el id y el post que viajan en el boton editar. en una variable
                    const idUpdate = `${element.id,element.data().post}`
                        //Boton editar
                    const btnEdit = document.getElementById("upda" + idUpdate);
                    //Contenedor
                    const container = document.getElementById("container" + element.id);

                    btnEdit.addEventListener('click', () => {
                        //El valor de post viaja a el tex-tarea
                        document.querySelector("#newPost").value = element.data().post
                            //Muestro el boton de actualizar
                        document.getElementById("btnUpdate").style.display = "block";
                        //Oculto el boton de publicar
                        document.getElementById("btnPost").style.display = "none";
                        btnUpdate

                        document.getElementById("btnUpdate").addEventListener('click', async() => {
                            const newValue = document.querySelector("#newPost").value;

                            await updatepost(element.id, newValue);
                            document.getElementById("newPost").value = " ";
                            console.log("aqui va");

                            document.getElementById("btnUpdate").style.display = "none";
                            //Oculto el boton de publicar
                            document.getElementById("btnPost").style.display = "block";
                            let x = document.getElementById("post" + element.id)
                            console.log(`esta essss ${x}`);
                            x.innerText = newValue;

                        })

                    })
                })

            })



    })

    const btnClose = contenTempMuro.querySelector("#close");
    btnClose.addEventListener("click", () => {

        SignOff();

    })

    return contenTempMuro;
}