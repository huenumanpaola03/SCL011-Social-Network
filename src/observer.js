


 export const observer = () => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log("existe usuario activo");

  
  
        // User is signed in.
        let displayName = user.displayName;
        console.log(displayName);
        let email = user.email;
        console.log(email);
  console.log(".....................................................");
        console.log(user.emailVerified);
        console.log(".......................................................");
  
        let emailVerified = user.emailVerified;
        console.log(emailVerified);
        let photoURL = user.photoURL;
        console.log(photoURL);
        let isAnonymous = user.isAnonymous;
        console.log(isAnonymous);
        let uid = user.uid;
        console.log(uid);
        let providerData = user.providerData;
        console.log(providerData);
        // ...
      } else {
        console.log("no existe usuario");
      
  
        // User is signed out.
        // ...
      }
    });
  
  }
  observer()
  
  
  
  
  
  