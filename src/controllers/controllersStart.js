    //cierra sesion
    export const SignOff = () => {

        firebase.auth().signOut()
        .then(function() {
          window.location.hash = "#/login"
             // Sign-out successful.
           }).catch(function(error) {
             // An error happened.
           });
      }
