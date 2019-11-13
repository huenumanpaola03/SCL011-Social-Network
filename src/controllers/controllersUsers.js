    //inicio de sesion- cierre de sesion- autenticacion- guarda foto de perfil- devuelve nombre de usuario iniciado
export const controllersLogin = (email, password) => {

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function() {
      window.location.hash = "#/inicio";
      //      changeRouter("#/inicio");
     //  window.location.hash("#/inicio")
  

  
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...

        console.log(errorCode);
        console.log(errorMessage);
      });

} 









//abrir con google
export const loginGoogle = () => {
 // Signs-in Friendly Chat.
  // Sign into Firebase using popup auth & Google as the identity provider.
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
}
  






































//registra usuario 
export const controllersRegistry = (email, password) => {

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function(){
      check()
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...

        console.log(errorCode);
        console.log(errorMessage);
      });

    }

//envia mensaje de verificacion al usuario
   export const check = () => {

      var user = firebase.auth().currentUser;

user.sendEmailVerification()
.then(function() {
  // Email sent.
  console.log("enviando correo ...")

}).catch(function(error) {
  // An error happened.
  console.log(error)
});
    }



//verifica si lo ingresado coincide con un usuario en el caso de no da mensaje de que no existe usuario 

