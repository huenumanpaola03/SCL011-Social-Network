//import { templatemuro } from '../views/templatemuro.js'

//Funcion de firebase que permite crear y guardar datos en la base de datos
export const toPost = (uid, post) => {

    //Declaro mi una variable a traves de la cual puea acceder a mi funcion
    let db = firebase.firestore();
    console.log("entro aqui");


    db.collection("Post").add({

            uid: firebase.auth().currentUser.uid,
            post: post,
            date: new Date(),


        })
        .then(docRef => {
            console.log(`Document written with ID: , ${docRef.id}`);
        })
        .catch(function(error) {
            console.error(`Error adding document:, ${error}`);
        });


}

//Funcion de firebase que nos permite Leer los datos en la interfaz en tiempo real

//que lea todos los post suscribiendose a la coleccion completa!!!----
export const readPost = () => {

    let data = new Promise((resolve, reject) => {
        let db = firebase.firestore();
        console.log("entro aqui tambn");

        db.collection("Post").onSnapshot((querySnapshot) => {

            db.collection("Post")
                .where("uid", "==", firebase.auth().currentUser.uid).get()
                .then(function(querySnapshot) {
                    return querySnapshot
                })
                .then(res => {
                    resolve(res);
                })
                .catch((error) => {
                    reject(error)
                    console.log("Error getting documents: ", error);
                });

        })


    })
    return data;

}



//Funcion de firebase que nos permite eliminar los datos en la interfaz en tiempo real
export const deletepost = (id) => {

    let db = firebase.firestore();

    db.collection("Post").doc(id).delete()
        .then(function() {
            console.log("Document successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });

}

//Funcion de firebase que nos permite editar los datos en la interfaz en tiempo real

export const updatepost = (id, newValue) => {
    console.log(id);
    console.log(newValue);
    let db = firebase.firestore();
    let postRef = db.collection("Post").doc(id);

    // Set the "capital" field of the city 'DC'
    return postRef.update({
            post: newValue
        })
        .then(function() {
            console.log("Document successfully updated!");
        })
        .catch(function(error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
}